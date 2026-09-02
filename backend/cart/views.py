from django.shortcuts import render
from rest_framework.generics import RetrieveAPIView, CreateAPIView,RetrieveUpdateAPIView,ListAPIView,GenericAPIView
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from .models import Cart,CartItem
from .serializers import CartItemCreateSerializer, CartDetailSerializer,CartItemListSerializer
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from account.models import User


# Create your views here.
class CartItemCreateAPIView(CreateAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemCreateSerializer
    permission_classes = [IsAuthenticated]

    # def post(self, request, format=None):
    #     serializer = CartItemCreateSerializer(data=request.data)
    #     print(serializer)
    #     if serializer.is_valid():
    #         print('-'*1000)
    #         serializer.cart = Cart.objects.get(id=2).id
    #         # serializer.amount = 4
            
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CartDetailAPIView(APIView):
    permission_classes = [AllowAny]

    def get_serializer_context(self):
        context = super().get_serializer_context()
        
        # Add the request object to the context dictionary
        context['request'] = self.request
        return context
        
    def get(self, request):
        cart = Cart.objects.filter(
                user_id=3,
            ).first()

        # serializer = self.get_serializer(data=request.data, context={'request': request})

        serializer = CartDetailSerializer(cart)
        serializer.context['request'] = request
        return Response(serializer.data)


from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponse
import json
from django.shortcuts import get_object_or_404
from product.models import Product
from .models import Cart, CartItem
from django.contrib.auth.decorators import login_required
from account.models import User
from django.conf import settings
import requests
import json
from django.utils import timezone



# Create your views here.
# TODO: make cart function login required
@login_required(login_url="account:login_page")
def cart_view(request):
    # TODO: make context prosessor for showing cart and its items in navbar
    cart = Cart.objects.filter(user=request.user, is_paid=False).first()
    return render(request, "cart/cart.html", {"cart": cart})


def add_to_cart(request):
    if request.method == "POST":
        data = json.loads(request.body)
        # user = User.objects.get(id=request.user.id)

        cart = Cart.objects.filter(user=request.user, is_paid=False).first()
        product = Product.objects.get(id=data["product_id"])

        if not cart:
            cart = Cart(user=request.user)
            cart.save()

        cart_item = cart.cartitem_set.all().filter(product=product).first()
        if cart_item:
            cart_item.amount += 1
            cart_item.save()
        else:
            cart_item = CartItem(product=product, cart=cart, amount=1)
            cart_item.save()
        # TODO: show error message with json to user if not authenticated

        return JsonResponse({"status": "ok", "product_amount": cart_item.amount})
    return JsonResponse({"status": "error", "message": "محصول خواسته شده تمام شده است"})


def change_cartitem_amount(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            cartitemid = data.get("cartItemId")
            action = data.get("action")

            cart = Cart.objects.filter(user=request.user, is_paid=False).first()
            if not cart:
                return JsonResponse({"status": "error", "message": "سبد خرید یافت نشد"})

            cart_item = cart.cartitem_set.filter(id=cartitemid).first()
            if not cart_item:
                return JsonResponse(
                    {"status": "error", "message": "آیتم سبد خرید یافت نشد"}
                )

            if action == "increase":
                cart_item.amount += 1
            elif action == "decrease":
                cart_item.amount -= 1

            if cart_item.amount < 1:
                cart_item.delete()
                return JsonResponse(
                    {
                        "status": "ok",
                        "amount": 0,
                        "item_total_price": 0,
                        "cart_total_price": cart.get_total_price(),
                    }
                )

            cart_item.save()

            item_total_price = cart_item.get_price()
            cart_total_price = cart.get_total_price()

            return JsonResponse(
                {
                    "status": "ok",
                    "amount": cart_item.amount,
                    "item_total_price": item_total_price,
                    "cart_total_price": cart_total_price,
                }
            )

        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)})
    return JsonResponse({"status": "error", "message": "درخواست نامعتبر است"})

def remove_from_cart(request):
    if request.method == 'POST':
        print(request.method)
        try: 
            data = json.loads(request.body)
            cartitemid = data.get('cartItemId')

            cart = Cart.objects.filter(user=request.user, is_paid=False).first()
            if not cart:
                return JsonResponse({'status': 'error', 'message': 'سبد خرید یافت نشد'})

            cart_item = cart.cartitem_set.filter(id=cartitemid).first()
            if not cart_item:
                return JsonResponse({'status': 'error', 'message': 'آیتم سبد خرید یافت نشد'})

            cart_item.delete()
            return JsonResponse({'status': 'ok', 'message': 'آیتم از سبد خرید حذف شد'})

        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)})
    return JsonResponse({'status':'error'})
            
    
if settings.SANDBOX:
    sandbox = "sandbox"
else:
    sandbox = "www"


ZP_API_REQUEST = f"https://{sandbox}.zarinpal.com/pg/rest/WebGate/PaymentRequest.json"
ZP_API_VERIFY = f"https://{sandbox}.zarinpal.com/pg/rest/WebGate/PaymentVerification.json"
ZP_API_STARTPAY = f"https://{sandbox}.zarinpal.com/pg/StartPay/"

amount = 1000  # Rial / Required
description = "توضیحات مربوط به تراکنش را در این قسمت وارد کنید"  # Required
phone = "YOUR_PHONE_NUMBER"  # Optional
# Important: need to edit for realy server.
CallbackURL = "http://127.0.0.1:8000/cart/verify-payment"


def cart_pay(request):
    cart = Cart.objects.filter(user=request.user, is_paid=False).first()

    data = {
        "MerchantID": settings.MERCHANT,
        "Amount": cart.get_total_price(),
        "Description": cart.user.get_full_name(),
        "Phone": request.user.phone_number,
        "CallbackURL": CallbackURL,
    }
    data = json.dumps(data)
    # set content length by data
    headers = {"content-type": "application/json", "content-length": str(len(data))}
    try:
        response = requests.post(ZP_API_REQUEST, data=data, headers=headers, timeout=10)

        if response.status_code == 200:
            response = response.json()
            if response["Status"] == 100:
                return redirect(ZP_API_STARTPAY + str(response["Authority"]))
                # return {'status': True, 'url': ZP_API_STARTPAY + str(response['Authority']), 'authority': response['Authority']}
            else:
                return {"status": False, "code": str(response["Status"])}
        return response

    except requests.exceptions.Timeout:
        return {"status": False, "code": "timeout"}
    except requests.exceptions.ConnectionError:
        return {"status": False, "code": "connection error"}


def verify_payment(request):
    cart = Cart.objects.filter(user=request.user, is_paid=False).first()

    data = {
        "MerchantID": settings.MERCHANT,
        "Amount": cart.get_total_price(),
        "Authority": request.GET.get("Authority"),
    }
    data = json.dumps(data)
    # set content length by data
    headers = {"content-type": "application/json", "content-length": str(len(data))}
    response = requests.post(ZP_API_VERIFY, data=data, headers=headers)

    if response.status_code == 200:
        response = response.json()
        if response["Status"] == 100:
            refid = request.GET.get("RefID")
            cart.is_paid = True
            cart.payment_date = timezone.now()

            for item in cart.cartitem_set.all():
                item.final_price = item.product.price
                item.save()

            cart.save()
            return HttpResponse(f"<h1>{refid}</h1>")
            # return {'status': True, 'RefID': response['RefID']}
        else:
            return HttpResponse(f"پرداخت با شکست مواجه شد")
    return response





# عدد نشان









@login_required
def cart_count(request):
    if request.user.is_authenticated:
        cart, created = Cart.objects.get_or_create(user=request.user)
        count = cart.cartitem_set.count()
    else:
        # برای کاربران لاگین نکرده می‌توانید از session استفاده کنید
        count = request.session.get('cart_count', 0)
    
    return JsonResponse({'count': count})
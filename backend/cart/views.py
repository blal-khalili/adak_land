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
                user_id=request.user.id,is_paid=False
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

    
# if settings.SANDBOX:
#     sandbox = "www"
# else:
#     sandbox = "www"


# ZP_API_REQUEST = f"https://{sandbox}.zarinpal.com/pg/rest/WebGate/PaymentRequest.json"
ZP_API_REQUEST = 'https://sandbox.zarinpal.com/pg/v4/payment/request.json'
# ZP_API_VERIFY = f"https://{sandbox}.zarinpal.com/pg/rest/WebGate/PaymentVerification.json"
ZP_API_VERIFY = 'https://sandbox.zarinpal.com/pg/v4/payment/verify.json'

ZP_API_STARTPAY = f"https://sandbox.zarinpal.com/pg/StartPay/"
# amount = 1000  # Rial / Required
# description = "توضیحات مربوط به تراکنش را در این قسمت وارد کنید"  # Required
# phone = "YOUR_PHONE_NUMBER"  # Optional
# Important: need to edit for realy server.
CallbackURL = "http://localhost:5173/verify-payment"


class StartPayAPIView(APIView):

        
    def get(self, request):
        cart = Cart.objects.filter(
                user_id=request.user.id,is_paid=False
            ).first()


        data = {
        "merchant_id": 'cae78af8-2d6f-11ea-97ec-000c295eb8fc',
        "amount": 1000000,
        "description": 'توضیحات',
        "callback_url": CallbackURL,
        }
        data = json.dumps(data)
        # set content length by data
        headers = {"content-type": "application/json", "content-length": str(len(data))}
        try:
            response = requests.post(ZP_API_REQUEST, data=data, headers=headers, timeout=10)

            # print(response.status_code)
            # print(response.json())
            # print(ZP_API_STARTPAY + str(response.json()['data']["authority"]))
            redirect_url = ZP_API_STARTPAY + str(response.json()['data']["authority"])


            # if response.status_code == 200:
            #     response = response.json()
            #     if response["Status"] == 100:
            #         return redirect(ZP_API_STARTPAY + str(response["Authority"]))
                    # return {'status': True, 'url': ZP_API_STARTPAY + str(response['Authority']), 'authority': response['Authority']}
                # else:
                #     return {"status": False, "code": str(response["Status"])}
            # serializer = CartDetailSerializer(cart)
            # serializer.context['request'] = request
            return Response({'redirect_url':redirect_url},status=status.HTTP_200_OK)

        except requests.exceptions.Timeout:
            return {"status": False, "code": "timeout"}
        except requests.exceptions.ConnectionError:
            return {"status": False, "code": "connection error"}






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



@login_required
def cart_count(request):
    if request.user.is_authenticated:
        cart, created = Cart.objects.get_or_create(user=request.user)
        count = cart.cartitem_set.count()
    else:
        # برای کاربران لاگین نکرده می‌توانید از session استفاده کنید
        count = request.session.get('cart_count', 0)
    
    return JsonResponse({'count': count})
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
        "amount": cart.get_total_price(),
        "description": 'توضیحات',
        "callback_url": CallbackURL,
        }
        data = json.dumps(data)
        headers = {"content-type": "application/json", "content-length": str(len(data))}
        try:
            response = requests.post(ZP_API_REQUEST, data=data, headers=headers, timeout=10)
            if response.status_code == 200:
                redirect_url = ZP_API_STARTPAY + str(response.json()['data']["authority"])
                return Response({'redirect_url':redirect_url},status=status.HTTP_200_OK)
            else:
                print(cart.get_total_price())
                return Response({'erorr':'somthing went wrong with payment API'},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except requests.exceptions.Timeout:
            return Response({'erorr':'timeout for zarin pal api'},status=status.HTTP_408_REQUEST_TIMEOUT)
        except requests.exceptions.ConnectionError:
            return Response({'erorr':'internal server connection error'},status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class VerifyPayAPIView(APIView):
    def post(self,request):
        cart = Cart.objects.filter(user_id=request.user.id,is_paid=False).first()
        data = {
            "merchant_id": settings.MERCHANT,
            "amount": cart.get_total_price(),
            "authority": json.loads(request.body)['authority'],
        }
        data = json.dumps(data)
        headers = {"content-type": "application/json", "content-length": str(len(data))}
        response = requests.post(ZP_API_VERIFY, data=data, headers=headers)
        # response = response.json()
        print(response.json())


        if response.status_code == 200:
            verification_code = response.json()['data']['code']
            if verification_code == 100 or verification_code == 101:
                # response['ref_id']

                cart.is_paid = True
                cart.payment_date = timezone.now()
                cart.save()
                

                ref_id = response.json()['data']['ref_id']
                return Response({'message':'payment is successful','ref_id':ref_id},status=status.HTTP_200_OK)
            elif verification_code == -51:
                return Response({'message':'you cancelled payment'},status=status.HTTP_404_NOT_FOUND)

        return Response({'errrrrrrrrrrrrrrrrrrrrr':'test data'},status=status.HTTP_200_OK)



def verify_payment(request):
    cart = Cart.objects.filter(user=request.user, is_paid=False).first()

    data = {
        "merchant_id": settings.MERCHANT,
        "amount": cart.get_total_price(),
        "authority": request.GET.get("Authority"),
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
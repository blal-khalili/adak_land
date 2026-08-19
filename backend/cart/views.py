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


# def cart_detail_api_view(requset):
#     cart = Cart.objects.filter(user=requset.user,is_paid=False).first()
#     serializer = CartDetailSerializer(cart)

#     return JsonResponse(serializer.data,safe=True)


def cart_detail_api_view(request):
    cart = Cart.objects.filter(
        user_id=3,
    ).first()

    serializer = CartDetailSerializer(cart)

    return JsonResponse(serializer.data, safe=True)
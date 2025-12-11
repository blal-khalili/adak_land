from django.shortcuts import render
from .models import Product, TypeOfProduct
from .serializers import (
    Producterializer,
    OneProducterializer,
    TypeOfProducterializer,
    OneTypeOfProducterializer,
)
from rest_framework.generics import (
    CreateAPIView,
    RetrieveAPIView,
    ListAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


# Product view :
class ProductApiView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = Producterializer

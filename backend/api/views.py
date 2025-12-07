from django.shortcuts import render
from .models import Products, TypeOfProducts
from .serializers import (
    Productserializer,
    OneProductserializer,
    TypeOfProductserializer,
    OneTypeOfProductserializer,
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


# Products view :
class ProductsApiView(ListAPIView):
    queryset = Products.objects.all()
    serializer_class = Productserializer

from django.shortcuts import render
from .filters import ProductFilter

from .models import Product
from .serializers import (
    ProductSerializer,
    OneProductSerializer,
    TypeOfProductSerializer,
    OneTypeOfProductSerializer,
    PartSerializer,
    OnePartSerializer,
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
from django_filters.rest_framework import DjangoFilterBackend


# Create your views here.
class ProductApiView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProductFilter


class ProductDetailAPIView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = OneProductSerializer
    permission_classes = [AllowAny]
    lookup_field = 'slug'

    # def get_queryset(self):
    #     slug = self.kwargs['slug']
    #     self.queryset = Product.objects.get(slug=slug)
    #     return super().get_queryset()

    # def get_object(self):
    #     slug = self.kwargs["slug"]
    #     # print(dir(self))
    #     p = Product.objects.get(slug=slut)
    #     p.popular += 1
    #     p.save()
    #     self.queryset = Product.objects.get(slug=slug)
    #     return super().get_object()


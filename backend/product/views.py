from django.shortcuts import render, redirect
from .filters import ProductFilter
from django.db.models import Q
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from .models import Product
from .serializers import (
    ProductSerializer,
    OneProductSerializer,
    ProductReviewSerializer,
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
    lookup_field = "slug"

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


class ProductReviwCreateApiView(CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductReviewSerializer
    permission_classes = [IsAuthenticated]



class SearchAPIView(APIView):

    def post(self, request):
        search_input = request.data.get("search_input", "").strip()

        if not search_input:
            return Response(
                {"detail": "Search input is required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        results = Product.objects.filter(
            title__icontains=search_input
        )

        serializer = ProductSerializer(results, many=True)

        return Response(serializer.data)


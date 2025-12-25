from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, TypeOfProduct
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


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


# @method_decorator(csrf_exempt, name='dispatch')
@csrf_exempt
def contactApi(request):
    # TODO: write a class view to save post data from react
    print(request.body)
    return JsonResponse({"name": "mmd goli"})

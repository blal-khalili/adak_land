from django.shortcuts import render
from django.http import JsonResponse
from .models import ContactUs, TypeOfSubject, TypeOfCity
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import (
    ContactUsserializer,
    TypeOfSubjectserializer,
    TypeOfCityserializer,
)
from rest_framework.generics import (
    CreateAPIView,
    RetrieveAPIView,
    ListAPIView,
    UpdateAPIView,
    DestroyAPIView,
)


class ContactUsApiView(CreateAPIView):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsserializer


class TypeOfSubjectApiView(ListAPIView):
    queryset = TypeOfSubject.objects.all()
    serializer_class = TypeOfSubjectserializer


class TypeOfCityApiView(ListAPIView):
    queryset = TypeOfCity.objects.all()
    serializer_class = TypeOfCityserializer

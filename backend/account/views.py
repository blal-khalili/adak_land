from django.shortcuts import render
from rest_framework.generics import RetrieveAPIView, CreateAPIView
from .models import User
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from .serializers import OneUserSerializer,CreateUserSerializer

# Create your views here.


class UserDetailAPIView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = OneUserSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = "id"


class UserCreateAPIView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer
    permission_classes = [AllowAny]

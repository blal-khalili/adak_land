from django.shortcuts import render
from rest_framework.generics import RetrieveAPIView
from .models import User
from rest_framework.permissions import AllowAny
from rest_framework import serializers
# Create your views here.


class OneUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class UserDetailAPIView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = OneUserSerializer
    permission_classes = [AllowAny]
    lookup_field = "id"
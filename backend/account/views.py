from django.shortcuts import render
from rest_framework.generics import RetrieveAPIView, CreateAPIView
from .models import User
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from .serializers import OneUserSerializer,CreateUserSerializer
from django.core.mail import send_mail

# Create your views here.



# send_mail(
#     'Subject here',
#     'Here is the message.',
#     'from@example.com',
#     ['to@example.com'],
#     fail_silently=False,
# )

class UserDetailAPIView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = OneUserSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = "id"


class UserCreateAPIView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer
    permission_classes = [AllowAny]

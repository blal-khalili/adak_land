import json
import time
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.generics import RetrieveAPIView, CreateAPIView,RetrieveUpdateAPIView
from .models import User
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from .serializers import OneUserSerializer,CreateUserSerializer,UserVrficationSerializer
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


def test_send_mail(request):
    send_mail(
        'موضوع پیام',
        'کد تایید شما ۸۲۱۷۹ است.',
        settings.EMAIL_HOST_USER,
        ['example@gmail.com'],
        fail_silently=False,
    )
    return HttpResponse('<h1>hi</h1>')

class UserDetailAPIView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = OneUserSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = "id"


class UserCreateAPIView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer
    permission_classes = [AllowAny]


@csrf_exempt
def user_vrfication(request,email):
    data = json.loads(request.body)
    user = User.objects.filter(email=data['email']).first()
    if user.verification_code_timestamp + 120 < time.time():
        print('code is expired')
    else:
        print('activate user')

    return HttpResponse('<h1>hi</h1>')

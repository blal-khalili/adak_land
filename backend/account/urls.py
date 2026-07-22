from django.urls import path
from .views import UserDetailAPIView, UserCreateAPIView, test_send_mail, user_vrfication

urlpatterns = [
    path("detail/<int:id>/", UserDetailAPIView.as_view()),
    path("create/", UserCreateAPIView.as_view()),
    path('test-send-mail/',test_send_mail),
    path('verify-account/<str:email>/',user_vrfication),
]

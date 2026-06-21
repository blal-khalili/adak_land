from django.urls import path
from .views import UserDetailAPIView, UserCreateAPIView

urlpatterns = [
    path("detail/<int:id>/", UserDetailAPIView.as_view()),
    path("create/", UserCreateAPIView.as_view()),
]

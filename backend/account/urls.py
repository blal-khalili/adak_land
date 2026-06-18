from django.urls import path
from .views import UserDetailAPIView

urlpatterns = [
    path('detail/<int:id>/', UserDetailAPIView.as_view()),
]
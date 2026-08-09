from django.urls import path
from .views import CartItemCreateAPIView

urlpatterns = [
    path("create/cartitem/", CartItemCreateAPIView.as_view()),
]

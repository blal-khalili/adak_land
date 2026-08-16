from django.urls import path
from .views import CartItemCreateAPIView,cart_detail_api_view

urlpatterns = [
    path("create/cartitem/", CartItemCreateAPIView.as_view()),
    path("detail/cart/", cart_detail_api_view),
]

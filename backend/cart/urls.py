from django.urls import path
from .views import CartItemCreateAPIView,CartDetailAPIView,cart_pay,StartPayAPIView

urlpatterns = [
    path("create/cartitem/", CartItemCreateAPIView.as_view()),
    # path("detail/cart/", cart_detail_api_view),
    path("detail/cart/", CartDetailAPIView.as_view()),
    path('startpay/', StartPayAPIView.as_view())
]

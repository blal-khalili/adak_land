from django.urls import path, re_path
from .views import ProductApiView, ProductDetailAPIView


urlpatterns = [
    path("list/", ProductApiView.as_view()),
    # path("detail/<slug>", ProductDetailAPIView.as_view()),
    re_path(r"detail/(?P<slug>[^/]+)/?$", ProductDetailAPIView.as_view()),
]

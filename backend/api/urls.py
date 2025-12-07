from django.urls import path
from .views import ProductsApiView


urlpatterns = [
    path("list/", ProductsApiView.as_view()),
]

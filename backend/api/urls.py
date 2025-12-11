from django.urls import path
from .views import ProductApiView


urlpatterns = [
    path("list/", ProductApiView.as_view()),
]

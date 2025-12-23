from django.urls import path
from .views import ProductApiView,contactApi


urlpatterns = [
    path("list/", ProductApiView.as_view()),
    path("contact/", contactApi),
]

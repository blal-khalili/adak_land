from django.urls import path
from .views import contactApi


urlpatterns = [
    path("contact/", contactApi),
]

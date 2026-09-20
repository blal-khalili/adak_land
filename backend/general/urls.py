from django.urls import path
from .views import ProvinceApiView, CityApiView


urlpatterns = [
    path("provinces/", ProvinceApiView.as_view(), name="province-list"),
    path("cities/", CityApiView.as_view(), name="city-list"),
]
from django.urls import path
from .views import TypeOfSubjectApiView, ContactUsApiView, TypeOfCityApiView
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path("create/", ContactUsApiView.as_view(), name="contactus"),
    path("subjects/", TypeOfSubjectApiView.as_view()),
    path("cities/", TypeOfCityApiView.as_view()),
]

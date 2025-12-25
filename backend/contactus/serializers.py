from rest_framework import serializers
from .models import ContactUs, TypeOfSubject, TypeOfCity


class ContactUsserializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = "__all__"


class TypeOfSubjectserializer(serializers.ModelSerializer):
    class Meta:
        model = TypeOfSubject
        fields = "__all__"


class TypeOfCityserializer(serializers.ModelSerializer):
    class Meta:
        model = TypeOfCity
        fields = "__all__"

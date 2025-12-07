from rest_framework import serializers
from .models import Products, TypeOfProducts


# Products Serializers :
class Productserializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = "__all__"


class OneProductserializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = "__all__"


# TypeOfProducts Serializers :
class TypeOfProductserializer(serializers.ModelSerializer):
    class Meta:
        model = TypeOfProducts
        fields = "__all__"


class OneTypeOfProductserializer(serializers.ModelSerializer):
    class Meta:
        model = TypeOfProducts
        fields = "__all__"

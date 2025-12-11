from rest_framework import serializers
from .models import Product, TypeOfProduct


# Product Serializers :
class Producterializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class OneProducterializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


# TypeOfProduct Serializers :
class TypeOfProducterializer(serializers.ModelSerializer):
    class Meta:
        model = TypeOfProduct
        fields = "__all__"


class OneTypeOfProducterializer(serializers.ModelSerializer):
    class Meta:
        model = TypeOfProduct
        fields = "__all__"

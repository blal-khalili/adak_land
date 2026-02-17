from rest_framework import serializers
from .models import Product, TypeOfProduct, Part


# Product Serializers :
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['title', 'price', 'image', 'available', 'popular', 'slug', 'description']


class OneProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


# TypeOfProduct Serializers :
class TypeOfProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeOfProduct
        fields = "__all__"


class OneTypeOfProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeOfProduct
        fields = "__all__"


class PartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Part
        fields = "__all__"


class OnePartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Part
        fields = "__all__"

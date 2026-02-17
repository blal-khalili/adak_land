from rest_framework import serializers
from .models import Product, TypeOfProduct, Part, ProductColor


# Product Serializers :
class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductColor
        fields = ["title", "color_code"]


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            "title",
            "price",
            "image",
            "available",
            "popular",
            "slug",
            "description",
        ]


class OneProductSerializer(serializers.ModelSerializer):
    colors = ColorSerializer(many=True, read_only=True, source="productcolor_set")

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

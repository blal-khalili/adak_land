from django_filters import rest_framework as filters
from .models import Product


class ProductFilter(filters.FilterSet):
    available = filters.BooleanFilter(field_name="available")
    popular = filters.BooleanFilter(field_name="popular")

    class Meta:
        model = Product
        fields = ["available", "popular"]

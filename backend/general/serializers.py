from rest_framework import serializers
from .models import Province, City


# Province
class ProvinceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Province
        fields = "__all__"


# city
class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = "__all__"

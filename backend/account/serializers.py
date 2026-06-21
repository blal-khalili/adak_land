from rest_framework import serializers
from .models import User


class OneUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

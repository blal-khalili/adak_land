import random
import time
from rest_framework import serializers
from .models import User


class OneUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = "__all__"
        exclude = ['password','groups','is_active','is_staff','is_superuser','last_login','user_permissions']


class CreateUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    phone_number = serializers.CharField(max_length=11)
    # username = serializers.CharField()
    password = serializers.CharField()
    password_validate = serializers.CharField()

    
    def create(self, validated_data):
        if validated_data["password"] != validated_data["password_validate"]:
            raise serializers.ValidationError('پسورد و تکرار آن باهم مطابق نیست')

        email = validated_data["email"]
        # username = validated_data["username"]
        phone_number = validated_data["phone_number"]
        password = validated_data["password"]

        user = User.objects.filter(email=email).first()
        if user != None:
            raise serializers.ValidationError('این ایمیل قبلا ثبت نام کرده است')

        new_user = User(email=email,username=email,phone_number=phone_number)
        new_user.set_password(password)
        new_user.verification_code = random.randint(100000,999999)
        new_user.verification_code_timestamp = int(time.time())
        new_user.is_active = False
        
        new_user.save()

        return validated_data


    class Meta:
        model = User
        # fields = ["username", "email", "phone_number", "password", "password_validate"]
        fields = ["email", "phone_number", "password", "password_validate"]


class UserVrficationSerializer(serializers.Serializer):
    def get_attribute(self, instance):
        print(instance.email)
        return super().get_attribute(instance)
        
        
    def update(self, instance, validated_data):
        return super().update(instance, validated_data)
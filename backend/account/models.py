from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    phone_number = models.CharField(max_length=13)
    avatar = models.ImageField(upload_to="user_avatar/", null=True)

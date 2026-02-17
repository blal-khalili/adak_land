from django.db import models
from account.models import User

# from sorl.thumbnail import ImageField, get_thumbnail


# Part of TypeOfProduct
class Part(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.title


# TypeOfProducts Models :
class TypeOfProduct(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    part = models.ManyToManyField(Part, null=True, blank=True)

    def __str__(self):
        return self.title


# Products Models :
class Product(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    type = models.ForeignKey(
        TypeOfProduct, on_delete=models.CASCADE, null=True, blank=True
    )
    price = models.CharField(max_length=255, null=True, blank=True)
    image = models.ImageField(upload_to="ProductImg", null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    create = models.DateField(auto_now=True, null=True, blank=True)
    available = models.BooleanField(default=False)
    popular = models.BooleanField(default=False)
    slug = models.SlugField(unique=True, allow_unicode=True)

    def __str__(self):
        return self.title


class ProductColor(models.Model):
    title = models.CharField(max_length=100)
    color_code = models.CharField(
        max_length=64, help_text="hex value (#2fb441) , rgb(11,112,17)"
    )
    product = models.ForeignKey(Product, on_delete=models.CASCADE)


class ProductSpecification(models.Model):
    title = models.CharField(max_length=100)
    value = models.CharField(max_length=100)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)


class ProductReview(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(default=0)
    text = models.TextField()
    like = models.PositiveIntegerField(default=0)
    dislike = models.PositiveIntegerField(default=0)
    date = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_created=True)

from django.db import models


# TypeOfProducts Models :
class TypeOfProduct(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.title


# Products Models :
class Product(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    type = models.ForeignKey(
        TypeOfProduct, on_delete=models.CASCADE, null=True, blank=True
    )
    price = models.CharField(max_length=255, null=True, blank=True)
    image = models.FileField(upload_to="ProductImg", null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    create = models.DateField(auto_now=True, null=True, blank=True)

    def __str__(self):
        return self.title

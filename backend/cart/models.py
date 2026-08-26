import uuid
from django.db import models
from django.contrib.auth import get_user_model
from product.models import Product, ProductColor


# Create your models here.
class Cart(models.Model):
    cart_id = models.UUIDField(default=uuid.uuid4, editable=False)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    payment_date = models.DateTimeField(auto_now_add=True)
    is_paid = models.BooleanField(default=False, editable=False)

    def __str__(self):
        return f"{self.user.email} | {self.cart_id}"


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    final_price = models.IntegerField(null=True, blank=True)
    amount = models.IntegerField()
    color = models.ForeignKey(
        ProductColor, on_delete=models.CASCADE, null=True, blank=True
    )

    def __str__(self):
        return f"{self.product.title} | ({self.amount}) | {self.cart.user.email}"

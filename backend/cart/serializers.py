from rest_framework import serializers
from .models import Cart, CartItem
from product.models import Product, ProductColor
from rest_framework import status
from rest_framework.response import Response


class CartItemCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ["product", "color"]

    def create(self, validated_data):
        user = self.context["request"].user

        cart = Cart.objects.filter(user=user, is_paid=False).first()
        if cart == None:
            cart = Cart(user=user)
            cart.save()

        validated_data["amount"] = 1
        validated_data["cart"] = cart
        # validated_data['color'] = validated_data['color']
        if (
            cart.cartitem_set.all()
            .filter(product_id=self.validated_data["product"])
            .exists()
            == False
        ):
            return super().create(validated_data)
        else:
            new_cartitem = (
                cart.cartitem_set.all()
                .filter(product_id=self.validated_data["product"])
                .first()
            )
            new_cartitem.amount += 1
            new_cartitem.save()
            return new_cartitem
            # return Response({'message':'product amount is increased'},status=status.HTTP_200_OK)


class ProductDetailSerializer(serializers.ModelSerializer):
    # image_url = serializers.SerializerMethodField()

    # def get_image_url(self, product):
    #     request = self.context.get('request')
    #     photo_url = product.image.url
    #     return request.build_absolute_uri(photo_url)
    #     # return 'http://127.0.0.1:8000'+photo_url

    class Meta:
        model = Product
        fields = ['id','title','slug','price','image']

class CartItemListSerializer(serializers.ModelSerializer):
    product = ProductDetailSerializer(read_only=True)
    color = serializers.SerializerMethodField()

    def get_color(self, cartitem):
        return cartitem.color.title

    class Meta:
        model = CartItem
        fields = "__all__"


class CartDetailSerializer(serializers.ModelSerializer):
    cartitems = CartItemListSerializer(source="cartitem_set", many=True, read_only=True)
    total_price = serializers.SerializerMethodField()

    def get_total_price(self, cart):

        total_price = 0
        for cartitem in cart.cartitem_set.all():
            total_price += cartitem.amount * cartitem.product.price

        return total_price

    class Meta:
        model = Cart
        fields = "__all__"

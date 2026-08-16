from rest_framework import serializers
from .models import Cart,CartItem

class CartItemCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ['product']

    def create(self, validated_data):
        user =  self.context['request'].user

        cart = Cart.objects.filter(user=user,is_paid=False).first()
        if cart == None:
            cart = Cart(user=user)
            cart.save()
        
        validated_data['amount'] = 1
        validated_data['cart'] = cart
        
        return super().create(validated_data)

class CartItemListSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = "__all__"


class CartDetailSerializer(serializers.ModelSerializer):
    cartitems = CartItemListSerializer(source='cartitem_set',many=True, read_only=True)
    class Meta:
        model = Cart
        fields = '__all__'


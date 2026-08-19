from rest_framework import serializers
from .models import Cart,CartItem
from product.models import Product

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

    class Meta:
        model = CartItem
        fields = '__all__'


class CartDetailSerializer(serializers.ModelSerializer):
    cartitems = CartItemListSerializer(source='cartitem_set',many=True, read_only=True)
    class Meta:
        model = Cart
        fields = '__all__'


from django.contrib import admin
from .models import (
    TypeOfProduct,
    Product,
    Part,
    ProductColor,
    ProductReview,
    ProductSpecification,
)


class ColorInline(admin.TabularInline):  # or admin.StackedInline for a different layout
    model = ProductColor
    extra = 1  # number of empty forms to display
    # raw_id_fields = ('product',)


class ProductSpecificationInline(admin.TabularInline):  # or admin.StackedInline for a different layout
    model = ProductSpecification
    extra = 1  # number of empty forms to display
    # raw_id_fields = ('product',)


class ProductAdmin(admin.ModelAdmin):
    list_display = ["title"]
    # list_filter = ('status',)
    # readonly_fields = ('created_dt', 'completed_dt')
    inlines = [ColorInline, ProductSpecificationInline]


admin.site.register(ProductColor)
admin.site.register(ProductReview)
admin.site.register(ProductSpecification)
admin.site.register(TypeOfProduct)
admin.site.register(Product, ProductAdmin)
admin.site.register(Part)

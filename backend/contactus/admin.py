from django.contrib import admin
from .models import ContactUs, TypeOfCity, TypeOfSubject
# Register your models here.
admin.site.register(ContactUs)
admin.site.register(TypeOfSubject)
admin.site.register(TypeOfCity)

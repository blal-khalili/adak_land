from django.contrib import admin
from .models import ContactUs, TypeOfCity, TypeOfSubject
# Register your models here.
admin.site.register(TypeOfSubject)
admin.site.register(TypeOfCity)



class ContactUsModelAdmin(admin.ModelAdmin):
    list_filter = ['admin_response_confirmed']

admin.site.register(ContactUs,ContactUsModelAdmin)
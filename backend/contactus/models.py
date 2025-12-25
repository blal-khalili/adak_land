from django.db import models


class TypeOfSubject(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.title


class TypeOfCity(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.title


class ContactUs(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    subject = models.ForeignKey(
        TypeOfSubject, on_delete=models.CASCADE, null=True, blank=True
    )
    email = models.EmailField(null=True, blank=True)
    mobile_number = models.IntegerField(null=True, blank=True)
    city = models.ForeignKey(
        TypeOfCity, on_delete=models.CASCADE, null=True, blank=True
    )
    address = models.TextField(null=True, blank=True)
    message_text = models.TextField(null=True, blank=True)
    admin_response = models.TextField(null=True, blank=True)
    admin_response_confirmed = models.BooleanField(default=False)
    class Meta:
        verbose_name_plural = 'contact us'
        verbose_name = 'contact'


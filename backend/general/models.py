from django.db import models

# Create your models here.


class Province(models.Model):
    province_name = models.CharField(max_length=255, null=True, blank=True)
    province_code = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return f"{self.province_name} ({self.province_code})"

    
    class Meta:
        verbose_name = 'استان'
        verbose_name_plural = 'استان ها'


class City(models.Model):
    city_name = models.CharField(max_length=255, null=True, blank=True)
    city_code = models.CharField(max_length=255, null=True, blank=True)
    province = models.ForeignKey(Province, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.city_name} - {self.city_code} - {self.province.province_code}"

    class Meta:
        verbose_name = 'شهر'
        verbose_name_plural = 'شهر ها'
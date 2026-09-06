
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")
from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")

# loads django first
django_application = get_asgi_application()


import json
from pathlib import Path
from django.db import transaction
from general.models import Province, City

# مسیر فایل JSON
BASE_DIR = Path(__file__).resolve().parent
JSON_FILE = BASE_DIR / "utils" / "ProvincesCities.json"
print(BASE_DIR)
print(JSON_FILE)

@transaction.atomic
def import_provinces_cities():
    """
    Import provinces and cities from ProvincesCities.json
    into the database.
    """

    if not JSON_FILE.exists():
        raise FileNotFoundError(f"JSON file not found: {JSON_FILE}")

    # خواندن JSON
    with JSON_FILE.open("r", encoding="utf-8") as file:
        text = file.read()
        data = json.loads(text)
        # print(data)
        # print(file.read())
    if not isinstance(data, list):
        raise ValueError("ProvincesCities.json باید شامل یک آرایه از شهرها باشد.")

    provinces_created = 0
    cities_created = 0

    for item in data:

        province_code = item["provinceId"]
        province_name = item["provinceName"]

        city_code = item["cityId"]
        city_name = item["cityName"]




        # Province

        province, province_created = Province.objects.update_or_create(
            province_code=province_code,
            defaults={
                "province_name": province_name,
            },
        )

        if province_created:
            provinces_created += 1



        # City

        city, city_created = City.objects.update_or_create(
            province=province,
            city_code=city_code,
            defaults={
                "city_name": city_name,
            },
        )

        if city_created:
            cities_created += 1

    print("===================================")
    print("Province / City import completed")
    print("===================================")
    print(f"New provinces : {provinces_created}")
    print(f"New cities    : {cities_created}")
    print(f"Total records : {len(data)}")
    print("===================================")


if __name__ == "__main__":
    import_provinces_cities()

import os
import sys
import json
from pathlib import Path

# مسیر backend
BASE_DIR = Path(__file__).resolve().parent.parent

# اضافه کردن backend به Python path
sys.path.insert(0, str(BASE_DIR))

# تنظیمات Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")

# راه‌اندازی Django
import django

django.setup()


# Django imports

from django.db import transaction
from general.models import Province, City

# JSON file

JSON_FILE = BASE_DIR / "utils" / "ProvincesCities.json"

print("===================================")
print("BASE_DIR:")
print(BASE_DIR)

print("JSON_FILE:")
print(JSON_FILE)
print("===================================")


# Import function


@transaction.atomic
def import_provinces_cities():
    """
    Import provinces and cities from
    ProvincesCities.json into database.
    """

    # بررسی وجود فایل JSON
    if not JSON_FILE.exists():
        raise FileNotFoundError(f"JSON file not found: {JSON_FILE}")

    # Read JSON

    with JSON_FILE.open("r", encoding="utf-8") as file:
        data = json.load(file)

    # بررسی ساختار JSON
    if not isinstance(data, list):
        raise ValueError("ProvincesCities.json باید شامل یک آرایه (list) باشد.")

    # Counters

    provinces_created = 0
    cities_created = 0

    provinces_updated = 0
    cities_updated = 0

    # Process data

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
        else:
            provinces_updated += 1

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
        else:
            cities_updated += 1

    # Result

    print()
    print("===================================")
    print("Province / City import completed")
    print("===================================")

    print(f"New provinces     : {provinces_created}")
    print(f"Updated provinces : {provinces_updated}")

    print(f"New cities        : {cities_created}")
    print(f"Updated cities    : {cities_updated}")

    print(f"Total JSON records: {len(data)}")

    print("===================================")


# Run

if __name__ == "__main__":
    import_provinces_cities()

import requests
import json


# requests.post('http://127.0.0.1:8000/account/verify-account/example@gmail.com/',json={'email':'example@gmail.com','password':'212988'})

sandbox= 'www'

ZP_API_REQUEST = f"https://{sandbox}.zarinpal.com/pg/rest/WebGate/PaymentRequest.json"
ZP_API_VERIFY = f"https://{sandbox}.zarinpal.com/pg/rest/WebGate/PaymentVerification.json"
ZP_API_STARTPAY = f"https://{sandbox}.zarinpal.com/pg/StartPay/"

# amount = 1000  # Rial / Required
# description = "توضیحات مربوط به تراکنش را در این قسمت وارد کنید"  # Required
# phone = "YOUR_PHONE_NUMBER"  # Optional
# Important: need to edit for realy server.
CallbackURL = "http://127.0.0.1:8000/cart/verify-payment"


data = {
"MerchantID": 'aed3a6a2-e0cf-4f5c-a830-e370c77795f7',
"Amount": 1000000,
"Description": 'توضیحات',
# "Phone": '09143239933',
"CallbackURL": CallbackURL,
}
data = json.dumps(data)
# set content length by data
headers = {"content-type": "application/json", "content-length": str(len(data))}
response = requests.post(ZP_API_REQUEST, data=data, headers=headers, timeout=10)
print(response.status_code)
print(response.text)
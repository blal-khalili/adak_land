import requests
import json


# requests.post('http://127.0.0.1:8000/account/verify-account/example@gmail.com/',json={'email':'example@gmail.com','password':'212988'})

sandbox= 'sandbox'

ZP_API_REQUEST = f"https://{sandbox}.zarinpal.com/pg/rest/WebGate/PaymentRequest.json"
ZP_API_VERIFY = f"https://{sandbox}.zarinpal.com/pg/rest/WebGate/PaymentVerification.json"
ZP_API_STARTPAY = f"https://{sandbox}.zarinpal.com/pg/StartPay/"

# amount = 1000  # Rial / Required
# description = "توضیحات مربوط به تراکنش را در این قسمت وارد کنید"  # Required
# phone = "YOUR_PHONE_NUMBER"  # Optional
# Important: need to edit for realy server.
CallbackURL = "http://127.0.0.1:8000/cart/verify-payment"


u2 = 'https://sandbox.zarinpal.com/pg/v4/payment/request.json'

data = {
"merchant_id": 'cae78af8-2d6f-11ea-97ec-000c295eb8fc',
"amount": 1000,
"description": 'توضیحات',
# "Phone": '09143239933',
"callback_url": CallbackURL,
}
data = json.dumps(data)
# set content length by data
headers = {"content-type": "application/json", "content-length": str(len(data))}
response = requests.post(u2, data=data, headers=headers, timeout=10)
print(response.status_code)
print(response.text)



u3 = 'https://payment.zarinpal.com/pg/StartPay/S00000000000000000000000000000y6w63r'
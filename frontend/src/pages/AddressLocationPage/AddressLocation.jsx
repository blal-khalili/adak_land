// import "./AddressLocation.css";
// import adak_land from "../../assets/image/AddressLocationPageImage/adak_land.png"
// import authAxiosInstance from "../../../utils/auth/customAxios";
// import { redirect, useNavigate } from "react-router";


// function AddressLocation() {
//     // TODO: add city and state selector from github iran city list
//     let navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         console.log("فرم ارسال شد");
//         authAxiosInstance.get('cart/startpay/')
//         .then((data)=>{
//             // console.log(data['data']['redirect_url'])
//             navigate(data['data']['redirect_url']);
//         })
//     };





//     return (
//         <section id="AddressLocation_id">
//             <div className="container">
//                 <div className="row py-5 mt-5">

//                     <div className="col-12 text-center py-5 mt-5">
//                         <h2 className="address-location-title">
//                             صفحه آدرس و لوکیشن
//                         </h2>

//                         <hr className="address-location-hr" />
//                     </div>

//                     <div className="address-location-box">

//                         {/* عکس سمت چپ */}
//                         <div className="address-location-image">
//                             <img
//                                 src={adak_land}
//                                 alt="Images"
//                             />
//                         </div>

//                         {/* فرم سمت راست */}
//                         <div className="address-location-form">
//                             <form onSubmit={handleSubmit}>

//                                 <div className="form-group">
//                                     <label htmlFor="inputProvince">
//                                         استان
//                                     </label>
//                                     <select id="inputProvince" className="form-select">
//                                         <option>استان خود را انتخاب کنید</option>
//                                     </select>
//                                 </div>

//                                 <div className="form-group">
//                                     <label htmlFor="inputCity">
//                                         شهر
//                                     </label>
//                                     <select id="inputCity" className="form-select">
//                                         <option>شهر خود را انتخاب کنید</option>
//                                     </select>
//                                 </div>

//                                 <div className="form-group">
//                                     <label htmlFor="inputAddress">
//                                         آدرس
//                                     </label>
//                                     <input
//                                         placeholder="آدرس خود را داخل کادر بنویسید"
//                                         type="text"
//                                         className="form-control"
//                                         id="inputAddress"
//                                     />
//                                 </div>

//                                 <div className="form-group">
//                                     <label htmlFor="inputPostalCode">
//                                         کد پستی
//                                     </label>
//                                     <input
//                                         placeholder="کد پستی خود را داخل کادر بنویسید"
//                                         type="text"
//                                         className="form-control"
//                                         id="inputPostalCode"
//                                     />
//                                 </div>

//                                 <div className="form-group">
//                                     <label htmlFor="inputLicensePlate">
//                                         پلاک
//                                     </label>
//                                     <input
//                                         placeholder="پلاک خود را داخل کادر بنویسید"
//                                         type="text"
//                                         className="form-control"
//                                         id="inputLicensePlate"
//                                     />
//                                 </div>

//                                 <button type="submit" className="address-location-btn">
//                                     ثبت آدرس
//                                 </button>

//                             </form>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default AddressLocation;













import "./AddressLocation.css";
import adak_land from "../../assets/image/AddressLocationPageImage/adak_land.png";
import authAxiosInstance from "../../../utils/auth/customAxios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function AddressLocation() {
    const navigate = useNavigate();

    // استان‌ها
    const [provinces, setProvinces] = useState([]);

    // شهرهای استان انتخاب شده
    const [cities, setCities] = useState([]);

    // استان انتخاب شده
    const [selectedProvince, setSelectedProvince] = useState("");

    // شهر انتخاب شده
    const [selectedCity, setSelectedCity] = useState("");

    // اطلاعات فرم
    const [address, setAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [licensePlate, setLicensePlate] = useState("");


    // گرفتن لیست استان‌ها
    useEffect(() => {
        authAxiosInstance
            .get("general/provinces/")
            .then((response) => {
                setProvinces(response.data);
            })
            .catch((error) => {
                console.error("خطا در دریافت استان‌ها:", error);
            });
    }, []);


    // وقتی استان تغییر کرد، شهرهای آن استان را بگیر
    useEffect(() => {
        if (!selectedProvince) {
            setCities([]);
            setSelectedCity("");
            return;
        }

        authAxiosInstance
            .get(`general/cities/?province=${selectedProvince}`)
            .then((response) => {
                setCities(response.data);
                setSelectedCity("");
            })
            .catch((error) => {
                console.error("خطا در دریافت شهرها:", error);
                setCities([]);
            });

    }, [selectedProvince]);


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("اطلاعات فرم:", {
            province: selectedProvince,
            city: selectedCity,
            address: address,
            postalCode: postalCode,
            licensePlate: licensePlate,
        });

        authAxiosInstance
            .get("cart/startpay/")
            .then((response) => {
                navigate(response.data.redirect_url);
            })
            .catch((error) => {
                console.error("خطا:", error);
            });
    };


    return (
        <section id="AddressLocation_id">
            <div className="container">
                <div className="row py-5 mt-5">

                    <div className="col-12 text-center py-5 mt-5">
                        <h2 className="address-location-title">
                            صفحه آدرس و لوکیشن
                        </h2>

                        <hr className="address-location-hr" />
                    </div>


                    <div className="address-location-box">

                        {/* عکس سمت چپ */}
                        <div className="address-location-image">
                            <img
                                src={adak_land}
                                alt="Images"
                            />
                        </div>


                        {/* فرم سمت راست */}
                        <div className="address-location-form">
                            <form onSubmit={handleSubmit}>

                                {/* استان */}
                                <div className="form-group">
                                    <label htmlFor="inputProvince">
                                        استان
                                    </label>

                                    <select
                                        id="inputProvince"
                                        className="form-select"
                                        value={selectedProvince}
                                        onChange={(e) => {
                                            setSelectedProvince(e.target.value);
                                        }}
                                        required
                                    >
                                        <option value="">
                                            استان خود را انتخاب کنید
                                        </option>

                                        {provinces.map((province) => (
                                            <option
                                                key={province.id}
                                                value={province.id}
                                            >
                                                {province.province_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>


                                {/* شهر */}
                                <div className="form-group">
                                    <label htmlFor="inputCity">
                                        شهر
                                    </label>

                                    <select
                                        id="inputCity"
                                        className="form-select"
                                        value={selectedCity}
                                        onChange={(e) => {
                                            setSelectedCity(e.target.value);
                                        }}
                                        disabled={!selectedProvince}
                                        required
                                    >
                                        <option value="">
                                            شهر خود را انتخاب کنید
                                        </option>

                                        {cities.map((city) => (
                                            <option
                                                key={city.id}
                                                value={city.id}
                                            >
                                                {city.city_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>


                                {/* آدرس */}
                                <div className="form-group">
                                    <label htmlFor="inputAddress">
                                        آدرس
                                    </label>

                                    <input
                                        placeholder="آدرس خود را داخل کادر بنویسید"
                                        type="text"
                                        className="form-control"
                                        id="inputAddress"
                                        value={address}
                                        onChange={(e) => {
                                            setAddress(e.target.value);
                                        }}
                                        required
                                    />
                                </div>


                                {/* کد پستی */}
                                <div className="form-group">
                                    <label htmlFor="inputPostalCode">
                                        کد پستی
                                    </label>

                                    <input
                                        placeholder="کد پستی خود را داخل کادر بنویسید"
                                        type="text"
                                        className="form-control"
                                        id="inputPostalCode"
                                        value={postalCode}
                                        onChange={(e) => {
                                            setPostalCode(e.target.value);
                                        }}
                                        required
                                    />
                                </div>


                                {/* پلاک */}
                                <div className="form-group">
                                    <label htmlFor="inputLicensePlate">
                                        پلاک
                                    </label>

                                    <input
                                        placeholder="پلاک خود را داخل کادر بنویسید"
                                        type="text"
                                        className="form-control"
                                        id="inputLicensePlate"
                                        value={licensePlate}
                                        onChange={(e) => {
                                            setLicensePlate(e.target.value);
                                        }}
                                        required
                                    />
                                </div>


                                <button
                                    type="submit"
                                    className="address-location-btn"
                                >
                                    ثبت آدرس
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddressLocation;

// import "./AddressLocation.css";
// import { useForm } from "react-hook-form";






// function AddressLocation() {
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


//                     <div className="py-5 mt-5" id="form_div_AddressLocation">
//                         <form action="">
//                             <div className="col-md-6">
//                                 <label for="inputProvince" className="form-label text-white">
//                                     استان
//                                 </label>
//                                 <select id="inputProvince" className="form-select">
//                                     <option selected>استان خود را انتخاب کنید</option>
//                                 </select>
//                             </div>


//                             <div className="col-md-6">
//                                 <label for="inputCity" className="form-label text-white">
//                                     شهر
//                                 </label>
//                                 <select id="inputCity" className="form-select">
//                                     <option selected>شهر خود را انتخاب کنید</option>
//                                 </select>
//                             </div>


//                             <div className="col-md-6">
//                                 <label for="inputAddress" className="form-label text-white">
//                                     آدرس
//                                 </label>
//                                 <input placeholder="آدرس خود را داخل کادر بنویسید" type="text" className="form-control" id="inputAddress" />
//                             </div>


//                             <div className="col-md-6">
//                                 <label for="inputPostalCode" className="form-label text-white">
//                                     کد پستی
//                                 </label>
//                                 <input placeholder="کد پستی خود را داخل کادر بنویسید" type="text" className="form-control" id="inputPostalCode" />
//                             </div>


//                             <div className="col-md-6">
//                                 <label for="inputLicensePlate" className="form-label text-white">
//                                     پلاک
//                                 </label>
//                                 <input placeholder="پلاک  خود را داخل کادر بنویسید" type="text" className="form-control" id="inputLicensePlate" />
//                             </div>
//                         </form>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }







// export default AddressLocation;









import "./AddressLocation.css";
import adak_land from "../../assets/image/AddressLocationPageImage/adak_land.png"


function AddressLocation() {
    // TODO: add city and state selector from github iran city list


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("فرم ارسال شد");
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

                                <div className="form-group">
                                    <label htmlFor="inputProvince">
                                        استان
                                    </label>
                                    <select id="inputProvince" className="form-select">
                                        <option>استان خود را انتخاب کنید</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inputCity">
                                        شهر
                                    </label>
                                    <select id="inputCity" className="form-select">
                                        <option>شهر خود را انتخاب کنید</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inputAddress">
                                        آدرس
                                    </label>
                                    <input
                                        placeholder="آدرس خود را داخل کادر بنویسید"
                                        type="text"
                                        className="form-control"
                                        id="inputAddress"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inputPostalCode">
                                        کد پستی
                                    </label>
                                    <input
                                        placeholder="کد پستی خود را داخل کادر بنویسید"
                                        type="text"
                                        className="form-control"
                                        id="inputPostalCode"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inputLicensePlate">
                                        پلاک
                                    </label>
                                    <input
                                        placeholder="پلاک خود را داخل کادر بنویسید"
                                        type="text"
                                        className="form-control"
                                        id="inputLicensePlate"
                                    />
                                </div>

                                <button type="submit" className="address-location-btn">
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


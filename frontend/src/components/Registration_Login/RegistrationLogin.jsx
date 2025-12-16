import "../Registration_Login/RegistrationLogin.css"
import Adack_Land_Logo from "../../assets/image/OriginLogo/Adack_Land_Logo.png"
import { Link } from "react-router";





function RegistrationLogins() {
    return (
        <section id='RegistrationLogin_id'>

            <div className="container">
                <div className="row py-5 mt-4">
                    <div className="glass-box">
                        <img src={Adack_Land_Logo} className="col-md-3 mx-auto" alt="" />
                    <div className="Login_Registration">
                        <div>
                            <h5 className="fw-bolder">ورود یا ثبت‌نام در آداک لند</h5>
                            <p className="mt-5">لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
                            <div className="mt-4">
                                <label for="inputMobileNumber" className="form-label">شماره موبایل</label>
                                <input placeholder="شماره موبایل یا ایمیل" type="tel" className="form-control text-end mt-2" id="inputMobileNumber" />
                            </div>
                            <div className="mt-4">
                                <Link to="#" target="_blank"><button id="btn_RegistrationLogin" className="bg-primary text-white">ورود به آداک لند</button></Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </section>
    )
}




export default RegistrationLogins;
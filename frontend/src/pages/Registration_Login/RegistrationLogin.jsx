import "./RegistrationLogin.css"
import Adack_Land_Logo from "../../assets/image/OriginLogo/Adack_Land_Logo.png"
import { Link } from "react-router";
import authStore from "../../../stores/authStore";
import login from "../../../utils/auth/auth";
import { useRef } from "react";




// TODO: add a second field for passowrd and first field for username
function RegistrationLogins() {
    const inputUsername =  useRef(null)
    const inputPassword =  useRef(null)

    const { username, setUser } = authStore()

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
                                    <input ref={inputUsername} placeholder="نام کاربری خود را وارد کنید" type="text" className="form-control text-end mt-2" id="inputUsername" />
                                    <input ref={inputPassword} placeholder="رمز خود را وارد کنید" type="password" className="form-control text-end mt-2" id="inputPassword" />
                                </div>
                                <div className="mt-4">
                                    {/* <Link to="/Confirmation_Code_Page" ></Link> */}
                                    <button onClick={() => {
                                        login(inputUsername.current.value,inputPassword.current.value)
                                    }
                                    } id="btn_RegistrationLogin" className="bg-primary text-white">ورود به آداک لند</button>
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
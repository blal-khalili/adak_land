import "./Sign_in_Page.css"
import Logo_Adack_Land from "../../assets/image/OriginLogo/Logo_Adack_Land.png"
import { Link, useNavigate } from "react-router";
import authStore from "../../../stores/authStore";
import login from "../../../utils/auth/auth";
import { useRef } from "react";




function sign_in() {
    let navigate = useNavigate();
    const inputUsername = useRef(null)
    const inputPhonenumber = useRef(null)
    const inputEmail = useRef(null)
    const inputPassword = useRef(null)

    const { username, setUser } = authStore()

    return (
        <section id='RegistrationLogin_id'>
            <div className="container">
                <div className="row py-5 mt-4">
                    <div className="glass-box">
                        <img src={Logo_Adack_Land} className="logo col-md-3 mx-auto" alt="" />
                        <div className="Login_Registration">
                            <div>
                                <h5 className="text_h5 fw-bolder">ثبت‌نام در آداک لند</h5>
                                <p id="text_tag_p" className="mt-5">لطفا تمامی فیلد ها را به درستی وارد کنید</p>
                                <div className="mt-4">
                                    <label for="inputUsername" className="form-label">نام کاربری</label>
                                    <input ref={inputUsername} placeholder="نام کاربری خود را وارد کنید" type="text" className="form-control text-end mt-2" id="inputUsername" />
                                    <label for="inputPhonenumber" className="form-label mt-3">شماره تلفن</label>
                                    <input ref={inputPhonenumber} placeholder="شماره تلفن خود را وارد کنید" type="tel" className="form-control text-end mt-2" id="inputPhonenumber" />
                                    <label for="inputEmail" className="form-label mt-3">ایمیل</label>
                                    <input ref={inputEmail} placeholder="ایمیل خود را وارد کنید" type="email" className="form-control text-end mt-2" id="inputEmail" />
                                    <label for="inputPassword" className="form-labe mt-3">رمز عبور</label>
                                    <input ref={inputPassword} placeholder="رمز عبور خود را وارد کنید" type="password" className="form-control text-end mt-2" id="inputPassword" />
                                </div>
                                <div className="mt-4">
                                    {/* <Link to="/Confirmation_Code_Page" ></Link> */}
                                    <button onClick={() => {
                                        if (login(inputUsername.current.value, inputPassword.current.value) == true) {
                                            navigate('/profile')
                                        } else {
                                            navigate('/profile')
                                        }
                                    }
                                    } id="btn_RegistrationLogin" className="bg-primary text-white">ثبت‌نام در آداک لند</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}




export default sign_in;
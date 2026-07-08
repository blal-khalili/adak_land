import "./RegistrationLogin.css"
import Logo_Adack_Land from "../../assets/image/OriginLogo/Logo_Adack_Land.png"
import { Link, useNavigate } from "react-router";
import authStore from "../../../stores/authStore";
import login, { checkAuth } from "../../../utils/auth/auth";
import { useEffect, useEffectEvent, useRef } from "react";



function RegistrationLogins() {
    const { setEmail, setPhoneNumber } = authStore()
    let navigate = useNavigate();
    const inputUsername = useRef(null)
    const inputPassword = useRef(null)
    const email = authStore((state) => state.email)
    const loginError = authStore((state) => state.error)
    const isLoggedIn = authStore((state) => state.isLoggedIn)

    const { username, setUser } = authStore()


    useEffect(()=>{
        if(isLoggedIn == true){
            navigate('/')
        }
    },[isLoggedIn])


    useEffect(() => {
        if (checkAuth() == false) {
            navigate('/')
        }
    }, [])




    return (
        <section id='RegistrationLogin_id'>
            <div className="container">
                <div className="row py-5 mt-4">
                    <div className="glass-box">
                        <img src={Logo_Adack_Land} className="logo col-md-3 mx-auto" alt="" />
                        <div className="Login_Registration">
                            <div>
                                {loginError &&
                                    <div id="alert_Login_Registration" className="alert alert-danger" role="alert">
                                        <span className="icon">⚠️</span>
                                        {loginError}
                                    </div>
                                }
                                <h5 className="text_h5 fw-bolder">ورود در آداک لند</h5>
                                <p id="text_tag_p" className="mt-5">لطفا نام کاربری و رمز عبور خود را وارد کنید</p>
                                <div className="mt-4">
                                    <label for="inputUsername" className="form-label">نام کاربری</label>
                                    <input ref={inputUsername} placeholder="نام کاربری خود را وارد کنید" type="text" className="form-control text-end mt-2" id="inputUsername" />
                                    <label for="inputPassword" className="form-labe mt-3">رمز عبور</label>
                                    <input ref={inputPassword} placeholder="رمز عبور خود را وارد کنید" type="password" className="form-control text-end mt-2" id="inputPassword" />
                                </div>
                                <div className="mt-4">
                                    {/* <Link to="/Confirmation_Code_Page" ></Link> */}
                                    <button onClick={() => {
                                        login(inputUsername.current.value, inputPassword.current.value)
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
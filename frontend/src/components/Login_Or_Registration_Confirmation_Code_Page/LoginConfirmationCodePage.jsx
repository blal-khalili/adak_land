import "../Login_Or_Registration_Confirmation_Code_Page/LoginConfirmationCodePage.css"
import Adack_Land_Logo from "../../assets/image/OriginLogo/Adack_Land_Logo.png"
import { Link } from "react-router";





function Confirmation_Code_Page() {
    return (
                <section id='RegistrationLogin_id'>

            <div className="container">
                <div className="row py-5 mt-4">
                    <div className="glass-box">
                        <img src={Adack_Land_Logo} className="col-md-3 mx-auto" alt="" />
                    <div className="Login_Registration">
                        <div>
                            <h5 className="fw-bolder">کد تایید را وارد کنید</h5>
                            <p className="mt-5"></p>کد تایید برای شماره 09141224566 پیامک شد
                            <div className="mt-4">
                                <label for="inputMobileNumber" className="form-label">کد تایید</label>
                                <input placeholder="کد تایید" type="tel" className="form-control text-end mt-2" id="inputMobileNumber" />
                            </div>
                            <div className="mt-4">
                                <Link to="#" target="_blank"><button id="btn_RegistrationLogin" className="bg-primary text-white">تایید</button></Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </section>
    )
}




export default Confirmation_Code_Page;
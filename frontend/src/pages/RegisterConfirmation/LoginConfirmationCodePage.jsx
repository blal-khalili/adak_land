import "./LoginConfirmationCodePage.css";
import Logo_Adack_Land from "../../assets/image/OriginLogo/Logo_Adack_Land.png"
import { Link } from "react-router";
import { verify_account } from "../../../utils/auth/auth";
import { useRef } from "react";

function ConfirmationCodePage() {

    const verification_code_input = useRef(null)
    
    return (
        <section id="RegistrationLogin_id">
            <div className="container">
                <div className="row py-5 mt-4">
                    <div className="glass-box">
                        <img src={Logo_Adack_Land} className="logo_class col-md-3 mx-auto" alt="" />
                        <div className="Login_Registration">
                            <div>
                                <h5 className="text_h5 fw-bolder">کد تایید را وارد کنید</h5>
                                <p id="text_tag_p" className="mt-5">لطفا کد تایید را به درستی وارد کنید</p>
                                <div className="mt-4">
                                    <label for="inputMobileNumber" className="form-label">
                                        کد تایید
                                    </label>
                                    <input
                                        ref={verification_code_input}
                                        placeholder="کد تایید"
                                        type="tel"
                                        className="form-control text-end mt-2"
                                        id="inputMobileNumber"
                                    />
                                </div>
                                <div className="mt-4">
                                        <button
                                        onClick={()=>{verify_account(verification_code_input.current.value)}}
                                            id="btn_RegistrationLogin"
                                            className="bg-primary text-white"
                                        >
                                            تایید
                                        </button>
                                    {/* <Link to="#" target="_blank">
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ConfirmationCodePage;

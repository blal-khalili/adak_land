import "./Sign_in_Page.css"
import Logo_Adack_Land from "../../assets/image/OriginLogo/Logo_Adack_Land.png"
import { Link, useNavigate } from "react-router";
import authStore from "../../../stores/authStore";
import { register } from "../../../utils/auth/auth";
import { useRef } from "react";
import { useForm } from "react-hook-form";


const invalidEmails = [
    "example.com", "hi2.io",
    "example.net", "example.org",
    "test.com", ".net", ".org",]


const Validphonenumber = [
    "0910", "0911", "0912",
    "0913", "0914", "0915",
    "0916", "0917", "0918",
    "0919", "0930", "0933",
    "0935", "0936", "0937",
    "0938", "0939", "0920",
    "0901", "0902", "0903",
    "0905", "0990", "0993",
    "0904", "0921", "0921",]





function sign_in() {
    let navigate = useNavigate();

    const { username, setUser } = authStore()



    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm();


    const formSubmitHandler = (data) => {
        console.log(data);
        // register(inputPhonenumber.current.value, inputEmail.current.value, inputPassword.current.value, inputPasswordValidate.current.value)

    };



    return (
        <section id='RegistrationLogin_id'>
            <div className="container">
                <div className="row py-5 mt-4">
                    <div>
                        <form action="" className="row g-3"
                            id="form"
                            onSubmit={handleSubmit(formSubmitHandler)}>
                            <div className="glass-box">
                                <img src={Logo_Adack_Land} className="logo col-md-3 mx-auto" alt="" />
                                <div className="Login_Registration">
                                    <div>
                                        <h5 className="text_h5 fw-bolder">ثبت‌نام در آداک لند</h5>
                                        <p id="text_tag_p" className="mt-5">لطفا تمامی فیلد ها را به درستی وارد کنید</p>
                                        <div className="mt-4">

                                            <div>
                                                <label for="inputPhonenumber" className="form-label mt-3">شماره تلفن</label>
                                                <input {...register("phonenumber", {
                                                    validate: {
                                                        isphonenumber: (phonenumber) => {
                                                            let valid = false;
                                                            for (let prefix of Validphonenumber) {
                                                                if (phonenumber.includes(prefix)) {
                                                                    valid = true
                                                                } else {
                                                                    valid == false
                                                                }
                                                            }
                                                            if (valid == false) {
                                                                return "شماره تلفن معتبر نیست"
                                                            }
                                                        }, islengthphonenumber: (lengthphonenumber) => {
                                                            if (lengthphonenumber.length > 11) {
                                                                return "شماره تلفن بیش از حد مجاز طولانی هست !!!"
                                                            }
                                                        }
                                                    }
                                                })} placeholder="شماره تلفن خود را وارد کنید" type="tel" className="form-control text-end mt-2" id="inputPhonenumber" />
                                                {errors.phonenumber && (
                                                    <p id="color-text-errors" className="">{errors.phonenumber.message}</p>
                                                )}
                                            </div>



                                            <div>
                                                <label for="inputEmail" className="form-label mt-3">ایمیل</label>
                                                <input {...register("email", {
                                                    validate: {
                                                        isunkownEmail: (email) => {
                                                            let vaild = true;
                                                            for (let emailAddress of invalidEmails) {
                                                                if (email.includes(emailAddress)) {
                                                                    vaild = false
                                                                }
                                                            }
                                                            if (vaild == false) {
                                                                return "ایمیل معتبر نیست";
                                                            }
                                                        }, isEmailYahoo: (email) => {
                                                            if (email.includes('@yahoo.com')) {
                                                                return 'به علت کنسل شدن ایمیل های یاهو در سال 2025 این ایمیل قابل استفاده نیست'
                                                            }
                                                        },
                                                    },
                                                })} placeholder="ایمیل خود را وارد کنید" type="email" className="form-control text-end mt-2" id="inputEmail" />
                                                {errors.email && (
                                                    <p id="color-text-errors" className="">{errors.email.message}</p>
                                                )}
                                            </div>



                                            <label for="inputPassword" className="form-labe mt-3">رمز عبور</label>
                                            <input placeholder="رمز عبور خود را وارد کنید" type="password" className="form-control text-end mt-2" id="inputPassword" />



                                            <label for="inputPasswordValidate" className="form-labe mt-3">تکرار رمز عبور</label>
                                            <input placeholder="رمز عبور خود را وارد کنید" type="password" className="form-control text-end mt-2" id="inputPasswordValidate" />
                                        </div>
                                        <div className="mt-4">
                                            {/* <Link to="/Confirmation_Code_Page" ></Link> */}
                                            <button type="submit">jflsdjk</button>
                                            <button onClick={() => {
                                            }
                                            } id="btn_RegistrationLogin" className="bg-primary text-white">ثبت‌نام در آداک لند</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}




export default sign_in;
import "./Sign_in_Page.css"
import Logo_Adack_Land from "../../assets/image/OriginLogo/Logo_Adack_Land.png"
import { Link, useNavigate } from "react-router";
import authStore from "../../../stores/authStore";
import { signIn } from "../../../utils/auth/auth";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


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




const validrightcharacterpassword = [
    "الف", "ب", "پ", "ت", "ث",
    "ج", "چ", "ح", "خ", "د",
    "ذ", "ر", "ز", "ژ", "س",
    "ش", "ص", "ض", "ط", "ظ",
    "ع", "غ", "ف", "ق", "ک",
    "گ", "ل", "م", "ن", "و",
    "ه", "ی", "ا", "آ",

    "a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y",
    "z",

    "A", "B", "C", "D", "E",
    "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O",
    "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y",
    "Z",

    " ",

    "0", "1", "2", "3", "4",
    "5", "6", "7", "8", "9",
]





function sign_in() {
    let navigate = useNavigate();

    // const { username, setUser } = authStore()
    const signInError = authStore((state) => state.error)
    const isLoggedIn = authStore((state) => state.isLoggedIn)



    useEffect(() => {
        console.log(isLoggedIn)
        if (isLoggedIn == true) {
            localStorage.setItem('signIn_pop_up_accepted', false)
            // navigate('/RegistrationLogin')
        }
    }, [isLoggedIn])




    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm();


    const formSubmitHandler = (data) => {
        console.log(data);
        console.log(data.phonenumber)
        // TODO: fix the registers for password and confirm_password fields
        signIn(data.phonenumber, data.email, data.password, data.password_validate)
        // TODO: if user is logged in the user should not see this page and should be navigated to home
        // TODO: after sign in navigate the user to Registrationlogin page

    };




    const showSwal = () => {
        withReactContent(Swal).fire({
            text: "حساب کاربری خود را با موفقیت ساختید ✓",
            icon: "success",
        }).then((result) => {
            if (result) {
                localStorage.setItem('signIn_pop_up_accepted', true)
            }
        })
    }


    useEffect(() => {
        if (JSON.parse(localStorage.getItem('signIn_pop_up_accepted')) == false) {
            showSwal()
        }
    }, [])



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
                                            {signInError &&
                                                <div id="alert_Login_Registration" className="alert alert-danger" role="alert">
                                                    <span className="icon">⚠️</span>
                                                    {signInError}
                                                </div>
                                            }
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



                                            <div>
                                                <label htmlFor="inputPassword" className="form-label mt-3">
                                                    رمز عبور
                                                </label>

                                                <input
                                                    {...register("password", {
                                                        validate: {
                                                            ispassword: (password) => {
                                                                for (let character of password) {
                                                                    if (!validrightcharacterpassword.includes(character)) {
                                                                        return "از کاراکترهای مجاز استفاده کنید!!!";
                                                                    }
                                                                }

                                                                return true;
                                                            },

                                                            islengthpassword: (password) => {
                                                                if (password.length < 6) {
                                                                    return "رمز عبور باید حداقل ۶ کاراکتر باشد!!!";
                                                                }

                                                                return true;
                                                            },
                                                        },
                                                    })}
                                                    placeholder="رمز عبور خود را وارد کنید"
                                                    type="password"
                                                    className="form-control text-end mt-2"
                                                    id="inputPassword"
                                                />

                                                {errors.password && (
                                                    <p id="color-text-errors">{errors.password.message}</p>
                                                )}
                                            </div>



                                            <div>
                                                <label htmlFor="inputPasswordValidate" className="form-label mt-3">
                                                    تکرار رمز عبور
                                                </label>

                                                <input
                                                    {...register("password_validate", {
                                                        validate: {
                                                            isMatch: (value) => {
                                                                if (value !== watch("password")) {
                                                                    return "رمز عبور و تکرار آن یکسان نیستند !!!";
                                                                }

                                                                return true;
                                                            },

                                                            isLength: (value) => {
                                                                if (value.length < 6) {
                                                                    return "رمز عبور باید حداقل ۶ کاراکتر باشد !!!";
                                                                }

                                                                return true;
                                                            },
                                                        },
                                                    })}
                                                    placeholder="تکرار رمز عبور را وارد کنید"
                                                    type="password"
                                                    className="form-control text-end mt-2"
                                                    id="inputPasswordValidate"
                                                />

                                                {errors.password_validate && (
                                                    <p id="color-text-errors">
                                                        {errors.password_validate.message}
                                                    </p>
                                                )}
                                            </div>


                                        </div>
                                        <div className="mt-4">
                                            {/* <Link to="/Confirmation_Code_Page" ></Link> */}
                                            <button type="submit" id="btn_RegistrationLogin" className="bg-primary text-white">ثبت‌نام در آداک لند</button>
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
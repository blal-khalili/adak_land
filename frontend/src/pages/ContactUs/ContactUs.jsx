import "./ContactUs.css";
import { useForm } from "react-hook-form";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import useSubjectsForm from "../../hooks/useSubjectsForm";
import useCityForm from "../../hooks/useCityForm";
import { Link } from "react-router";
import { useEffect } from "react";
import Logo_Navbar from "../../assets/image/OriginLogo/Logo_Navbar.png"
// import useCheckAuth from "../../hooks/useCheckAuth";
// import useProfileData from "../../hooks/useProfileData";

const sendContact = async (data) => {
  const res = await axios.post("http://127.0.0.1:8000/adack/contact/", data);
  return res.data;
};


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


const validfullnamecharacter = [
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
]


function ContactUs() {
  const queryClient = useQueryClient();
  const subjects = useSubjectsForm();
  const cities = useCityForm();
  const mutation = useMutation({
    mutationFn: sendContact,
  });
  const submitHandler = (e) => {
    e.preventDefault();
    mutation.mutate({
      id: 1,
      title: "Do Laundry",
    });
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();

  const formSubmitHandler = (data) => {
    console.log(data);
  };

  return (

    <>

      <nav className="navbar navbar-expand-lg mb-5 fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand mt-3" href="#">
            <img src={Logo_Navbar} className="logo" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="bi bi-list-stars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="col-md-5">
              <form className="d-flex">
                <input
                  className="form-control me-5"
                  type="search"
                  placeholder="جستوجو در آداک لند..."
                  aria-label="Search"
                />
                <button id="btn-search" className="btn btn-outline-light mx-1" type="submit">
                  جستوجو
                </button>
              </form>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white mt-2"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  دسته بندی ها
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <ul>
                    <li className="dropdown-item text-primary">محصولات</li>
                    <li>
                      <Link to="/supermarket" className="dropdown-item text-dark">
                        سوپرمارکت
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/mobileaccessories"
                        className="dropdown-item text-dark"
                        href="#"
                      >
                        لوازم جانبی موبایل
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cosmetics"
                        className="dropdown-item text-dark"
                        href="#"
                      >
                        لوازم آرایشی و بهداشتی
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/stationery"
                        className="dropdown-item text-dark"
                        href="#"
                      >
                        لوازم تحریر
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="dropdown-item text-primary">جزئیات</li>
                    <li>
                      <Link className="dropdown-item text-dark" href="#">
                        تنقلات و غذا...
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-dark" href="#">
                        موبایل و لپ تاپ...
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-dark" href="#">
                        دستمال کاغذی و مایع دستشویی...
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-dark" href="#">
                        کوله پشتی و خودکار...
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* {isExpired ?
                                <div>
                                    <li className="nav-item2">
                                        <Link to="/RegistrationLogin" className="nav-link" href="#">
                                            <button className="bg-primary text-white">
                                                <i className="bi bi-arrow-bar-left px-1"></i>ورود
                                            </button>
                                        </Link>
                                    </li>
                                    <li className="nav-item2">
                                        <Link to="/Sign_in_Page" className="nav-link" href="#">
                                            <button className="bg-primary text-white">
                                                <i className="bi bi-arrow-bar-left px-1"></i>ثبت نام کنید
                                            </button>
                                        </Link>
                                    </li>
                                </div> :
                                <div>
                                    <img src={profileData.avatar} alt="" width={40} />
                                    <p>{profileData}</p>
                                </div>
                            } */}



              <li className="nav-item2">
                {/* <Link to="/ContactUs" target="_blank" className="nav-link bg-primary text-white" id="btn-link-ContactUs"><i className="bi bi-person-circle px-1"></i>تماس با ما</Link> */}
                <Link
                  to="/ContactUs"
                  className="nav-link"
                  id="btn-link-ContactUs_id"
                  href="#"
                >
                  <button className="bg-primary text-white">
                    <i className="bi bi-person-circle px-1"></i>تماس با ما
                  </button>
                </Link>
              </li>
              <li className="nav-item1 d-flex">
                <Link className="nav-link text-white" href="#" to="/profile">
                  <i className="bi bi-bell"></i>
                </Link>
              </li>
              <li className="nav-item3 mt-1">
                <Link to="/shoppingcart" className="nav-link text-white">
                  <i className="bi bi-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      <section id="ContactUs-id" className="py-5">
        <div className="container mt-3">
          <div className="row">
            <div className="text-center mt-5">
              <h2 id="h2-text" className="fw-bolder text-white mt-5">تماس با ما</h2>
              <span id="span_id_hr"><hr id="id_hr_line" /></span>
            </div>

            <div className="py-5 mt-5" id="form_div">
              <form
                className="row g-3"
                id="form"
                onSubmit={handleSubmit(formSubmitHandler)}
              >
                <div className="col-md-6">
                  <label for="inputState" className="form-label text-white">
                    موضوع
                  </label>
                  <select {...register("subject", { required: { value: true, message: "انتخاب موضوع اجباریست" } })}
                    id="inputState"
                    className="form-select"
                  >
                    <option selected>موضوع خود را انتخاب کنید</option>
                    {subjects.data && subjects.data.map((list) => (
                      <option value="1">{list.title}</option>
                    ))}
                  </select>
                  {errors.subject && <p className="text-danger">{errors.subject.message}</p>}
                </div>
                <div className="col-md-6">
                  <label for="inputName" className="form-label text-white">
                    نام و نام خانوادگی
                  </label>
                  <input
                    {...register("fullname", {
                      validate: {
                        wordlength: (fullname) => {
                          let vaild = true;
                          for (let fullnamecharacter of fullname) {
                            if (!validfullnamecharacter.includes(fullnamecharacter)) {
                              vaild = false
                            }
                          }
                          if (vaild == false) {
                            return "فقط باید از حروف استفاده شود !!!"
                          }
                          if (fullname.length > 15) {
                            return "اسم نباید بیش از 15 حرف باشد"
                          }
                        }
                      }
                    })}
                    placeholder="نام و نام خانوادگی"
                    type="text"
                    className="form-control"
                    id="inputName"
                  />
                  {errors.fullname && (
                    <p id="color-text-errors" className="">{errors.fullname.message}</p>
                  )}
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label text-white">
                    ایمیل
                  </label>
                  <input
                    {...register("email", {
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
                    })}
                    placeholder="ایمیل"
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                  {errors.email && (
                    <p id="color-text-errors" className="">{errors.email.message}</p>
                  )}
                </div>
                <div className="col-md-6">
                  <label for="inputMobileNumber" className="form-label text-white">
                    شماره موبایل
                  </label>
                  <input
                    {...register("phonenumber", {
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
                    })}
                    placeholder="شماره موبایل"
                    type="tel"
                    className="form-control text-end"
                    id="inputMobileNumber"
                  />
                  {errors.phonenumber && (
                    <p id="color-text-errors" className="">{errors.phonenumber.message}</p>
                  )}
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label text-white">
                    شهر
                  </label>
                  <select {...register("city", {
                    required: {
                      value: true,
                      message: "وارد کردن شهر اجباریست",
                    },
                  })}
                    placeholder="شهر خود را بنویسید"
                    type="text"
                    className="form-control"
                    id="inputCity">
                    <option selected>شهر خود را انتخاب کنید</option>
                    {cities.data && cities.data.map((list) => (
                      <option value="1">{list.title}</option>
                    ))}
                  </select>
                  {errors.city && (
                    <p id="color-text-errors" className="">{errors.city.message}</p>
                  )}
                </div>

                <div className="col-md-6">
                  <label for="inputAddress" className="form-label text-white">
                    آدرس
                  </label>
                  <input
                    {...register("address")}
                    placeholder="آدرس خود را بنویسید"
                    type="text"
                    className="form-control"
                    id="inputAddress"
                  />
                </div>
                <div className="mb-3">
                  <label onClick={() => {
                    for (let i of invalidEmails) {
                      console.log(i)
                    }
                  }} for="exampleFormControlTextarea1" className="form-label text-white">
                    متن پیام
                  </label>
                  <textarea
                    {...register("textmessage")}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                  ></textarea>
                </div>

                {mutation.isSuccess && (
                  <div>
                    <div
                      class="alert alert-success alert-dismissible fade show"
                      role="alert"
                    >
                      پیام شما با موفقیت ثبت شد
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div
                      class="alert alert-info alert-dismissible fade show"
                      role="alert"
                    >
                      لطفا منتظر ادمین برای پاسخگویی باشید
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                  </div>
                )}
                {mutation.isError && (
                  <div
                    class="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    در ارسال دیتا به سرور با خطا مواجه شدیم :(
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                )}

                <div className="col-12">
                  <button

                    id="btn_css"
                    type="submit"
                    className="btn btn-success"
                    disabled={mutation.isPending ? true : false || !isValid}
                  >
                    ثبت و ارسال
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


      <footer id="footer" className="text-dark pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mt-5">
              <h2>آداک لند</h2>

              <p className="mt-4">به آداک لند خوش آمدید از خریدتان در این فروشگاه لذت ببرید.</p>

              <p>09142137122</p>
              <p>Adack Land@gamil.com</p>

              <div id="Social" className="d-flex gap-3">
                <Link >
                  <i className="bi bi-google"></i>
                </Link>

                <Link >
                  <i className="bi bi-instagram"></i>
                </Link>

                <Link >
                  <i className="bi bi-facebook"></i>
                </Link>

                <Link >
                  <i className="bi bi-telegram"></i>
                </Link>
              </div>
            </div>

            <div id="Menu" className="col-md-2 mt-5 col-6">
              <h2 className="pb-3">منو</h2>

              <Link >
                <p>خانه</p>
              </Link>

              <Link >
                <p>داغ ترین ها</p>
              </Link>

              <Link >
                <p>جدید ترین ها</p>
              </Link>

              <Link >
                <p>پر فروش ترین ها</p>
              </Link>
            </div>
            <div id="More" className="col-md-2 mt-5 col-6">
              <h2 className="pb-3">بیشتر</h2>

              <Link >
                <p>سوالی دارید؟</p>
              </Link>

              <Link >
                <p>راهنمایی</p>
              </Link>
            </div>
            <div id="Category" className="col-md-3 mt-5 col-6">
              <h2 className="pb-3">دسته بندی ها</h2>

              <Link to="/supermarket">
                <p>سورمارکت</p>
              </Link>

              <Link >
                <p>لوازم تحریر</p>
              </Link>

              <Link >
                <p>لوازم جانبی موبایل</p>
              </Link>

              <Link >
                <p>لوازم آرایشی و بهداشتی</p>
              </Link>
            </div>

            <hr />

            <div className="col-md-6">2025 © تمامی حقوق محفوظ است. آداک لند </div>
            <div className="col-md-6">شرایط استفاده | سیاست حفظ حریم خصوصی</div>
          </div>
        </div>
      </footer>

    </>

  );
}

export default ContactUs;

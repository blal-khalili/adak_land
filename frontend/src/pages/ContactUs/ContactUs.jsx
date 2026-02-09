import "./ContactUs.css";
import { useForm } from "react-hook-form";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import useSubjectsForm from "../../hooks/useSubjectsForm";
import useCityForm from "../../hooks/useCityForm";


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


const invalidfullnamecharacter = [
  "!", "@", "#",
  "$", "%", "^",
  "&", "*", "+",
  "-", "~", ":",
  "<", ">", ".",
  "?", "=", "_",
  ";", "'", "/",
  "|", "/", "[",
  "]", "{", "}",
  "(", ")", ",",
  "÷", "»", "«",
  "€", "¥", "©",
  "é", "£", "§",
  "®", "№", "℗",
  "✓", "™", "¶",
  "😊" , "😂", "🤧", "😔",
  "🤣" , "😍", "💔", "🤗",
  "😒" , "👌", "❤️‍🩹", "😢",
  "😘" , "😁", "🫠", "😝",
  "❤️" , "💕", "😤", "😩",
  "👍" , "🙌", "🙃", "😏",
  "😎" , "😃", "🙂", "😡",
  "😋" , "😐", "🤨", "🥹",
  "🥲" , "😑", "😓", "🙂‍↔️",
  "🤔" , "😮", "🙈", "🙂‍↕️",
  "🤪" , "😒", "🫢", "💩",
  "🙄" , "🥱", "🤤", "😖",
  "😴" , "🥺", "😈", "😺",
  "😭" , "🤫", "🙊", "👻",
  "🤯" , "🥰", "🦦", "👀",
  "😅" , "☹️", "🤭", "😸",
  "😱" , "🤩", "😬", "😹",
  "😌" , "🫣", "🤮", "😚",
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
    <section id="ContactUs-id">
      <div className="container mt-3">
        <div className="row">
          <div className="text-center mt-5">
            <h2 className="fw-bolder">تماس با ما</h2>
            <hr id="id_hr_line" />
          </div>

          <div className="py-5 mt-5" id="form_div">
            <form
              className="row g-3"
              id="form"
              onChange={handleSubmit(formSubmitHandler)}
            >
              <div className="col-md-6">
                <label for="inputState" className="form-label">
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
                <label for="inputName" className="form-label">
                  نام و نام خانوادگی
                </label>
                <input
                  {...register("fullname", {
                    validate: {
                      wordlength: (fullname) => {
                        let vaild = true;
                        for (let fullnamecharacter of invalidfullnamecharacter) {
                          if (fullname.includes(fullnamecharacter)) {
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
                  <p className="text-danger">{errors.fullname.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
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
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <label for="inputMobileNumber" className="form-label">
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
                  <p className="text-danger">{errors.phonenumber.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <label for="inputCity" className="form-label">
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
                  <p className="text-danger">{errors.city.message}</p>
                )}
              </div>

              <div className="col-md-6">
                <label for="inputAddress" className="form-label">
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
                }} for="exampleFormControlTextarea1" className="form-label">
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
  );
}

export default ContactUs;

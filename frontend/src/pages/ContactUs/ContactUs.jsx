import "./ContactUs.css";
import { useForm } from "react-hook-form";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";

const sendContact = async (data) => {
  const res = await axios.post("http://127.0.0.1:8000/adack/contact/", data);
  return res.data;
};

const invalidEmails = ['example.com','hi2.io']

function ContactUs() {
  const queryClient = useQueryClient();
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
    formState: { errors,isValid },
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
                <select
                  {...register("subject")}
                  placeholder="موضوع را انتخاب کنید "
                  id="inputState"
                  className="form-select"
                >
                  <option selected></option>
                  <option>پیگیری سفارش</option>
                  <option>خدمات پس از فروش</option>
                  <option>سایر موضوعات</option>
                  <option>حسابداری و امورمالی</option>
                  <option>کارت هدیه و گیفت کارت</option>
                  <option>اداک کلاب</option>
                  <option>طلای دیجیتال</option>
                  <option>گزارش خطا در نسخه آزمایشی اپلیکیشن</option>
                </select>
              </div>
              <div className="col-md-6">
                <label for="inputName" className="form-label">
                  نام و نام خانوادگی
                </label>
                <input
                  {...register("fullname")}
                  placeholder="نام و نام خانوادگی"
                  type="text"
                  className="form-control"
                  id="inputName"
                />
                {/* TODO: make a custom validation for phone number page */}
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  ایمیل
                </label>
                <input
                  {...register("email",{validate: {
                      isunkownEmail: (email) => {
                        let vaild = true;
                        for(let emailAddress of invalidEmails){
                          if (email.includes(emailAddress)){
                            vaild = false
                          }
                        }
                        if (vaild == false) {
                          return "ایمیل معتبر نیست";
                        } 
                      },isEmailYahoo:(email)=>{
                        if (email.includes('@yahoo.com')){
                          return 'به علت کنسل شدن ایمیل های یاهو در سال 2025 این ایمیل قابل استفاده نیست'
                        }
                      },
                    },})}
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
                  // TODO: make a custom validation for phone number page
                  {...register("phonenumber")}
                  placeholder="شماره موبایل"
                  type="tel"
                  className="form-control text-end"
                  id="inputMobileNumber"
                />
              </div>
              <div className="col-md-6">
                <label for="inputCity" className="form-label">
                  شهر
                </label>
                <input
                  {...register("city", {
                    required: {
                      value: true,
                      message: "وارد کردن شهر اجباریست",
                    },
                  })}
                  placeholder="شهر خود را بنویسید"
                  type="text"
                  className="form-control"
                  id="inputCity"
                />
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
                <label onClick={()=>{
                  for(let i of invalidEmails){
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

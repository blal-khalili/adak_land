import Navber from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./ContactUs.css";





function ContactUs() {
    return (
        <section id="ContactUs-id">

            <div className="container mt-3">
                <div className="row">

                    <div className="text-center mt-5">
                        <h2 className="fw-bolder">تماس با ما</h2>
                        <hr id="id_hr_line" />
                    </div>

                    <div className="py-5 mt-5" id="form_div">
                        <form className="row g-3" id="form">
                            <div className="col-md-6">
                                <label for="inputState" className="form-label">موضوع</label>
                                <select placeholder="موضوع را انتخاب کنید " id="inputState" className="form-select">
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
                                <label for="inputName" className="form-label">نام و نام خانوادگی</label>
                                <input placeholder="نام و نام خانوادگی" type="text" className="form-control" id="inputName" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputEmail4" className="form-label">ایمیل</label>
                                <input placeholder="ایمیل" type="email" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputMobileNumber" className="form-label">شماره موبایل</label>
                                <input placeholder="شماره موبایل" type="tel" className="form-control text-end" id="inputMobileNumber" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputCity" className="form-label">شهر</label>
                                <input placeholder="شهر خود را بنویسید" type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputAddress" className="form-label">آدرس</label>
                                <input placeholder="آدرس خود را بنویسید" type="text" className="form-control" id="inputAddress" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">متن پیام</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-success">ثبت و ارسال</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>


        </section>
    )
}






export default ContactUs;
import "./Editprofile.css"
import { Link } from "react-router";




function Editprofile() {

    return (

        <section id="Personal_info_id" className="py-5 mt-5">
            <div className="container py-5 mt-5">
                <div className="row">
                    <div className="profile-container">


                        <aside className="sidebar">

                            <div className="user-box">

                                <img
                                    src="https://via.placeholder.com/100"
                                    alt="Profile"
                                />

                                <h3>
                                    <i className="bi bi-person-fill"></i>
                                    سهند علیپور
                                </h3>

                                <p>
                                    <i className="bi bi-telephone-fill"></i>
                                    09123456789
                                </p>

                                <button>
                                    <i className="bi bi-pencil-square"></i>
                                    ویرایش پروفایل
                                </button>

                            </div>

                            <ul className="menu">


                                <Link id="btn_profile_link" className="" to="/Personalinfo" href="#">
                                    <li className="active">
                                        <i className="bi bi-person-circle"></i>
                                        اطلاعات حساب
                                    </li>
                                </Link>


                                <li>
                                    <i className="bi bi-bag-check"></i>
                                    سفارش‌ها
                                </li>

                                <li>
                                    <i className="bi bi-heart"></i>
                                    علاقه‌مندی‌ها
                                </li>

                                <li>
                                    <i className="bi bi-chat-dots"></i>
                                    دیدگاه‌ها
                                </li>

                                <li>
                                    <i className="bi bi-geo-alt"></i>
                                    آدرس‌ها
                                </li>

                                <li>
                                    <i className="bi bi-bell"></i>
                                    پیام‌ها
                                </li>

                                <li className="logout">
                                    <i className="bi bi-box-arrow-right"></i>
                                    خروج
                                </li>

                            </ul>

                        </aside>

                        <div className="content">
                            <div className="profile-form-card">

                                <h3 className="form-title">ویرایش اطلاعات حساب کاربری</h3>

                                <form className="profile-form">

                                    <div className="form-group">
                                        <label>نام و نام خانوادگی</label>

                                        <div className="input-box">
                                            <input type="text" value="سهند علیپور" readOnly />
                                            <button type="button" className="dk-action-btn">
                                                <i className="bi bi-pencil"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>کد ملی</label>

                                        <div className="input-box">
                                            <input type="text" value="274443891235" readOnly />
                                            <button type="button" className="dk-action-btn">
                                                <i className="bi bi-pencil"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>شماره موبایل</label>

                                        <div className="input-box">
                                            <input type="text" value="09146784455" readOnly />
                                            <button type="button" className="dk-action-btn">
                                                <i className="bi bi-pencil"></i>
                                            </button>
                                            {/* <span className="dk-badge">
                                                <i className="bi bi-check-circle-fill"></i>
                                                تایید شده
                                            </span> */}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>ایمیل</label>

                                        <div className="input-box">
                                            <input
                                                type="email"
                                                placeholder="ایمیل وارد نشده"
                                                readOnly
                                            />
                                            <button type="button" className="dk-action-btn">
                                                <i className="bi bi-pencil"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>رمز عبور</label>

                                        <div className="input-box">
                                            <input type="password" value="12345678" readOnly />
                                            <button type="button" className="dk-action-btn">
                                                <i className="bi bi-pencil"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>تاریخ تولد</label>

                                        <div className="input-box">
                                            <input type="text" value="۱۴۰۵/۰۴/۰۷" readOnly />
                                            <button type="button" className="dk-action-btn">
                                                <i className="bi bi-pencil"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>شغل</label>

                                        <div className="input-box">
                                            <input type="text" placeholder="ثبت نشده" readOnly />
                                            <button type="button" className="dk-action-btn">
                                                <i className="bi bi-pencil"></i>
                                            </button>
                                        </div>
                                    </div>

                                    {/* <div className="form-group">
                                        <label>نوع معلولیت</label>

                                        <div className="input-box">
                                            <input type="text" value="تعریف نشده" readOnly />
                                            <button type="button" className="dk-action-btn">
                                                <i className="bi bi-plus-lg"></i>
                                            </button>
                                        </div>
                                    </div> */}

                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}



export default Editprofile;
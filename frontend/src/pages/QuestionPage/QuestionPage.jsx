import "./QuestionPage.css";
import Logo_Adack_Land from "../../assets/image/OriginLogo/Logo_Adack_Land.png";
import Logo_Navbar from "../../assets/image/OriginLogo/Logo_Navbar.png";
import authStore, { useBearStore } from "../../../stores/authStore";
import { checkAuth, logout } from "../../../utils/auth/auth";
import Search from "../../components/Search/Search";
import { Link } from "react-router";
import { CgProfile } from "react-icons/cg";
import { useEffect } from "react";










function QuestionPage() {



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("فرم ارسال شد");
    };






    const userData = useBearStore.getState().userData
    const isLoggedIn = useBearStore.getState().isLoggedIn

    useEffect(() => {
        if (checkAuth() == true) {
            useBearStore.getState().setIsLoggedIn(false)
        }
    }, [])





    return (
        <section id="questionpage_id">
            <div className="container mt-5">
                <div className="row py-5 mt-5">


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
                                {/* <div className="col-md-5">
                                    <form className="d-flex">
                                        <input
                                            className="form-control me-5"
                                            type="search"
                                            placeholder="جستوجو در آداک لند..."
                                            aria-label="Search"
                                        />
                                        <button className="btn btn-outline-light mx-1" type="submit">
                                            جستوجو
                                        </button>
                                    </form>
                                </div> */}
                                <Search buttonClassName="btn-outline-light" />
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <Link
                                            className="nav-link dropdown-toggle text-dark mt-2 text-white"
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

                                    {isLoggedIn ? (
                                        <>
                                            <li className="nav-user">
                                                {userData && (
                                                    <span className="profile-username">
                                                        {userData.username}
                                                    </span>
                                                )}
                                            </li>

                                            <li className="nav-item1 d-flex">
                                                <Link
                                                    className="nav-link text-dark profile-link"
                                                    to="/profile"
                                                >
                                                    {userData?.avatar ? (
                                                        <img
                                                            src={userData.avatar}
                                                            alt="profile"
                                                            className="profile-avatar"
                                                        />
                                                    ) : (
                                                        <i><CgProfile className="profile-icon" /></i>
                                                    )}
                                                </Link>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li className="nav-item2">
                                                <Link
                                                    to="/RegistrationLogin"
                                                    className="nav-link"
                                                >
                                                    <button className="bg-primary text-white">
                                                        <i className="bi bi-arrow-bar-left px-1"></i>
                                                        ورود
                                                    </button>
                                                </Link>
                                            </li>

                                            <li className="nav-item2">
                                                <Link
                                                    to="/Sign_in_Page"
                                                    className="nav-link"
                                                >
                                                    <button className="bg-primary text-white">
                                                        <i className="bi bi-arrow-bar-left px-1"></i>
                                                        ثبت نام کنید
                                                    </button>
                                                </Link>
                                            </li>
                                        </>
                                    )}



                                    {/* <li className="nav-item2">
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
                                    </li> */}




                                    {/* TODO: when logging out the state of userData doesn't change */}
                                    {/* <li>
                                        <button onClick={() => { checkLogin() }} className="bg-primary text-white">
                                            <i className="bi bi-person-circle px-1"></i>خروج
                                        </button>
                                    </li> */}
                                    {/* {isLoggedIn && (
                                        <li className="nav-item1 d-flex">
                                            <Link className="nav-link text-dark" to="/profile">
                                                <i><CgProfile /></i>
                                            </Link>
                                        </li>
                                    )} */}
                                    <li className="nav-item1 d-flex">
                                        <Link className="nav-link text-white" href="#">
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




                    <div className="glass-box_questionpage py-5 mt-5">
                        <img src={Logo_Adack_Land} className="logo col-md-3 mx-auto" alt="" />
                        <div className="questionpage">
                            <div>
                                <h5 className="text_h5_questionpage fw-bolder">موضوع پرسش شما چیست؟</h5>
                                <p id="text_tag_p_questionpage" className="mt-4">موضوع موردنظرتان را در کادر زیر شرح دهید</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="mt-4">
                                        <label htmlFor="inputQuestion" className="form-label">
                                            موضوع پرسش شما :
                                        </label>

                                        <input
                                            placeholder="سوال خود را بنویسید"
                                            type="text"
                                            className="form-control text-end mt-2"
                                            id="inputQuestion"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="submit"
                                            id="btn_inputquestionpage"
                                            className="bg-primary text-white"
                                        >
                                            ارسال
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>




                    <footer id="footer_contactus" className="text-dark pb-4 py-5 mt-5">
                        <div className="container">
                            <div className="row py-5 mt-5">
                                <hr />
                                <div className="col-md-5 mt-5">
                                    <h2>آداک لند</h2>

                                    <p className="mt-4">به آداک لند خوش آمدید از خریدتان در این فروشگاه لذت ببرید.</p>

                                    <p>09142137122</p>
                                    <p>Adack Land@gamil.com</p>

                                    <div id="Social" className="d-flex gap-3  mt-4">
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

                                    <Link className="footer_link_menu" to="/">
                                        <p className="text-dark">خانه</p>
                                    </Link>

                                    <Link className="footer_link_menu">
                                        <p className="text-dark">داغ ترین ها</p>
                                    </Link>

                                    <Link className="footer_link_menu">
                                        <p className="text-dark">جدید ترین ها</p>
                                    </Link>

                                    <Link className="footer_link_menu">
                                        <p className="text-dark">پر فروش ترین ها</p>
                                    </Link>
                                </div>
                                <div id="More" className="col-md-2 mt-5 col-6">
                                    <h2 className="pb-3">بیشتر</h2>

                                    <Link className="footer_link_more" to="/QuestionPage">
                                        <p className="text-dark">سوالی دارید؟</p>
                                    </Link>

                                    <Link className="footer_link_more">
                                        <p className="text-dark">راهنمایی</p>
                                    </Link>

                                </div>
                                <div id="Category" className="col-md-3 mt-5 col-6">
                                    <h2 className="pb-3">دسته بندی ها</h2>

                                    <Link className="footer_link_Categories" to="/supermarket">
                                        <p className="text-dark">سورمارکت</p>
                                    </Link>

                                    <Link className="footer_link_Categories" to={"/Stationery"}>
                                        <p className="text-dark">لوازم تحریر</p>
                                    </Link>

                                    <Link className="footer_link_Categories" to={"/MobileAccessories"}>
                                        <p className="text-dark">لوازم جانبی موبایل</p>
                                    </Link>

                                    <Link className="footer_link_Categories" to={"/Cosmetics"}>
                                        <p className="text-dark">لوازم آرایشی و بهداشتی</p>
                                    </Link>
                                </div>

                                <hr className="mt-3" />

                                <div className="col-md-6">2025 © تمامی حقوق محفوظ است. آداک لند </div>
                                <div className="col-md-6">شرایط استفاده | سیاست حفظ حریم خصوصی</div>
                            </div>
                        </div>
                    </footer>

                </div>
            </div>
        </section>
    )
}











export default QuestionPage;
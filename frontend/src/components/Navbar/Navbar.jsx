import Logo_Navbar from "../../assets/image/OriginLogo/Logo_Navbar.png"
import "../Navbar/Navbar.css";
import { Link } from "react-router";
import { useEffect } from "react";
// import useCheckAuth from "../../hooks/useCheckAuth";
import useProfileData from "../../hooks/useProfileData";
import { checkAuth, logout } from "../../../utils/auth/auth";
import authStore, { useBearStore } from "../../../stores/authStore";
import { userProfileDetail } from "../../../utils/auth/auth";
import { CgProfile } from "react-icons/cg";


function Navber() {
    const userData = useBearStore.getState().userData
    const isLoggedIn = useBearStore.getState().isLoggedIn

    useEffect(() => {
        if (checkAuth() == true) {
            useBearStore.getState().setIsLoggedIn(false)
        }
    }, [])

    // TODO: مشکل غیب شدن محتوا زیر نوبار حل شود
    return (
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
                            <button className="btn btn-outline-primary mx-1" type="submit">
                                جستوجو
                            </button>
                        </form>
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle text-dark mt-2"
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
                            <Link className="nav-link text-dark" href="#">
                                <i className="bi bi-bell"></i>
                            </Link>
                        </li>
                        <li className="nav-item3 mt-1">
                            <Link to="/shoppingcart" className="nav-link text-dark">
                                <i className="bi bi-cart"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navber;

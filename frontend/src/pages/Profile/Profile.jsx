import "./Profile.css";
import { Link } from "react-router";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import authAxiosInstance from "../../../utils/auth/customAxios";
import authStore from "../../../stores/authStore";
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";



function Profile() {
    const [fullName, setFullName] = useState('ناشناخته')
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [avatarImg, setAvatarImg] = useState(null)
    // TODO: zustand need to save information but it dosn't
    // const userId = authStore((state)=>state.userId)
    const userId = authStore.getState().userId





    // TODO: profile should not take the user data this function should be handled sepratly
    useEffect(() => {
        // const access_token = Cookies.get('access_token')
        // const decoded = jwtDecode(access_token);
        const access_token = Cookies.get('access_token')
        const decoded = jwtDecode(access_token);
        

        authAxiosInstance.get(`account/detail/${decoded.user_id}/`, {
        })
            .then((res) => {
                console.log(res.data)
                setFullName(res.data.username)
                setPhoneNumber(res.data.phone_number)
                setAvatarImg(res.data.avatar)
            })
    }, [])


    return (
        <section id="Profile_page_id" className="py-5 mt-5">

            <div className="container py-5 mt-5">

                <div className="row">
                    <div className="profile-container">


                        <aside className="sidebar">

                            <div className="user-box">
                                {/* <div>
                                    {userId &&
                                        <div class="alert alert-danger" role="alert">
                                            {userId}
                                        </div>
                                    }
                                </div> */}
                                <img
                                    src={avatarImg}
                                    alt="Profile"
                                />

                                <h3>
                                    {/* <i className="bi bi-person-fill"></i> */}
                                    <FaRegUser />
                                    {fullName}
                                </h3>

                                <p>
                                    <i className="bi bi-telephone-fill"></i>
                                    {phoneNumber}
                                </p>

                                <Link id="btn_editprofile_link" className="" to="/Editprofile" href="#">
                                    <button>
                                        <i className="bi bi-pencil-square"></i>
                                        ویرایش پروفایل
                                    </button>
                                </Link>

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

                            <div className="card shadow-sm rounded-4 order-card-box">

                                <div className="card-body p-4">


                                    <div className="d-flex justify-content-between align-items-center mb-4">

                                        <h5 className="orders-title fw-bold mb-0">
                                            سفارش‌های من
                                        </h5>

                                        <a href="#" className="text-decoration-none text-secondary">
                                            مشاهده همه
                                        </a>

                                    </div>


                                    <div className="row text-center">

                                        <div className="col-md-4 border-start">
                                            <div className="order-box">
                                                <div className="order-icon blue">
                                                    <i className="bi bi-cloud"></i>
                                                </div>
                                                <h4 className="mt-3 fw-bold">0</h4>
                                                <span className="text-muted">سفارش جاری</span>
                                            </div>
                                        </div>

                                        <div className="col-md-4 border-start">
                                            <div className="order-box">
                                                <div className="order-icon green">
                                                    <i className="bi bi-bag-check-fill"></i>
                                                </div>
                                                <h4 className="mt-3 fw-bold">8</h4>
                                                <span className="text-muted">تحویل شده</span>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="order-box">
                                                <div className="order-icon yellow">
                                                    <i className="bi bi-arrow-counterclockwise"></i>
                                                </div>
                                                <h4 className="mt-3 fw-bold">0</h4>
                                                <span className="text-muted">مرجوع شده</span>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
}

export default Profile;
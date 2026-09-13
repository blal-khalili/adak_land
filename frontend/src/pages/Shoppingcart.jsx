import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

import CardShoppingCart from "../components/CardShoppingCart/CardShoppingCart";
import authAxiosInstance from "../../utils/auth/customAxios";

import "./Shoppingcart.css";


function Cart() {

    const navigate = useNavigate();


    // تشخیص اندازه صفحه
    const isBigScreen = useMediaQuery({
        query: "(min-width: 771px)"
    });

    const isSamllScreen = useMediaQuery({
        query: "(max-width: 770px)"
    });


    // اطلاعات سبد خرید
    const [total_price, SetTotalPrice] = useState(0);
    const [data, setData] = useState(null);


    // گرفتن اطلاعات سبد خرید
    useEffect(() => {

        authAxiosInstance
            .get("http://127.0.0.1:8000/cart/detail/cart/")

            .then(res => {

                console.log("CART DATA:", res.data);

                setData(res.data);

                SetTotalPrice(res.data.total_price);

            })

            .catch(err => {

                console.log("CART ERROR:", err);

            });

    }, []);



    // تابع تایید و تکمیل سفارش

    const handleCheckout = () => {

        console.log("Total Price:", total_price);
        console.log("Cart Data:", data);


        // اگر اطلاعات سبد هنوز دریافت نشده
        if (!data) {

            Swal.fire({
                title: "سبد خرید شما خالی هست یا احراز هویت نکردید 🥴",
                icon: "warning",
                draggable: true,
                customClass: {
                    icon: "shopping_cart_rotate-y",
                    popup: "shopping_cart_colored-toast",
                },
                iconColor: "white",
                showConfirmButton: false,
                timer: 4500,
                timerProgressBar: true,
            });

            return;
        }




        // بررسی خالی بودن سبد خرید

        if (!total_price || Number(total_price) <= 0) {

            Swal.fire({

                title: "سبد خرید شما خالی است 🛒",

                text: "لطفاً ابتدا یک محصول به سبد خرید اضافه کنید.",

                icon: "warning",

                confirmButtonText: "متوجه شدم",

                confirmButtonColor: "#ff7300",

                customClass: {
                    popup: "cart-empty-alert",
                    title: "cart-empty-title",
                    confirmButton: "cart-empty-button",
                },

            });


            // جلوگیری از رفتن به صفحه بعد
            return;
        }


        // اگر سبد خرید خالی نبود

        navigate("/AddressLocation");

    };


    return (

        <section className="cart-page">

            <div className="container py-5 mt-5">

                <div className="row py-5 mt-5">



                    {/* TITLE */}

                    <div className="cart-title">

                        <h3>

                            سبد خرید

                            <span className="cart-count">
                                <FaShoppingCart />
                            </span>

                        </h3>

                        <div className="title-line"></div>

                    </div>




                    {/* MOBILE SUMMARY */}

                    {isSamllScreen && (

                        <div className="col-12 cart-summary">


                            {/* قیمت کالاها */}

                            <div className="price-row">

                                <p>
                                    قیمت کالاها
                                </p>

                                <p className="price">

                                    {total_price}

                                    {" "}تومان

                                </p>

                            </div>


                            {/* جمع سبد خرید */}

                            <div className="price-row">

                                <p>
                                    جمع سبد خرید
                                </p>

                                <p className="price">

                                    {total_price}

                                    {" "}تومان

                                </p>

                            </div>


                            {/* سود */}

                            <div className="price-row profit">

                                <p>
                                    سود شما از خرید
                                </p>

                                <p className="price">
                                    26,700,000 تومان
                                </p>

                            </div>



                            {/* دکمه تایید و تکمیل سفارش */}

                            <button
                                id="buttoncart"
                                type="button"
                                className="btn"
                                onClick={handleCheckout}
                            >

                                <span className="button-inner">

                                    <span className="button-icon">
                                        ✦
                                    </span>

                                    <span className="button-text">
                                        تایید و تکمیل سفارش
                                    </span>

                                    <span className="button-icon">
                                        ✦
                                    </span>

                                </span>

                            </button>


                        </div>

                    )}



                    {/* PRODUCTS */}

                    <div className="col-12 col-md-9 mt-5">

                        <CardShoppingCart c={data} />

                    </div>


                    {/* DESKTOP SUMMARY */}

                    {isBigScreen && (

                        <div className="col-md-3 cart-summary">


                            {/* قیمت کالاها */}

                            <div className="price-row">

                                <p>
                                    قیمت کالاها
                                </p>

                                <p className="price">

                                    {total_price}

                                    {" "}تومان

                                </p>

                            </div>


                            {/* جمع سبد خرید */}

                            <div className="price-row">

                                <p>
                                    جمع سبد خرید
                                </p>

                                <p className="price">

                                    {total_price}

                                    {" "}تومان

                                </p>

                            </div>


                            {/* سود */}

                            <div className="price-row profit">

                                <p>
                                    سود شما از خرید
                                </p>

                                <p className="price">
                                    26,700,000 تومان
                                </p>

                            </div>



                            {/* دکمه تایید و تکمیل سفارش */}

                            <button
                                id="buttoncart"
                                type="button"
                                className="btn"
                                onClick={handleCheckout}
                            >

                                <span className="button-inner">

                                    <span className="button-icon">
                                        ✦
                                    </span>

                                    <span className="button-text">
                                        تایید و تکمیل سفارش
                                    </span>

                                    <span className="button-icon">
                                        ✦
                                    </span>

                                </span>

                            </button>


                        </div>

                    )}

                </div>

            </div>

        </section>

    );
}


export default Cart;


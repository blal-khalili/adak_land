import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FaShoppingCart } from "react-icons/fa";
import CardShoppingCart from "../components/CardShoppingCart/CardShoppingCart";
import { Link } from "react-router";

import "./Shoppingcart.css";

import CardItemsShopCart from "../components/CardItemsShopCart/CardItemsShopCart";
import authAxiosInstance from "../../utils/auth/customAxios";


function Cart() {

    const isBigScreen = useMediaQuery({
        query: "(min-width: 771px)"
    });

    const isSamllScreen = useMediaQuery({
        query: "(max-width: 770px)"
    });


    const [total_price, SetTotalPrice] = useState(0);
    const [data, setData] = useState(null);


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

                            <div className="price-row">

                                <p>
                                    قیمت کالاها
                                </p>

                                <p className="price">
                                    {total_price} تومان
                                </p>

                            </div>


                            <div className="price-row">

                                <p>
                                    جمع سبد خرید
                                </p>

                                <p className="price">
                                    848,950,000 تومان
                                </p>

                            </div>


                            <div className="price-row profit">

                                <p>
                                    سود شما از خرید
                                </p>

                                <p className="price">
                                    26,700,000 تومان
                                </p>

                            </div>


                            <Link to={"/AddressLocation"}>
                                <button
                                    id="buttoncart"
                                    type="button"
                                    className="btn"
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
                            </Link>

                        </div>

                    )}


                    {/* PRODUCTS */}

                    <div className="col-12 col-md-9 mt-5">

                        <CardShoppingCart c={data} />
                        {/* <CardShoppingCart /> */}

                    </div>



                    {/* DESKTOP SUMMARY */}

                    {isBigScreen && (

                        <div className="col-md-3 cart-summary">

                            <div className="price-row">

                                <p>
                                    قیمت کالاها
                                </p>

                                <p className="price">
                                    {total_price} تومان
                                </p>

                            </div>


                            <div className="price-row">

                                <p>
                                    جمع سبد خرید
                                </p>

                                <p className="price">
                                    {total_price} تومان
                                </p>

                            </div>


                            <div className="price-row profit">

                                <p>
                                    سود شما از خرید
                                </p>

                                <p className="price">
                                    26,700,000 تومان
                                </p>

                            </div>


                            <Link to={"/AddressLocation"}>
                                <button
                                    id="buttoncart"
                                    type="button"
                                    className="btn"
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
                            </Link>

                        </div>

                    )}

                </div>

            </div>

        </section>

    );
}


export default Cart;

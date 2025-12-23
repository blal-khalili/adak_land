import { Link } from "react-router";
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import "./Shoppingcart.css/"
import carticon from "../assets/image/ShoppingCart/Cart.png/"
import Card from "../components/Card/Card.jsx/"



function Cart() {
    
    const isBigScreen = useMediaQuery({ query: '(min-width: 770px)' })
    const isSamllScreen = useMediaQuery({ query: "(max-width: 770px)" })



    return (
        <section>
            <div className="container mt-5">
                <h3>سبد خرید <span className="bg-danger p-1 px-3 text-white fw-bold">3</span></h3>
                <hr />
                <div className="row">
                    {isSamllScreen && <div className="col-md-3 border rounded border-danger pt-4 mt-5">
                        <div className="d-flex justify-content-between">
                            <p>قیمت کالا ها</p>
                            <p>875,650,000 تومان</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>جمع سبد خرید</p>
                            <p>848,950,000 تومان</p>
                        </div>
                        <div className="d-flex justify-content-between text-success">
                            <p>سود شما از خرید</p>
                            <p>26,700,000 تومان</p>
                        </div>

                        <button id="buttoncart" type="button" className="btn btn-danger text-white d-grid col-md-9 mx-auto">تایید و تکمیل سفارش</button>
                    </div>}

                    <div className="col-md-9 mt-5">
                        <Card />
                    </div>


                    {isBigScreen && <div className="col-md-3 border rounded border-danger pt-4 mt-5">
                        <div className="d-flex justify-content-between">
                            <p>قیمت کالا ها</p>
                            <p>875,650,000 تومان</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>جمع سبد خرید</p>
                            <p>848,950,000 تومان</p>
                        </div>
                        <div className="d-flex justify-content-between text-success">
                            <p>سود شما از خرید</p>
                            <p>26,700,000 تومان</p>
                        </div>

                        <button id="buttoncart" type="button" className="btn btn-danger text-white d-grid col-md-9 mx-auto">تایید و تکمیل سفارش</button>
                    </div>}
                </div>
            </div>
        </section>
    )
}



export default Cart
import { Link } from "react-router";
import { useState } from 'react'
import "./Shoppingcart.css/"
import carticon from "./assets/image/ShoppingCart/Cart.png/"
import Navber from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"



function Cart() {

    const [Cart, setCart] = useState(true)

    function Changes() {
        setCart(!Cart)
    }

    return (
        <section>
            <Navber />

            <div className="container mt-5">
                <div className="row gap-3">
                    <div className="col-md-2">
                        <Link className="h2link" onClick={Cart}><h2 className="fw-bold border rounded border-primary px-4 text-dark">سبد خرید</h2></Link>
                    </div>

                    <div className="col-md-3">
                        <Link className="h2link" onClick={Changes}><h2 className="fw-bold border rounded border-primary px-4 text-dark">خرید های لغو شده</h2></Link>
                    </div>

                    <hr />
                </div>

                <div className="d-flex justify-content-center">
                    <div className="">
                        <img className="cartimg img-fluid" src={carticon} alt="Adack Land" />
                    </div>
                </div>

                <div className="row">
                    <hr />
                </div>
            </div>

            <Footer />
        </section>
    )
}



export default Cart
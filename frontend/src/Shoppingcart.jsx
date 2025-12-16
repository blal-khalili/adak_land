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
            <div className="container mt-5">
                <div className="row gap-3">
                    <hr />
                </div>

                <div className="d-flex justify-content-center">
                    <div className="">
                        <img className="cartimg img-fluid" src={carticon} alt="Adack Land" />
                    </div>
                </div>

            </div>


        </section>
    )
}



export default Cart
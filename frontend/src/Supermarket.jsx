import { useState, useEffect } from 'react';
import Navber from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function Supermarket() {

    const [getProducts, setProducts] = useState(null)

    function Products() {
        fetch("http://127.0.0.1:8000/adack/list/")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setProducts(data);
            })
    }

    useEffect(Products, []);

    return (
        <section>
            <Navber />

            <div className='container mt-5'>
                <h1 className='text-center'>سوپرمارکت</h1>
                <div className='row mt-5'>
                    {getProducts && getProducts.map((list) => (
                        <div className='col-md-3 g-5'>
                            <div class="card border-0 rounded-0 shadow">
                                <img src={list.image} class="card-img-top rounded-0" alt="..." />
                                <div className="card-body mt-3 mb-3">
                                    <div class="row">
                                        <div class="col-10">
                                            <h4 class="card-title">{list.title}</h4>
                                            <p class="card-text">
                                                <i class="bi bi-star-fill text-warning"></i>
                                                <i class="bi bi-star-fill text-warning"></i>
                                                <i class="bi bi-star-fill text-warning"></i>
                                                <i class="bi bi-star-fill text-warning"></i>
                                                (123)
                                            </p>
                                        </div>
                                        <div class="col-2">
                                            <i class="bi bi-bookmark-plus fs-2"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center text-center g-0">
                                    <div class="col-4">
                                        <h5>{list.price}</h5>
                                    </div>
                                    <div class="col-8">
                                        <a href="#" class="btn btn-dark w-100 p-3 rounded-0 text-warning">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <hr />
            <Footer />
        </section>
    )
}



export default Supermarket
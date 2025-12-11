import { useState, useEffect } from 'react';
import Navber from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProductStore from '../stores/ProductStore';
import { Link } from 'react-router';


function Supermarket() {

    const { products, getProducts } = ProductStore()
    useEffect(getProducts, []);

    return (
        <section>
            <Navber />
            <div className='container mt-5'>
                <h1 className='text-center'>سوپرمارکت</h1>
                <div className='row mt-5'>
                    {products && products.map((list) => (
                        <div key={list.id} className='col-md-3 g-5'>
                            <div className="card border-0 rounded-0 shadow">
                                <img src={list.image} className="card-img-top rounded-0" alt="..." />
                                <div className="card-body mt-3 mb-3">
                                    <div className="row">
                                        <div className="col-10">
                                            <h4 className="card-title">{list.title}</h4>
                                            <p className="card-text">
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                (123)
                                            </p>
                                        </div>
                                        <div className="col-2">
                                            <i className="bi bi-bookmark-plus fs-2"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center text-center g-0">
                                    <div className="col-4">
                                        <h5>{list.price}</h5>
                                    </div>
                                    <div className="col-8">
                                        <Link href="#" className="btn btn-dark w-100 p-3 rounded-0 text-warning">ADD TO CART</Link>
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
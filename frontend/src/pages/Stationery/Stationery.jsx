import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { useMediaQuery } from 'react-responsive'
import "./Stationery.css/"
import CheckBox from '../../components/CheckBox/Checkbox';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from "axios"
import useProducts from '../../hooks/useProducts';
import Pagination from '../../components/Pagination/Pagination';


function Stationery() {
    const products = useProducts();
    // const queryClient = useQueryClient()
    // const fetchProducts = async () => {
    //     const res = await axios.get('http://127.0.0.1:8000/adack/list/');
    //     return res.data;
    // };
    // const query = useQuery({
    //     queryKey: ['products'], queryFn: fetchProducts
    // })


    const isBigScreen = useMediaQuery({ query: '(min-width: 992px)' })
    const isMediumScreen = useMediaQuery({ query: "(max-width: 992px)" })
    const isSamllScreen = useMediaQuery({ query: "(max-width: 768px)" })


    const [price, setPrice] = useState(2000000);
    const [available, setAvailable] = useState(false);
    const [popular, setPopular] = useState(false);


    return (
        <section id="Stationery_section">
            <div className='container mt-5'>

                <div className='row py-5 mt-5'>
                    <div className="col-12 text-center py-5 mt-5">
                        <h1 id="h1_title">
                            لوازم تحریر
                        </h1>

                        <hr id="Stationery_hr" />
                    </div>
                    {isBigScreen && <div className='col-md-2 border h-50 d-inline-block rounded mt-5 border-danger border-3  sticky-top'>
                        <h3 className='mt-4'>فیلترها</h3>

                        <ul className='mt-5'>
                            <li>
                                <h4>خودکار</h4>
                                <input type='checkbox' onChange={(e) => { e.target.checked ? setAvailable(true) : setAvailable(null); }}></input>
                            </li>

                            <hr />

                            <li>
                                <h4>کوله پشتی</h4>
                                <input type='checkbox' onChange={(e) => { e.target.checked ? setpopular(true) : setpopular(null); }}></input>
                            </li>

                            <hr />

                            <li>
                                <h4>جامدادی</h4>
                                <input type='checkbox' onChange={(e) => { e.target.checked ? setpopular(true) : setpopular(null); }}></input>
                            </li>

                            <hr />

                            <li>
                                <h4>مداد</h4>
                                <input type='checkbox' onChange={(e) => { e.target.checked ? setpopular(true) : setpopular(null); }}></input>
                            </li>

                            <hr />

                            <li>
                                <h4>دفتر</h4>
                                <input type='checkbox' onChange={(e) => { e.target.checked ? setpopular(true) : setpopular(null); }}></input>
                            </li>

                            <hr />

                            <li className="price-filter">

                                <h4 className="Price_limit_h4">محدودیت قیمت</h4>

                                <div className="luxury-price-card">

                                    <div className="price-circle">

                                        <strong>
                                            {price.toLocaleString()}
                                        </strong>

                                        <span className="currency">
                                            تومان
                                        </span>

                                    </div>


                                    <div className="price-options">

                                        <button
                                            className={price === 1000000 ? "active" : ""}
                                            onClick={() => setPrice(1000000)}
                                        >
                                            1M
                                        </button>


                                        <button
                                            className={price === 2000000 ? "active" : ""}
                                            onClick={() => setPrice(2000000)}
                                        >
                                            2M
                                        </button>


                                        <button
                                            className={price === 5000000 ? "active" : ""}
                                            onClick={() => setPrice(5000000)}
                                        >
                                            5M
                                        </button>

                                    </div>

                                </div>

                            </li>
                        </ul>
                    </div>}

                    {isMediumScreen && <Link to="/productsfilter"><button type="button" class="btn btn-danger text-white px-5">فیلترینگ</button></Link>}

                    {isBigScreen && <div className="row col-md-9">
                        {/* <h1>{query.isFetching?'loading':'data'}</h1> */}
                        {products.data && products.data.map((list) => (
                            <div key={list.id} className='col-md-4 g-5'>
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

                        <div className='mt-5'>
                            <Pagination />
                        </div>
                    </div>}

                    {isMediumScreen && <div className="row">
                        {/* <h1>{query.isFetching?'loading':'data'}</h1> */}
                        {/* {query.isStale} */}
                        {products.data && products.data.map((list) => (
                            <div key={list.id} className='col-md-4 g-5'>
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
                        <div className='mt-5'>
                            <Pagination />
                        </div>
                    </div>}

                    {isSamllScreen && <div className="row">
                        {/* <h1>{query.isFetching?'loading':'data'}</h1> */}
                        {/* {query.isStale} */}
                        {products.data && products.data.map((list) => (
                            <div key={list.id} className='col-md-6 g-5'>
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
                        <div className='mt-5'>
                            <Pagination />
                        </div>
                    </div>}
                </div>
            </div>

        </section>
    )
}



export default Stationery;
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { useMediaQuery } from 'react-responsive'
import "./Supermarket.css/"
import CheckBox from '../components/CheckBox/Checkbox';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from "axios"
import useProducts from '../hooks/useProducts';
import Pagination from '../components/Pagination/Pagination';


function Supermarket() {
    // TODO: make sidebar postions sticky with bootstrap scrollspy

    // TODO: separate filter to its own component and save this state in that component
    const [available,setAvailable] = useState(null);

    const products = useProducts(available);
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


    return (
        <section>
            <div className='container mt-5'>

                <h1 className='text-center'>سوپرمارکت</h1>
                <div className='row mt-5'>
                    {isBigScreen && <div className='col-md-3 border h-50 d-inline-block rounded mt-5'>
                        <h3 className='mt-4'>فیلترها</h3>

                        <ul className='mt-5'>
                            {/* TODO: make an available filter */}
                            <li>
                                <h4>موجود</h4>
                                <input type='checkbox' onChange={(e)=>{setAvailable(e.target.checked)}}></input>
                            </li>
                            <li className='d-flex mt-5 justify-content-between'>
                                <h4>تنفلات</h4>
                            </li>

                            <hr />

                            <li className='d-flex mt-5 justify-content-between'>
                                <h4>لبنیات</h4>
                                <CheckBox />
                            </li>

                            <hr />

                            <li className='d-flex mt-5 justify-content-between'>
                                <h4>نوشیدنی</h4>
                                <CheckBox />
                            </li>

                            <hr />

                            <li className='d-flex mt-5 justify-content-between'>
                                <h4>صبحانه</h4>
                                <CheckBox />
                            </li>

                            <hr />

                            <li className='d-flex mt-5 justify-content-between'>
                                <h4>افزودنی ها</h4>
                                <CheckBox />
                            </li>

                            <hr />

                            <li class="dropdown">
                                <a class="filter-dropdown dropdown-toggle text-dark d-flex gap-3 pt-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <h3>
                                        محدودیت قیمت
                                    </h3>
                                </a>
                                <ul class="dropdown-menu p-2 pt-4">
                                    <p>از 1000000 تا 2000000 تومان</p>
                                </ul>
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

        </section >
    )
}



export default Supermarket
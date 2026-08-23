import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import useProduct from "../../hooks/useProduct";
import axios from "axios"
import "./ProductDetail.css"
import authAxiosInstance from "../../../utils/auth/customAxios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function ProductDetail() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    // const product = useProduct();
    const getProduct = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/products/detail/${params.slug}`)
        setProduct(res.data)
    }

    useEffect(() => {
        getProduct();
    }, [])


    const doubleCheckIcon =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32"><path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" fill="currentColor" /></svg>'

    const showSwal = () => {
        withReactContent(Swal).fire({
            title: "با موفقیت به سبد خرید اضافه شد 🙂",
            icon: "success",
            draggable: true,
            iconHtml: doubleCheckIcon,
            customClass: {
                icon: 'rotate-y',
                popup: 'colored-toast',
            },
            iconColor: 'white',
            showConfirmButton: false,
            timer: 4500,
            timerProgressBar: true,
        });
    }


    const errorIcon =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="32"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.4-105.4z" fill="currentColor"/></svg>';

    const showSwalerror = () => {
        withReactContent(Swal).fire({
            title: "خطایی رخ داد لطفا دوباره امتحان کنید ☹️",
            icon: "error",
            draggable: true,
            iconHtml: errorIcon,
            customClass: {
                icon: 'rotate-y-error',
                popup: 'colored-toast-error',
            },
            iconColor: 'white',
            showConfirmButton: false,
            timer: 4500,
            timerProgressBar: true,
        });
    }



    return (
        <>
            {product && <div className="container py-5 mt-5">
                <div className="row py-5 mt-5">
                    <div className="col-md-4">
                        <img className="img-fluid rounded border border-5 border-dark p-3" src={product.image} alt="" />
                    </div>

                    <div className="col-md-5 mt-4">
                        <h2>{product.title}</h2>

                        <p className="mt-4">{product.description}</p>

                        <h4>رنگ:</h4>

                        <ul className="d-flex gap-5">
                            {product.colors && product.colors.map((color) => (
                                <li className="">
                                    <Link to="#">
                                        <div style={{ height: "20px", width: "20px", backgroundColor: `${color.color_code}`, borderRadius: '50px', border: "2px solid black", display: 'inline-block' }}></div>
                                    </Link>
                                    {color.title}
                                </li>
                            ))}
                        </ul>

                        <hr />

                        <h4>ویژگی ها:</h4>

                        <ul>
                            {product.specification && product.specification.map((Specifications) => (
                                <li>
                                    {Specifications.title} = {Specifications.value}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* <div id="buyB" className="col-md-3 d-flex align-items-center justify-content-end">
                        <div className="notification bg-dark">
                            <li className="mt-1 text-white px-2"><p>{product.create}</p></li>
                            <div className="notibody mt-2 d-flex text-white justify-content-center">
                                {product.price}
                                <p>Price :</p>
                                </div>
                            <hr className="text-white" />
                            <button className="btn btn-danger text-white mx-4" onClick={()=>{
                                authAxiosInstance.post('cart/create/cartitem/',{
                                    product:1
                                }).then()
                            }}>افزودن به سبد خرید</button>
                        </div>
                    </div> */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="luxury-product-card">

                            <div className="product-create">
                                {product.create}
                            </div>

                            <div className="product-price-box">
                                <span className="price-label">Price</span>

                                <div className="price">
                                    <span className="price-number">
                                        {product.price}
                                    </span>
                                    <span className="currency"> تومان</span>
                                </div>
                            </div>

                            <div className="divider"></div>

                            <button
                                className="add-cart-btn"
                                onClick={() => {
                                    authAxiosInstance
                                        .post("cart/create/cartitem/", {
                                            product: product.id
                                        })
                                        .then((data) => {
                                            showSwal()
                                            console.log(data)
                                        })
                                        .catch((error) => {
                                            showSwalerror()
                                            console.error(error);
                                        });
                                }}
                            >
                                <span>افزودن به سبد خرید</span>
                                <span className="cart-icon">🛒</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div >}
        </>
    )
}

export default ProductDetail;

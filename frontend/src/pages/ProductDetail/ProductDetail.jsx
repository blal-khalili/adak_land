import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useProduct from "../../hooks/useProduct";
import axios from "axios"
import "./ProductDetail.css"


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

    return (
        <>
            {product && <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid rounded border border-5 border-dark p-3" src={product.image} alt="" />
                    </div>

                    <div className="col-md-4 mt-4">
                        <h2>{product.title}</h2>
                        <ul className="mt-5">
                            {/* <li>{product.available}</li> */}
                        </ul>
                        <p className="mt-4">{product.description}</p>
                    </div>

                    <div id="buyB" className="col-md-4 d-flex align-items-center justify-content-end">
                        <div className="notification bg-dark">
                            <li className="mt-1 text-white px-2"><p>{product.create}</p></li>
                            <div className="notibody mt-2 d-flex text-white justify-content-center">{product.price}</div>
                            <button className="btn btn-danger text-white mt-3 m-4">افزودن به سبد خرید</button>
                        </div>
                    </div>
                </div>
            </div >}
        </>
    )
}

export default ProductDetail;

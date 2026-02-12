import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useProduct from "../../hooks/useProduct";
import axios from "axios"


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

    // TODO: make a good looking product detail page
    return <>
        <hr />    <hr />
        <hr />

        {product && <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt="" />
        </div>}
    </>
}

export default ProductDetail;

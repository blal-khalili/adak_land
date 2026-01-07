import useProducts from "../../hooks/useProducts"
import "./Cardpage.css"
import { Link } from 'react-router';


function CardPage() {
    const products = useProducts();

    return (
        <div className="container mt-5">
            <div key={products.title} className="row">
                <div div className="col=md-6">
                    <img className="img-fluid" src={products.image} alt="" />
                </div>
                <div className="col-md-6">
                    <h3></h3>
                    <hr />
                    <h5>معرفی محصول</h5>
                    <p></p>
                    <h3>فیمت : </h3>
                    <Link id="cardbtn" className="d-flex justify-content-center">
                        <button className="btn btn-success p-3 px-5 mt-3">افزودن به سبد خرید</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}



export default CardPage
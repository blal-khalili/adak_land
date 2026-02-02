import { Link } from "react-router"
import "../Card/Card.css/"

function Card(prpos) {
    return (
        <div key={prpos.id} className="card border-0 rounded-0 shadow">
            <img src={prpos.image} className="card-img-top rounded-0" alt="..." />
                <div className="card-body mt-3 mb-3">
                    <div className="row">
                        <div className="col-10">
                            <h4 className="card-title">{prpos.title}</h4>
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
                        <h5>{prpos.price}</h5>
                    </div>
                    <div className="col-8">
                        <Link to="/cardpage" href="#" className="btn btn-dark w-100 p-3 rounded-0 text-warning">ADD TO CART</Link>
                    </div>
                </div>
        </div>
    )
}



export default Card
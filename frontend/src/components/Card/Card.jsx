import { Link } from "react-router"
import "../Card/Card.css/"

function Card(props) {
    return (
        <div
            id="productcard"
            key={props.id}
            className="g-4 mt-4"
        >
            <div className="product-card">

                <div className="bg">

                    <img
                        src={props.image}
                        className="card__image img-fluid"
                        alt={props.title}
                    />

                    <div className="card__content">

                        <p className="card__title">
                            {props.title}
                        </p>

                        <div className="card__price">
                            <p>Price : {props.price}</p>
                        </div>

                    </div>

                </div>

                <div className="blob"></div>

            </div>
        </div>
    )
}



export default Card;
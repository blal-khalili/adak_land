import { Link } from "react-router"
import "../Card/Card.css/"

function Card(props) {
    return (
        <div id="productcard" key={props.id} className="card">
            <div className="card__content">
                <img src={props.image} className="card__image"/>
                <div className="card__text">
                    <p className="card__title">{props.title}</p>
                </div>
                <div className="card__footer">
                    <div className="card__price">{props.price}</div>
                    {/* <div className="card__badge bg-success text-white rounded p-2">NEW</div> */}
                </div>
            </div>
        </div>
    )
}



export default Card
// import { Link } from "react-router"
// import "../Card/Card.css/"

// function Card(props) {
//     return (
//         <div
//             id="productcard"
//             key={props.id}
//             className="g-4 mt-4"
//         >
//             <div className="product-card">

//                 <div className="bg">

//                     <img
//                         src={props.image}
//                         className="card__image img-fluid"
//                         alt={props.title}
//                     />

//                     <div className="card__content">

//                         <p className="card__title">
//                             {props.title}
//                         </p>

//                         <div className="card__price">
//                             <p>Price : {props.price}</p>
//                         </div>

//                     </div>

//                 </div>

//                 <div className="blob"></div>

//             </div>
//         </div>
//     )
// }



// export default Card;








import { Link } from "react-router";
import "../Card/Card.css";

function Card(props) {
    return (
        <div
            id="productcard"
            key={props.id}
            className="g-4 mt-4"
        >
            <div className="original_card">

                <div className="original_card-image">

                    <img
                        src={props.image}
                        className="original_card-img"
                        alt={props.title}
                    />

                </div>

                <div className="original_card-info">

                    <p className="original_card-title">
                        {props.title}
                    </p>

                    <div className="original_card-bottom">

                        <div className="original_card-price">

                            <span>
                                {props.price}
                            </span>

                            <small>
                                تومان
                            </small>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Card;

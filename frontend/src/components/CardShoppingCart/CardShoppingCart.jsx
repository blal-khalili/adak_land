import "./CardShoppingCart.css";
import { FaTrash, FaPlus } from "react-icons/fa";
import { Link } from "react-router";

function CardShoppingCart(props) {
    return (
        <>
            {props.c?.cartitems?.map((item) => (

                <div className="product-card mt-5" key={item.id}>

                    {/* اطلاعات محصول */}
                    <div className="product-info">

                        <Link
                            className="productlink"
                            to={`/products/detail/${item.product.slug}`}
                        >
                            <h3>
                                {item.product.title}
                            </h3>

                        </Link>


                        <p className="variant">
                            رنگ : {item.color}
                        </p>

                        <div className="details">
                            <span>
                                ارسال اداک لند
                            </span>

                            <span>
                                موجود در انبار
                            </span>
                        </div>

                        <div className="price">
                            <strong>
                                {item.product.price.toLocaleString()}
                            </strong>

                            <span>
                                تومان
                            </span>
                        </div>

                        <div className="actions">

                            <div className="quantity">

                                <button
                                    className="plus-btn"
                                    type="button"
                                >
                                    <FaPlus />
                                </button>

                                <span className="count">
                                    {item.amount}
                                </span>

                                <button
                                    className="delete-btn"
                                    type="button"
                                >
                                    <FaTrash />
                                </button>

                            </div>

                        </div>

                    </div>



                    <div className="product-image">

                        <Link
                            className="productlink"
                            to={`/products/detail/${item.product.slug}`}
                        >
                            <img
                                src={item.product.image}
                                alt={item.product.title}
                            />
                        </Link>

                    </div>

                </div>

            ))}
        </>
    );
}

export default CardShoppingCart;

import './CardItemsShopCart.css';
import { Link } from 'react-router';
import Card from "../Card/Card";
import { useQuery, useQueryClient } from '@tanstack/react-query';



function CardItemsShopCart(props) {
    return (
        <section>
            <div className="container">
                <div className="row">
                    {props.c?.cartitems?.map((item) => (
                        <div className="col-md-4" key={item.id}>
                            <Link className="productlink"  to={`/products/detail/${item.product.slug}`}>
                                <Card
                                    id={item.product.id}
                                    title={item.product.title}
                                    type={item.product.type}
                                    price={item.product.price}
                                    image={item.product.image}
                                    description={item.product.description}
                                    amount={item.amount}
                                    finalPrice={item.final_price}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CardItemsShopCart;
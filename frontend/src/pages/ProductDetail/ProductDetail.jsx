import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./ProductDetail.css";
import authAxiosInstance from "../../../utils/auth/customAxios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function ProductDetail() {
    const params = useParams();

    const [product, setProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    // گرفتن اطلاعات محصول
    const getProduct = async () => {
        try {
            const res = await axios.get(
                `http://127.0.0.1:8000/products/detail/${params.slug}`
            );

            setProduct(res.data);
        } catch (error) {
            console.error("Error getting product:", error);
        }
    };

    useEffect(() => {
        getProduct();
    }, [params.slug]);


    // آیکون موفقیت
    const doubleCheckIcon =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32"><path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" fill="currentColor" /></svg>'


    // پیام موفقیت
    const showSwal = () => {
        withReactContent(Swal).fire({
            title: "با موفقیت به سبد خرید اضافه شد 🙂",
            icon: "success",
            draggable: true,
            iconHtml: doubleCheckIcon,
            customClass: {
                icon: "rotate-y",
                popup: "colored-toast",
            },
            iconColor: "white",
            showConfirmButton: false,
            timer: 4500,
            timerProgressBar: true,
        });
    };


    // آیکون خطا
    const errorIcon =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="32"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.4c12.5 12.5 32.8 0 45.3 0s12.5-32.8 0-45.3L237.3 256l105.4-105.4z" fill="currentColor"/></svg>';


    // پیام خطا
    const showSwalerror = () => {
        withReactContent(Swal).fire({
            title: "خطایی رخ داد لطفا دوباره امتحان کنید ☹️",
            icon: "error",
            draggable: true,
            iconHtml: errorIcon,
            customClass: {
                icon: "rotate-y-error",
                popup: "colored-toast-error",
            },
            iconColor: "white",
            showConfirmButton: false,
            timer: 4500,
            timerProgressBar: true,
        });
    };


    // انتخاب رنگ
    const handleColorSelect = (color) => {
        setSelectedColor(color);

        console.log("Selected color:", color);
    };


    // اضافه کردن به سبد خرید
    const handleAddToCart = async () => {

        // اگر رنگ انتخاب نشده باشد
        if (!selectedColor) {
            Swal.fire({
                title: "لطفاً یک رنگ انتخاب کنید 🙄",
                icon: "warning",
                draggable: true,
                customClass: {
                    icon: "rotate-y-warning",
                    popup: "colored-toast-warning",
                },
                iconColor: "white",
                showConfirmButton: false,
                timer: 4500,
                timerProgressBar: true,
            });

            return;
        }

        try {
            const data = await authAxiosInstance.post(
                "cart/create/cartitem/",
                {
                    product: product.id,
                    color: selectedColor.id,
                }
            );

            console.log("Cart response:", data);
            console.log(selectedColor.id)
            showSwal();

        } catch (error) {
            console.error("Add to cart error:", error);

            showSwalerror();
        }
    };


    return (
        <>
            {product && (
                <div className="container py-5 mt-5">

                    <div className="row py-5 mt-5">

                        {/* تصویر محصول */}
                        <div className="col-md-4">

                            <img
                                className="img-fluid rounded border border-5 border-dark p-3"
                                src={product.image}
                                alt={product.title}
                            />

                        </div>


                        {/* اطلاعات محصول */}
                        <div className="col-md-5 mt-4">

                            <h2>
                                {product.title}
                            </h2>


                            <p className="mt-4">
                                {product.description}
                            </p>


                            {/* رنگ */}
                            <h4 className="color-title">
                                رنگ :

                                {selectedColor && (
                                    <span className="selected-color-name">
                                        {selectedColor.title}
                                    </span>
                                )}
                            </h4>


                            {/* دایره‌های رنگ */}
                            <ul className="product-colors">

                                {product.colors?.map((color) => (

                                    <li key={color.id}>

                                        <button
                                            type="button"
                                            className={`color-circle ${selectedColor?.id === color.id ? "selected" : ""
                                                }`}
                                            onClick={() => handleColorSelect(color)}
                                            title={color.title}
                                            style={{
                                                "--color-code": color.color_code,
                                            }}
                                        >
                                            {selectedColor?.id === color.id && (
                                                <span className="color-check">✓</span>
                                            )}
                                        </button>


                                    </li>

                                ))}

                            </ul>


                            <hr />


                            {/* ویژگی‌ها */}
                            <h4>
                                ویژگی ها:
                            </h4>

                            <ul>
                                {product.specification?.map(
                                    (specification) => (
                                        <li key={specification.id}>
                                            {specification.title} ={" "}
                                            {specification.value}
                                        </li>
                                    )
                                )}
                            </ul>

                        </div>


                        {/* بخش قیمت و سبد خرید */}
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">

                            <div className="luxury-product-card">

                                {/* تاریخ ایجاد */}
                                <div className="product-create">
                                    {product.create}
                                </div>


                                {/* قیمت */}
                                <div className="product-price-box">

                                    <span className="price-label">
                                        Price
                                    </span>

                                    <div className="price">

                                        <span className="price-number">
                                            {product.price}
                                        </span>

                                        <span className="currency text-white">
                                            تومان
                                        </span>

                                    </div>

                                </div>


                                <div className="divider"></div>


                                {/* نمایش رنگ انتخاب شده */}
                                {selectedColor && (
                                    <div className="selected-color-box">

                                        <span id="selected_color">
                                            رنگ انتخاب شده :
                                        </span>

                                        <strong className="text-white">
                                            {selectedColor.title}
                                        </strong>

                                    </div>
                                )}


                                {/* دکمه سبد خرید */}
                                <button
                                    className="add-cart-btn"
                                    onClick={handleAddToCart}
                                >

                                    <span>
                                        افزودن به سبد خرید
                                    </span>

                                    <span className="cart-icon">
                                        🛒
                                    </span>

                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            )}
        </>
    );
}

export default ProductDetail;

import { useEffect } from "react";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import carousel_img_1 from "../../assets/image/Carousel/carousel_img_1.webp";
import carousel_img_2 from "../../assets/image/Carousel/carousel_img_2.webp";
import carousel_img_3 from "../../assets/image/Carousel/carousel_img_3.webp";
import carousel_img_4 from "../../assets/image/Carousel/carousel_img_4.webp";
import carousel_img_5 from "../../assets/image/Carousel/carousel_img_5.webp";
import "../Carousel/Carousel.css"

function Carousel() {

    useEffect(() => {
        const carouselEl = document.getElementById("carouselExampleAutoplaying");
        if (carouselEl) {
            new bootstrap.Carousel(carouselEl, {
                interval: 5000,
                ride: "carousel",
                pause: false    
            });
        }
    }, []);

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <a href=""><img src={carousel_img_1} className="d-block w-100" alt="..." /></a>
                </div>
                <div className="carousel-item">
                    <a href=""><img src={carousel_img_2} className="d-block w-100" alt="..." /></a>
                </div>
                <div className="carousel-item">
                    <a href=""><img src={carousel_img_3} className="d-block w-100" alt="..." /></a>
                </div>
                <div className="carousel-item">
                    <a href=""><img src={carousel_img_4} className="d-block w-100" alt="..." /></a>
                </div>
                <div className="carousel-item">
                    <a href=""><img src={carousel_img_5} className="d-block w-100" alt="..." /></a>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    );
}

export default Carousel;

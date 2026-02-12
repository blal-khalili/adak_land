import { useState } from 'react'
import Carousel from './components/Carousel/Carousel';
import supermarketlogo from "./assets/image/CategoryLogos/SuperMarketLogo/icons8-supermarket-96.png/"
import behdashtylogo from "./assets/image/CategoryLogos/BehdashtyLogo/cosmetics.png/"
import tahrirlogo from "./assets/image/CategoryLogos/TahrirLogo/writing.png/"
import janebilogo from "./assets/image/CategoryLogos/JanebiLogo/mobile.png/"
import poster1 from "./assets/image/Posters/poster1.webp/"
import CardSlider from "./components/CardSlider/CardSlider"
import { Link } from "react-router";
import useProducts from './hooks/useProducts';
import './App.css';


function App() {
  const products = useProducts();


  return (
    <section>
      <div className='mt-5'>
        <div className='mx-auto'>
          <Carousel />
        </div>
      </div>


      <div id='Category' className='container mt-5'>
        <h4 className='text-center fw-bold'>خرید براساس دسته بندی</h4>
        <hr className='col-md-2 mx-auto' />
        <div className='row text-center'>
          <div className='col-md-3 col-6'>
            <img className='img-fluid' src={supermarketlogo} alt="" />
            <Link className='text-dark' href="">
              <p>سوپرمارکت</p>
            </Link>
          </div>
          <div className='col-md-3 col-6'>
            <img className='img-fluid' src={behdashtylogo} alt="" />
            <Link className='text-dark' href="">
              <p>لوازم آرایشی و بهداشتی</p>
            </Link>
          </div>
          <div className='col-md-3 col-6'>
            <img className='img-fluid' src={tahrirlogo} alt="" />
            <Link className='text-dark' href="">
              <p>لوازم تحریر</p>
            </Link>
          </div>
          <div className='col-md-3 col-6'>
            <img className='img-fluid' src={janebilogo} alt="" />
            <Link className='text-dark' href="">
              <p>لوازم جانبی</p>
            </Link>
          </div>
        </div>
      </div>

      <div id='Offer' className="container mt-5 bg-primary rounded py-4">
        <h4 className='text-white'>محصولات جدید</h4>
        <div className='col-md-2 text-white'>
          <hr />
        </div>
        <CardSlider p={products.data} />
      </div>

      <div className='container mt-5'>
        <div className='row g-4'>
          <div className='col-md-6'>
            <img className='img-fluid rounded' src={poster1} alt="" />
          </div>
          <div className='col-md-6'>
            <img className='img-fluid rounded' src={poster1} alt="" />
          </div>
        </div>
      </div>

      <div id='Offer' className="container mt-5">
        <h4 className='text-center'>پرفروش ترین ها</h4>
        <div className='col-md-2 mx-auto'>
          <hr />
        </div>
        <CardSlider p={products.data} />
      </div>

      <div className='container mt-5'>
        <div className='row g-4'>
          <div className='col-md-6'>
            <img className='img-fluid rounded' src={poster1} alt="" />
          </div>
          <div className='col-md-6'>
            <img className='img-fluid rounded' src={poster1} alt="" />
          </div>
        </div>
      </div>

      <div id='Offer' className="container mt-5">
        <h4>کالا های پیشنهادی</h4>
        <div className='col-md-2'>
          <hr />
        </div>
        <CardSlider p={products.data} />
      </div>

    </section>
  )
}

export default App

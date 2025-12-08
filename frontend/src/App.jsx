import { useState } from 'react'
import Navber from './components/Navbar/Navbar';
import SearchBox from './components/Searchbox/Searchbox';
import Carousel from './components/Carousel/Carousel';
import supermarketlogo from "./assets/image/CategoryLogos/SuperMarketLogo/icons8-supermarket-96.png/"
import behdashtylogo from "./assets/image/CategoryLogos/BehdashtyLogo/cosmetics.png/"
import tahrirlogo from "./assets/image/CategoryLogos/TahrirLogo/writing.png/"
import janebilogo from "./assets/image/CategoryLogos/JanebiLogo/mobile.png/"
import poster1 from "./assets/image/Posters/poster1.webp/"
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import './App.css';


function App() {
  return (
    <section>
      <Navber />

      <div className='mt-5'>
        <div className='mx-auto'>
          <Carousel />
        </div>
      </div>

      <div id='Category' className='container mt-5'>
        <h2 className='text-center fw-bold'>خرید براساس دسته بندی</h2>
        <hr className='col-md-5 mx-auto' />
        <div className='row text-center'>
          <div className='col-md-3 col-6'>
            <img className='img-fluid' src={supermarketlogo} alt="" />
            <a className='text-dark' href="">
              <h5>سوپرمارکت</h5>
            </a>
          </div>
          <div className='col-md-3 col-6'>
            <img className='img-fluid' src={behdashtylogo} alt="" />
            <a className='text-dark' href="">
              <h5>لوازم آرایشی و بهداشتی</h5>
            </a>
          </div>
          <div className='col-md-3 col-6'>
            <img className='img-fluid' src={tahrirlogo} alt="" />
            <a className='text-dark' href="">
              <h5>لوازم تحریر</h5>
            </a>
          </div>
          <div className='col-md-3 col-6'>
            <img className='img-fluid' src={janebilogo} alt="" />
            <a className='text-dark' href="">
              <h5>لوازم جانبی</h5>
            </a>
          </div>
        </div>
      </div>

      <div id='Offer' className="container mt-5 bg-primary rounded py-4">
        <h2 className='text-white'>محصولات جدید</h2>
        <div className='col-md-3 text-white'>
          <hr />
        </div>
        <div className="row g-4">
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
        </div>
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
        <h2 className='text-center'>پرفروش ترین ها</h2>
        <div className='col-md-3 mx-auto'>
          <hr />
        </div>
        <div className="row g-4">
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
        </div>
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
        <h2>کالا های پیشنهادی</h2>
        <div className='col-md-3'>
          <hr />
        </div>
        <div className="row g-4">
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
        </div>
      </div>

      <hr />

      <Footer />
    </section>
  )
}

export default App

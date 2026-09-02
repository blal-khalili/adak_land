import { useEffect, useRef, useState } from 'react'
import Carousel from './components/Carousel/Carousel';
import supermarketlogo from "./assets/image/CategoryLogos/SuperMarketLogo/icons8-supermarket-96.png/";
import behdashtylogo from "./assets/image/CategoryLogos/BehdashtyLogo/cosmetics.png/";
import tahrirlogo from "./assets/image/CategoryLogos/TahrirLogo/writing.png/";
import janebilogo from "./assets/image/CategoryLogos/JanebiLogo/mobile.png/";
import poster1 from "./assets/image/Posters/poster1.webp/";
import poster2 from "./assets/image/Posters/poster2.jpg";
import poster3 from "./assets/image/Posters/poster3.jpg";
import poster4 from "./assets/image/Posters/poster4.jpg";
import poster5 from "./assets/image/Posters/poster5.jpg";
import poster6 from "./assets/image/Posters/poster6.jpg";
import poster7 from "./assets/image/Posters/poster7.jpg";
import poster8 from "./assets/image/Posters/poster8.jpg";
import CardSlider from "./components/CardSlider/CardSlider";
import { Link } from "react-router";
import useProducts from './hooks/useProducts';
import './App.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


function App() {
  const products = useProducts();

  const showSwal = () => {
    withReactContent(Swal).fire({
      title: "به حساب کاربری خود وارد شدید 😊",
      icon: "success",
      draggable: true,
      customClass: {
        icon: "rotate-y-home",
        popup: "colored-toast-home",
      },
      iconColor: "white",
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
    }).then((result) => {
      if (result) {
        localStorage.setItem('login_pop_up_accepted', true)
      }
    })
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('login_pop_up_accepted')) == false) {
      showSwal()
    }
  }, [])




  const hasLogged = useRef(false);

  useEffect(() => {
    if (hasLogged.current) return;

    hasLogged.current = true;

    console.log(
      `%c
....###....########.....###....##....##.##..........###....##....##.########.
...##.##...##.....##...##.##...##...##..##.........##.##...###...##.##.....##
..##...##..##.....##..##...##..##..##...##........##...##..####..##.##.....##
.##.....##.##.....##.##.....##.#####....##.......##.....##.##.##.##.##.....##
.#########.##.....##.#########.##..##...##.......#########.##..####.##.....##
.##.....##.##.....##.##.....##.##...##..##.......##.....##.##...###.##.....##
.##.....##.########..##.....##.##....##.########.##.....##.##....##.########.
`,
      `
    color: #00fff7;
    font-size: 12px;
    font-weight: bold;
    text-shadow: 0 0 5px #00fff7;
  `
    );

  }, []);






//     const hasLogged = useRef(false);

//   useEffect(() => {
//     if (hasLogged.current) return;

//     hasLogged.current = true;

//     console.log(
//       `%c
//    ###    ########     ###    ##    ##        ##          ###    ##    ## ########
//   ## ##   ##     ##   ## ##   ##   ##         ##         ## ##   ###   ## ##     ##
//  ##   ##  ##     ##  ##   ##  ##  ##          ##        ##   ##  ####  ## ##     ##
// ##     ## ##     ## ##     ## #####           ##       ##     ## ## ## ## ##     ##
// ######### ##     ## ######### ##  ##          ##       ######### ##  #### ##     ##
// ##     ## ##     ## ##     ## ##   ##         ##       ##     ## ##   ### ##     ##
// ##     ## ########  ##     ## ##    ##        ######## ##     ## ##    ## ########
// `,
//       `
//     color: #00fff7;
//     font-size: 12px;
//     font-weight: bold;
//     text-shadow: 0 0 5px #00fff7;
//   `
//     );

//   }, []);






  // const consoleShown = useRef(false);

  // useEffect(() => {
  //   if (consoleShown.current) return;

  //   consoleShown.current = true;

  //   console.log("%cSuccess!", "color: #00ff15; font-weight: bold; background: #222;");
  //   console.log("%cError!", "color: #ff0000; font-weight: bold;");
  //   console.log("%cWarning!", "color: #fff700; font-weight: bold;"); 
  //   console.log("%cInfo", "color: #00fff7; font-weight: bold;");
  //   console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
  // }, []);







  return (
    <section>
      <div className='mt-5'>
        <div className='mx-auto'>
          <Carousel />
        </div>
      </div>


      {/* <div id='Category' className='container mt-5'>
        <h4 className='text-center fw-bold'>خرید براساس دسته بندی</h4>
        <hr className='col-md-2 mx-auto' />
        <div className='row text-center'>
          <div className='col-md-3 col-6'>
            <img className='img-fluid' src={supermarketlogo} alt="" />
            <Link className='text-dark' href="">
              <p className="text-dark">سوپرمارکت</p>
            </Link>
          </div>
          <div className='col-md-3 col-6'>
            <img className='img-fluid' src={behdashtylogo} alt="" />
            <Link className='text-dark' href="">
              <p className="text-dark">لوازم آرایشی و بهداشتی</p>
            </Link>
          </div>
          <div className='col-md-3 col-6'>
            <img className='img-fluid' src={tahrirlogo} alt="" />
            <Link className='text-dark' href="">
              <p className="text-dark">لوازم تحریر</p>
            </Link>
          </div>
          <div className='col-md-3 col-6'>
            <img className='img-fluid' src={janebilogo} alt="" />
            <Link className='text-dark' href="">
              <p className="text-dark">لوازم جانبی</p>
            </Link>
          </div>
        </div>
      </div> */}

      <div id="Category" className="container mt-5">
        <h4 className="text-center fw-bold mb-2">خرید براساس دسته بندی</h4>
        <hr className="category-line mx-auto mb-5" />

        <div className="row text-center g-4">

          {/* سوپرمارکت */}
          <div className="col-md-3 col-6">
            <Link href="" className="category-card" to={"/Supermarket"}>
              <div className="category-circle">
                <img src={supermarketlogo} alt="سوپرمارکت" />
              </div>
              <p>سوپرمارکت</p>
            </Link>
          </div>

          {/* لوازم آرایشی و بهداشتی */}
          <div className="col-md-3 col-6">
            <Link href="" className="category-card" to={"/Cosmetics"}>
              <div className="category-circle">
                <img src={behdashtylogo} alt="لوازم آرایشی و بهداشتی" />
              </div>
              <p>لوازم آرایشی و بهداشتی</p>
            </Link>
          </div>

          {/* لوازم تحریر */}
          <div className="col-md-3 col-6">
            <Link href="" className="category-card" to={"/Stationery"}>
              <div className="category-circle">
                <img src={tahrirlogo} alt="لوازم تحریر" />
              </div>
              <p>لوازم تحریر</p>
            </Link>
          </div>

          {/* لوازم جانبی */}
          <div className="col-md-3 col-6">
            <Link href="" className="category-card" to={"/MobileAccessories"}>
              <div className="category-circle">
                <img src={janebilogo} alt="لوازم جانبی" />
              </div>
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
            <img className='img-fluid rounded' src={poster2} alt="" />
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
            <img className='img-fluid rounded' src={poster3} alt="" />
          </div>
          <div className='col-md-6'>
            <img className='img-fluid rounded' src={poster4} alt="" />
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


      <div className='container mt-5'>
        <div className='row g-4'>
          <div className='col-md-3'>
            <img className='img-fluid rounded' src={poster5} alt="" />
          </div>
          <div className='col-md-3'>
            <img className='img-fluid rounded' src={poster6} alt="" />
          </div>
          <div className='col-md-3'>
            <img className='img-fluid rounded' src={poster7} alt="" />
          </div>
          <div className='col-md-3'>
            <img className='img-fluid rounded' src={poster8} alt="" />
          </div>
        </div>
      </div>


    </section>
  )
}

export default App;

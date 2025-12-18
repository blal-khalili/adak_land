import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/custom_bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import ContactUs from "./components/ContactUs/ContactUs.jsx"
import RegistrationLogin from './components/Registration_Login/RegistrationLogin.jsx';
import Confirmation_Code_Page from "./components/Login_Or_Registration_Confirmation_Code_Page/LoginConfirmationCodePage.jsx"
import './index.css'
import App from './App.jsx'
import Supermarket from './Supermarket.jsx';
import Cart from './Shoppingcart.jsx';
import LandingLayout from './LandingLayout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route path="" element={<App />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/supermarket" element={<Supermarket />}></Route>
          <Route path="/shoppingcart" element={<Cart />}></Route>
        </Route>

        <Route path="/RegistrationLogin" element={<RegistrationLogin />}></Route>
        <Route path="/Confirmation_Code_Page" element={<Confirmation_Code_Page />}></Route>

      </Routes>

    </BrowserRouter>
  </StrictMode>,
)

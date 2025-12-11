import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/custom_bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import ContactUs from "./components/ContactUs/ContactUs.jsx"
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

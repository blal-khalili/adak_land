import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/custom_bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import ContactUs from "./pages/ContactUs/ContactUs.jsx"
import ProductsFilter from './pages/Filter/ProductsFilter.jsx';
import RegistrationLogin from './pages/Registration_Login/RegistrationLogin.jsx';
import Confirmation_Code_Page from "./pages/Login_Or_Registration_Confirmation_Code_Page/LoginConfirmationCodePage.jsx"
import './index.css'
import App from './App.jsx'
import Supermarket from './pages/Supermarket.jsx';
import Cart from './pages/Shoppingcart.jsx';
import LandingLayout from './LandingLayout'
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>

        <Routes>
          <Route path="/" element={<LandingLayout />}>
            <Route path="" element={<App />}></Route>
            <Route path="/ContactUs" element={<ContactUs />}></Route>
            <Route path="/supermarket" element={<Supermarket />}></Route>
            <Route path="/shoppingcart" element={<Cart />}></Route>
            <Route path="/productsfilter" element={<ProductsFilter />}></Route>
          </Route>

          <Route path="/RegistrationLogin" element={<RegistrationLogin />}></Route>
          <Route path="/Confirmation_Code_Page" element={<Confirmation_Code_Page />}></Route>
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>

    </BrowserRouter>
  </StrictMode>,
)

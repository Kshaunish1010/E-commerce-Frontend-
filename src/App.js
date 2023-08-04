import React from 'react';
import './App.css';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsAndContion from './pages/TermsAndCondition';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Checkout from './pages/CheckOut';
//make proper footer that stays down
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='store' element={<OurStore />} >
              <Route path='product/:id' element={<SingleProduct />} />
            </Route>
            <Route path='checkout' element={<Checkout />} />
            <Route path='blogs' element={<Blog />} />
            <Route path='blogs/:id' element={<SingleBlog />} />
            <Route path='cart' element={<Cart />} />
            <Route path='compare-product' element={<CompareProduct />} />
            <Route path='wishlist' element={<WishList />} />
            <Route path='login' element={<Login />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='reset-password' element={<ResetPassword />} />
            <Route path='refund-policy' element={<RefundPolicy />} />
            <Route path='privacy-policy' element={<PrivacyPolicy />} />
            <Route path='shipping-policy' element={<ShippingPolicy />} />
            <Route path='terms-conditions' element={<TermsAndContion />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

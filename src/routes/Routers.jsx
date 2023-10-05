import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Contact from "../views/Contact";
import About from "../views/About";
import Terms from "../views/Terms";
import SingleProduct from "../components/singleProduct/SingleProduct";
import PaymentDetails from "../components/paymentDetails/PaymentDetails";
import AllProducts from "../views/AllProducts";
import ScrollToTop from "../shared/ScrollToTop";

const Routers = () => {
  // useEffect(() => {
  //   const handleContextMenu = (e) => {
  //     e.preventDefault();
  //   };

  //   document.addEventListener("contextmenu", handleContextMenu);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/payment-details/:id" element={<PaymentDetails />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/category/:category" element={<AllProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default Routers;

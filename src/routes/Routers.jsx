import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Contact from "../views/Contact";
import About from "../views/About";
import Terms from "../views/Terms";
import SingleProduct from "../components/singleProduct/SingleProduct";
import PaymentDetails from "../components/paymentDetails/PaymentDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/payment-details" element={<PaymentDetails />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;

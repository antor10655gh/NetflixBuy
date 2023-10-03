import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-5 bg-gray-100">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-10 gap-5">
        <div className="text-black">
          <img src={logo} alt="" />
          <p className="py-3">
            NetflixBuy <br />
            Providing reliable service since 2020
          </p>
        </div>
        <div>
          <h1 className="text-black">COMPANY</h1>
          <p className="text-gray-600 group">
            <Link
              to="/about"
              className="group-hover:underline transition duration-150"
            >
              About us
            </Link>
          </p>
        </div>
        <div>
          <h1 className="text-black">LEGAL</h1>
          <p className="text-gray-600 group">
            <Link
              to="/terms"
              className="group-hover:underline transition duration-150"
            >
              Terms of use
            </Link>
          </p>
          <p className="text-gray-600 group">
            <Link
              to="/terms"
              className="group-hover:underline transition duration-150"
            >
              Privacy policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

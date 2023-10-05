import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import logo from "../assets/images/logo.png";
import CatButton from "./CatButton";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const myMenu = [
    {
      name: "Netflix",
      path: "/category/Netflix",
    },
    {
      name: "Razer Gold",
      path: "/category/RazerGold",
    },
    {
      name: "Amazon",
      path: "/category/Amazon",
    },
    {
      name: "Binance USDT",
      path: "/category/BinanceUSDT",
    },
    {
      name: "Vanilla",
      path: "/category/Vanilla",
    },
    {
      name: "Steam",
      path: "/category/Steam",
    },
    {
      name: "Itunes",
      path: "/category/Itunes",
    },
    {
      name: "Virtual Mastercard",
      path: "/category/VirtualMastercard",
    },
    {
      name: "Walmart",
      path: "/category/Walmart",
    },
  ];

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {myMenu.map((item, index) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <Link
            to={item.path}
            className="flex items-center text-[#696969] hover:text-[#8EA406] focus:text-[#8EA406] transition duration-300 ease-in-out"
          >
            {item.name}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top-0 z-40 h-max max-w-full rounded-none py-2 px-0 lg:py-4 shadow-none bg-gray-100 border-0">
        <div className="px-8 flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <Link to="/">
              <img src={logo} alt="" className="w-34 h-12" />
            </Link>
          </Typography>
          <div className="block lg:hidden">
            <CatButton />
          </div>
          <div className="hidden lg:block">{navList}</div>
          <div className="hidden lg:block">
            {user ? (
              <div className="flex items-center">
                <CatButton />
                <Link to="/logout" className="prim_btn" onClick={handleLogOut}>
                  Logout
                </Link>
              </div>
            ) : (
              <div className="flex items-center">
                <div>
                  <CatButton />
                </div>
                <Link
                  to="/login"
                  className="hover:text-[#8EA406] transition duration-300"
                >
                  Login
                </Link>
                <span className="mx-2">/</span>
                <Link
                  to="/signup"
                  className="hover:text-[#8EA406] transition duration-300"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="w-full container mx-auto">
            {navList}
            {user ? (
              <Link to="/logout" onClick={handleLogOut}>
                <button className="prim_btn">Logout</button>
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-black hover:text-[#8EA406] transition duration-300"
                >
                  Login
                </Link>
                <span className="mx-2 text-black">/</span>
                <Link
                  to="/signup"
                  className="text-black hover:text-[#8EA406] transition duration-300"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </MobileNav>
      </Navbar>
    </>
  );
};

export default Header;

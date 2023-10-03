import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import logo from "../assets/images/logo.png";

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
      path: "/category/TrendingProducts",
    },
    {
      name: "Razer Gold",
      path: "/category/GiftCards",
    },
    {
      name: "Amazon",
      path: "/category/BestSeller",
    },
    {
      name: "Binance USDT",
      path: "/category/GamingGiftcards",
    },
    {
      name: "Vanilla",
      path: "/category/VideoGames",
    },
    {
      name: "Steam",
      path: "/category/Subscriptions",
    },
    {
      name: "Itunes",
      path: "/category/BestSoftware",
    },
    {
      name: "Virtual Mastercard",
      path: "/category/BestSoftware",
    },
    {
      name: "Walmart",
      path: "/category/BestSoftware",
    },
  ];

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {myMenu.map((item, index) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link
            to={item.path}
            className="flex items-center text-lg text-[#696969] hover:text-[#8EA406] focus:text-[#8EA406] transition duration-300 ease-in-out"
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
              <img src={logo} alt="" />
            </Link>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <div className="hidden lg:block">
            {user ? (
              <Link to="/logout" onClick={handleLogOut}>
                <button className="prim_btn">Logout</button>
              </Link>
            ) : (
              <>
                <Link to="/login" className="mr-2">
                  <button className="prim_btn">Login</button>
                </Link>
                <Link to="/signup">
                  <button className="prim_btn">Signup</button>
                </Link>
              </>
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
                <Link to="/login">
                  <button className="prim_btn">Login</button>
                </Link>
                <Link to="/signup">
                  <button className="prim_btn">Signup</button>
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

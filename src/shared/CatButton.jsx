import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";

const CatButton = () => {
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
  return (
    <>
      <div className="flex gap-3 mr-4 hidden lg:block">
        <Menu placement="bottom">
          <MenuHandler>
            <Button className="flex items-center">
              Category <FaList className="ml-2" />
            </Button>
          </MenuHandler>
          <MenuList>
            {myMenu.map((item, index) => {
              return (
                <MenuItem key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </div>
    </>
  );
};

export default CatButton;

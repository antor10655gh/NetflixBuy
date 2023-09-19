import React from "react";
import Header from "../shared/Header";
import Routers from "../routes/Routers";
import Footer from "../shared/Footer";
import LastFooter from "../shared/LastFooter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
      <LastFooter />
      <ToastContainer />
    </div>
  );
};

export default Layout;

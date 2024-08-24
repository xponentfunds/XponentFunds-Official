import React from "react";
import Navbar from "./Header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import ScrollToTop from "../../Utilities/Scrolltotop";

function Layout() {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default Layout;

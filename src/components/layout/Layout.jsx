import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./header/Header.jsx";
import Cart from "./cart/Cart.jsx";
import Footer from "./footer/Footer.jsx";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Cart />
      <Footer />
    </>
  );
}

export default Layout;

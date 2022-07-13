import React from "react";
import Toolbar from "./Toolbar";
import Header from "./Header";
import Footer from "./footer";
import { Outlet, Link } from "react-router-dom";
import "../Weblayout/Weblayout.css";

const Weblayout = () => {
  return (
    <div>
      <Toolbar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Weblayout;

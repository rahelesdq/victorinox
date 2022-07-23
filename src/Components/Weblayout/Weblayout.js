import React from "react";
import Toolbar from "./Toolbar";
import Header from "./Header";
import Footer from "./footer";
import { Outlet, Link } from "react-router-dom";
import "../Weblayout/Weblayout.css";
import Footerservic from "./Footerservic";

const Weblayout = () => {
  return (
    <div>
      <Toolbar />
      <Header />
      <Outlet />
      
      <Footerservic />
      <Footer />
    </div>
  );
};

export default Weblayout;

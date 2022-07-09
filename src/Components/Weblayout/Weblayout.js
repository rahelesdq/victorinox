import React from "react";
import Toolbar from "./Toolbar";
import Header from "./Header";
import { Outlet, Link } from "react-router-dom";
import "../Weblayout/Weblayout.css";

const Weblayout = () => {
  return (
    <div>
      <Toolbar />
      <Header />
      <Outlet />
    </div>
  );
};

export default Weblayout;

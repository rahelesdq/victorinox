import React from "react";
import Toolbar from "./Toolbar";
import { Outlet, Link } from "react-router-dom";
import "../Weblayout/Weblayout.css";

const Weblayout = () => {
  return (
    <div>
      <Toolbar />
      <Outlet />
    </div>
  );
};

export default Weblayout;

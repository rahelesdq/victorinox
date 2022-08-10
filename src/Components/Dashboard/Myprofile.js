import React from "react";
import SidebarDashboard from "./SidebarDashboard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Myprofile = () => {
  const Formdata = useSelector((state) => {
    return state.form.List;
  });
  return (
    <div className="flex ">
      <div>
        <div className="flex mt-8 ml-8 hidden md:block  xl:space-x-2">
          <a className="  ml-4 " href="/">
            home
          </a>
          <span>|</span>
          <Link to="/Dashboard" className="   ">
            My Victorinox
          </Link>
          <Link to="/Dashboard">My Victorinox</Link>
          <span>|</span>
          <a className=" font-bold text-rose-700 ">My profile</a>
        </div>
        <SidebarDashboard />
      </div>
      {Formdata.map((item) => {
        return (
          <div className="flex mt-24">
            {item.FirstName}
            {item.Surname}
          </div>
        );
      })}
    </div>
  );
};

export default Myprofile;

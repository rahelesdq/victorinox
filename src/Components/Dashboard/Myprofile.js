import React from "react";
import SidebarDashboard from "./SidebarDashboard";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Myprofile = () => {
  const navigate = useNavigate();
  const myinfo = useSelector((state) => {
    console.log("lakad matataaaaaaaaaaaaaaaa", state);
    return state.auth.me;
    // auth az store Miad , me az slice
  });
  console.log("**********", myinfo);

  if (!myinfo || !myinfo.email) return navigate("/Login");

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
      <div className="flex mt-24">
        {myinfo.firstname}
        {myinfo.Surname}
        <br />
        {myinfo.country}
        <br />
        {myinfo.language}
        <br />
        {myinfo.startDate}
      </div>
    </div>
  );
};

export default Myprofile;

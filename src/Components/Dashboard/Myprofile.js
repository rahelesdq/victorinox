import React from "react";
import "./Myprofile.css";
import SidebarDashboard from "./SidebarDashboard";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PlaceIcon from "@mui/icons-material/Place";
import CakeIcon from "@mui/icons-material/Cake";
import LanguageIcon from "@mui/icons-material/Language";

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
          <Link to="/Dashboard">My Victorinox</Link>
          <span>|</span>
          <a className=" font-bold text-rose-700 ">My profile</a>
        </div>
        <div className="hidden sm:hidden lg:block">
          <div class="w-[300px] ml-[20px] mt-[30px] bg-white px-1">
            <ul class="relative">
              <li class="relative">
                <Link
                  to="/Dashboard"
                  class="text-2xl flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  My Victorinox
                </Link>
              </li>
              <li class="relative ">
                <Link
                  to="/Dashboard/Editprofile"
                  class="text-1xl flex items-center text-sm py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  Edit Profile
                </Link>
              </li>
              <li class="relative">
                <Link
                  to="/Dashboard/Myprofile"
                  class="text-1xl flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  My profile
                </Link>
                <li class="relative">
                  <a class="text-1xl flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                    My Review
                  </a>
                </li>
                <li class="relative">
                  <a class="text-1xl flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                    My Product
                  </a>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-24 lg:border-l-2 lg:border-gray-300 md:ml-[-110px] ">
        <img
          src="https://www.innovaxn.eu/wp-content/uploads/blank-profile-picture-973460_1280.png"
          className="icone"
        />
        <h1 className="text-2xl ml-[145px] mt-[-55px] font-semibold ">
          {myinfo.firstname} {myinfo.Surname}
        </h1>
        <PlaceIcon className="ml-[150px] mt-[60px] text-rose-700" />
        <h3 className="text-lg ml-[175px] mt-[-25px] ">{myinfo.country}</h3>
        <CakeIcon className="text-rose-700 ml-[150px] mt-[20px]" />
        <h3 className="text-lg ml-[175px] mt-[-23px] ">{myinfo.startDate}</h3>
        <LanguageIcon className="text-rose-700 ml-[150px] mt-[20px]" />
        <h3 className="text-lg ml-[175px] mt-[-26px] ">{myinfo.language}</h3>
        <br />
      </div>
    </div>
  );
};

export default Myprofile;

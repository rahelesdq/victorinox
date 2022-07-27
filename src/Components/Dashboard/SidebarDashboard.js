import React from "react";
import { Link } from "react-router-dom";
import './Dashboard';


const SidebarDashboard = () => {
  return (
    <div>
      <div className="flex mt-8 ml-8 hidden md:block  xl:space-x-2">
        <a className="  ml-4 " href="/">
          home
        </a>
        <span>|</span>
        <Link to="/Dashboard" className="   ">My Victorinox</Link>
        <span>|</span>
        <a className=" font-bold text-rose-700 ">My Profile</a>
      </div>
      <div class="w-60 ml-[20px] mt-[30px] bg-white px-1 ">
        <ul class="relative">
          <li class="relative">
            <Link to="/Dashboard" class="text-3xl flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
              My Victorinox
            </Link>
          </li>
          <li class="relative ">
            <a class="text-2xl flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-rose-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
              My Profile
            </a>
          </li>
          <li class="relative">
            <a class="text-2xl flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
              My Review
            </a>
          </li>
          <li class="relative">
            <a class="text-2xl flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
              My Product
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarDashboard;

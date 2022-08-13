import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard";

const SidebarDashboard = () => {
  return (
    <div>
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
  );
};

export default SidebarDashboard;

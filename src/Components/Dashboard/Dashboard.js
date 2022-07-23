import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex mt-8 ml-8 hidden md:block  xl:space-x-2">
        <a className="  ml-4  text-sm" href="/">
          home
        </a>
        <span>|</span>
        <a className=" font-bold  text-sm text-rose-700 ">My Victorinox</a>
      </div>
      <div className="mt-10 w-4/5  items-center justify-center flex justify-between ml-[160px] text-gray-600">
        <div className="text-center ml-40">
          <FaRegUser className="text-8xl font-thin " />
          <Link to="Myprofile">
            <button className="border-2 border-gray-700 border-solid mt-8 w-72 h-10 ">
              MY PROFILE
            </button>
          </Link>
        </div>
        <div>
          <FaShoppingCart className="text-8xl font-thin" />
          <Link to="Myproducts">
            <button className="border-2 border-gray-700 border-solid mt-8 w-72 h-10 ">
              MY PRODUCTS
            </button>
          </Link>
        </div>
        <div className="text-center mr-40">
          <FaRegStar className="text-8xl font-thin" />
          <Link to="Myreviews">
            <button className="border-2 border-gray-700 border-solid mt-8 w-72 h-10 ">
              MY REVIEWS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const me = useSelector((state) => state.auth.me);

  useEffect(() => {
    if (!me) return navigate("/Login");
    setLoading(false);
  }, []);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div>
      <div className="flex mt-8 ml-8 hidden md:block  xl:space-x-2">
        <a className="  ml-4  text-sm" href="/">
          home
        </a>
        <span>|</span>
        <a className=" font-bold  text-sm text-rose-700 ">My Victorinox</a>
      </div>
      <div className="lg:mt-10 sm:mt-18 ml-[80px] mt-[50px] w-4/5  justify-between lg:ml-[230px]  text-gray-600 sm:block lg:flex ">
        <div className=" content-center">
          <FaRegUser className="lg:text-8xl  text-4xl font-thin lg:ml-[100px]" />
          <Link to="Myprofile">
            <button className="border-2  border-gray-700 border-solid mt-8 w-72 h-10 ">
              MY PROFILE
            </button>
          </Link>
        </div>
        <div>
          <FaShoppingCart className="lg:text-8xl text-4xl font-thin lg:ml-[90px]" />
          <Link to="Myproducts">
            <button className="border-2 border-gray-700 border-solid mt-8 w-72 h-10 ">
              MY PRODUCTS
            </button>
          </Link>
        </div>
        <div className="lg:text-center lg:mr-40 ">
          <FaRegStar className="lg:text-8xl text-4xl font-thin lg:ml-[90px] " />
          <Link to="Myreviews">
            <button className="border-2 border-gray-700 border-solid mt-8 w-72 h-10 ">
              MY REVIEWS
            </button>
          </Link>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Dashboard;

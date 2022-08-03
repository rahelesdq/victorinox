import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../Redux/Userslice";

const LoginComp = () => {
  console.log("Login called");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Email, SetEmail] = useState();
  const [Pass, SetPass] = useState();
  const loginbtn = () => {
    dispatch(
      Login({
        Email,
        Pass,
      })
    );
    navigate("/dashboard");
    // if (!Email === email && !Pass === password) return <h1>alart</h1>;

    // console.log(email);
  };

  return (
    <div>
      <br />
      <br />
      <div class="">
        <div className="flex mt-8 ml-8 hidden md:block  xl:space-x-2">
          <a className="  ml-4 " href="/">
            home
          </a>
          <span>|</span>
          <a className=" font-bold text-rose-700 ">Login</a>
        </div>
        <div class="text-center">
          <label
            class="block text-2xl text-gray-700 text-sm   mb-2"
            for="email"
          >
            E-Mail
          </label>
          <input
            value={Email}
            onChange={(e) => SetEmail(e.target.value)}
            class="  border border-black py-4 px-20 "
            id="Email"
            type="email"
            placeholder="Email"
          ></input>
        </div>
        {/* {console.log(Email)} */}
        <br />
        <div class="text-center">
          <label
            class="block text-2xl text-gray-700 text-sm  mb-2"
            for="password"
          >
            Password
          </label>
          <input
            value={Pass}
            onChange={(e) => SetPass(e.target.value)}
            class=" border border-black py-4 px-20 "
            id="password"
            type="password"
            placeholder="Password"
          ></input>
        </div>
        <div class="text-center">
          <button
            onClick={loginbtn}
            className="xl:mt-7 bg-rose-700 py-4 w-[339px] text-white  shadow"
          >
            Login
          </button>
        </div>
        <br />

        <span class="xl:ml-[630px] md:ml-[310px] sm:ml-[180px]  text-red-700">
          forgote password???
        </span>
        <br />
        <div class=" flex space-x-3   ">
          <span class="xl:ml-[630px] md:ml-[310px] sm:ml-[180px]">
            No Account?
          </span>
          <Link to="../Register">
            <span class="text-red-700 hover:text-black cursor-pointer  ">
              Register Now!
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;

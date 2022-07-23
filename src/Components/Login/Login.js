import React from "react";

const Login = () => {
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
            class="  border  border-black   py-4 px-20 "
            id="Email"
            type="text"
            placeholder="Email"
          ></input>
        </div>
        <br />
        <div class="text-center">
          <label
            class="block text-2xl text-gray-700 text-sm  mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class=" border border-black py-4 px-20 "
            id="password"
            type="password"
            placeholder="Password"
          ></input>
        </div>
        <div class="text-center">
          <button className="xl:mt-7 bg-rose-700 py-4 w-[339px] text-white  shadow">
            Login
          </button>
        </div>
        <br/>
        
          <span class="xl:ml-[630px] md:ml-[310px] sm:ml-[180px]  text-red-700">forgote password???</span><br/>
          <div class=" flex space-x-3   ">
            <span class="xl:ml-[630px] md:ml-[310px] sm:ml-[180px]">No Account?</span>
            <span class="text-red-700 hover:text-black cursor-pointer  ">Register Now!</span>
          </div>
        
        
      </div>
    </div>
  );
};

export default Login;

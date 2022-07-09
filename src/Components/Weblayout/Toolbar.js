import React from "react";
import "./Toolbar.css";

const Toolbar = () => {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-rose-700 h-11  p-6">
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Docs
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="#"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
      {/* <div className=" flex grid-rows-3 bg-rose-700 w-screen h-11 container">
        <ul className=" text-white text-sm space-x-4 ml-24 pt-3">
          <li>
            {" "}
            <a href="/global/en/New-Arrivals/cms/new-arrivals">New Arrivals</a>
          </li>
          <li>
            <a href="/global/en/Gift-Ideas/cms/gift-ideas">Gift Ideas</a>
          </li>
          <li>
            <a href="/global/en/Personalize-Your-Travel-Gear/cms/personalize-your-travel-gear">
              Personalize
            </a>
          </li>
        </ul>
        <ul className="flex ">
          <li className=" order-last">
            <img
              src="//assets.victorinox.com/_ui/static/media/icons/icon_global_white.svg?"
              className="bg-pink-700 w-3"
            />
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Toolbar;

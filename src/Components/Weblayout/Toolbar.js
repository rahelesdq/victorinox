import React from "react";
import "./Toolbar.css";

const Toolbar = () => {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-rose-700 h-11  p-2">
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white">
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
        <div class="w-full block flex-grow lg:flex xl:ml-24 font-normal lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4   lg:inline-block lg:mt-0 lg:text-white hover:text-white mr-4"
            >
              New Arrivals
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-white mr-4"
            >
              Gift Ideas
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-white"
            >
              Personalize
            </a>
          </div>
          <div>
            <svg
              className="absolute w-6 lg:text-white lg:-ml-4 lg:mt-0 sm:mt-4 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <a
              href="#"
              class="inline-block text-sm px-4 py-2 leading-none  lg:text-white border-white hover:border-transparent mr-24 mt-4 lg:mt-0 sm:ml-3"
            >
              Stores
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

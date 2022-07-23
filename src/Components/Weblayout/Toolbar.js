import React, { useState } from "react";
import "./Toolbar.css";
import { AiOutlineRight } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Toolbar = () => {
  const [ShowMenu, setShowMenu] = useState(false);
  const [secondShow, setSecondShow] = useState(false);

  const handleClick = () => {
    console.log("hey its working");

    setSecondShow(true);
  };

  const ShowSidebar = () => {
    console.log("hello is workigng");
    setSecondShow(false);
  };

  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap  bg-rose-700 h-11  p-2">
        <div class="block lg:hidden ">
          <button
            onClick={() => setShowMenu(true)}
            class="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white md:grid sm:grid "
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title> Menu </title>

              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div class="hidden lg:block w-full  flex-grow lg:flex xl:ml-24 font-normal lg:items-center lg:w-auto  ">
          <div class="text-sm lg:flex-grow ">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-white mr-4 "
            >
              New Arrivals
            </a>

            <a
              href="#responsive-header "
              class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-white mr-4 "
            >
              Gift Ideas
            </a>

            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-white "
            >
              Personalize
            </a>
          </div>

          <div>
            <div className=" lg:-mr-20 sm:-ml-7">
              <Link to="/Dashboard">
                <svg
                  className="absolute w-6 lg:text-white lg:-ml-2 lg:mt-0 sm:mt-4 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>

              <a
                href="#"
                class="inline-block text-sm px-4 py-2 leading-none  lg:text-white border-white hover:border-transparent mr-24 mt-4 lg:mt-0 lg:-mr-7 sm:ml-3"
              >
                Account |
              </a>

              <Link
                to="/Login"
                class="inline-block text-sm px-4 py-2 leading-none  lg:text-white border-white hover:border-transparent mr-24 mt-4 lg:mt-0 lg:ml-0 sm:-ml-32"
              >
                Log in
              </Link>
            </div>
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
              class="inline-block text-sm px-4 py-2 leading-none  lg:text-white border-white hover:border-transparent mr-24 mt-4 lg:mt-0 lg:ml-0 sm:ml-3"
            >
              Stores
            </a>
          </div>
        </div>
      </nav>

      <>
        {secondShow ? (
          <div
            className=" bg-rose-700 z-20 fixed w-full h-screen  bg-opacity-90 top-0"
            onClick={() => ShowSidebar()}
          >
            <div className=" bg-white w-60 h-screen z-50 top-0  flex absolute  sm:grid ">
              <div>
                <a
                  href="#responsive-header"
                  class="block mt-[30px] lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-[30px]  "
                >
                  BACK
                  <IoIosArrowBack className=" inline absolute  right-1   left-0 mt-[5px] text-sm ml-[10px]" />
                </a>

                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-6 text-lg font-bold"
                >
                  SWISS ARMY KNIVES
                </a>

                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-6 text-lg "
                >
                  CATEGORY
                  <AiOutlineRight className=" inline absolute  right-1  text-lg" />
                </a>

                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-6 text-lg "
                >
                  INFORMATION
                  <AiOutlineRight className=" inline absolute  right-1  text-lg" />
                </a>

                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-6 text-lg "
                >
                  INSPIRATION
                  <AiOutlineRight className="inline absolute  right-1  text-lg" />
                </a>

                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-6 text-lg"
                >
                  SERVICE
                  <AiOutlineRight className=" inline absolute  right-1  text-lg" />
                </a>

                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-6"
                >
                  125 YEARS
                </a>
              </div>
            </div>
            <a
              href="#responsive-header"
              className="block   lg:inline-block lg:mt-0 lg:text-white hover:text-white "
            >
              New Arrivals
            </a>

            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 lg:text-white  hover:text-white mr-4"
            >
              Gift Ideas
            </a>
          </div>
        ) : (
          <>
            <div
              onClick={() => setShowMenu(false)}
              className={` bg-rose-700 z-20 fixed w-full h-screen  bg-opacity-90 top-0 sm:fixed md:fixed  ${
                ShowMenu ? "left-0" : "right-full "
              }   opacity-90 transition-all `}
            >
              <ImCross className="absolute right-2 top-2  text-white " />
            </div>
            <div
              className={`bg-white fixed  sm:fixed  ${
                ShowMenu ? "left-0" : "left-full"
              } top-0 w-[250px] h-screen z-30 transition-all  `}
            >
              <div class="absolute ">
                <button>
                  <a
                    onClick={() => handleClick()}
                    href="#responsive-header"
                    class="block mt-[30px] lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-[25px]"
                  >
                    SWISS ARMY KNIVES
                    <AiOutlineRight className=" inline   absolute  text-lg mt-[5px]  " />
                  </a>
                </button>

                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-6 text-lg"
                >
                  CUTLERY
                  <AiOutlineRight className=" inline absolute  right-1  text-lg mt-[7px]  ml-[5px] " />
                </a>

                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-6 text-lg "
                >
                  WATCHES
                  <AiOutlineRight className=" inline absolute  right-1  text-lg mt-[6px]" />
                </a>

                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-6 text-lg "
                >
                  TRAVEL GEAR
                  <AiOutlineRight className="inline absolute  right-1  text-lg mt-[7px]" />
                </a>

                <a
                  href="#responsive-header "
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-6 text-lg"
                >
                  FRAGRANCES
                  <AiOutlineRight className=" inline absolute  right-1  text-lg mt-[8px]" />
                </a>

                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-6 text-lg"
                >
                  VICTORINOX
                  <AiOutlineRight className="inline absolute    text-lg mt-[9px]  mr-[10px]" />
                </a>
              </div>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default Toolbar;

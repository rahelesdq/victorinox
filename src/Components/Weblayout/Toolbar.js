import React, { useState } from "react";
import "./Toolbar.css";
import { AiOutlineRight } from "react-icons/ai";
import { ImCross } from "react-icons/im";
const Toolbar = () => {
  const [ShowMenu, setShowMenu] = useState(false);
  const [secondShow, setSecondShow] = useState(false);


  const handleClick = () => {
    console.log('hey its working')
    setSecondShow(true)
  }

  const handleHello = () => {
    console.log("hello is workigng")
    setSecondShow(false)
  }

  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-rose-700 h-11  p-2">
        <div class="block lg:hidden ">
          <button
            onClick={() => setShowMenu(true)}
            class="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white"
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

        <div class="w-full block flex-grow lg:flex xl:ml-24 font-normal lg:items-center lg:w-auto  ">
          <div class="text-sm lg:flex-grow ">
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
            <div className=" lg:-mr-20 sm:-ml-7">
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

              <a
                href="#"
                class="inline-block text-sm px-4 py-2 leading-none  lg:text-white border-white hover:border-transparent mr-24 mt-4 lg:mt-0 lg:-mr-7 sm:ml-3"
              >
                Account
              </a>

              <a
                href="#"
                class="inline-block text-sm px-4 py-2 leading-none  lg:text-white border-white hover:border-transparent mr-24 mt-4 lg:mt-0 lg:ml-0 sm:-ml-32"
              >
                Log in
              </a>
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
          <div className="bg-red-500" onClick={() => handleHello()}>
            <div className=" bg-red-800 w-60 h-[200px] z-50 top-0  flex absolute ">bbgb</div>
          </div>
        ) : (
          <>
            <div
              onClick={() => setShowMenu(false)}
              className={`w-full  h-screen bg-rose-700 z-20 fixed top-0 ${
                ShowMenu ? "left-0" : "right-full"
              }   opacity-90 transition-all`}
            >
              <ImCross className=" ml-3 " />
            </div>
            <div
              className={`bg-white fixed ${
                ShowMenu ? "left-0" : "left-full"
              } top-0 w-1/3 h-screen z-30 transition-all `}
            >
              <div class="text-sm lg:flex-grow ">
                <button className="bg-blue-500" >
                  <a
                  onClick={() => handleClick()}
                    href="#responsive-header"
                    class="block mt-6   lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-6 text-lg "
                  >
                    SWISS ARMY KNIVES
                    <AiOutlineRight className=" inline top-8  absolute right-1 text-lg left-0" />
                  </a>
                </button>
                <div>
                  {/* <div
                    onClick={() => setSecondShow(false)}
                    className={` ${
                      secondShow ? "left-0" : "right-full"
                    }   opacity-90 transition-all`}
                  ></div> */}
                </div>
                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-6 text-lg"
                >
                  CUTLERY
                  <AiOutlineRight className=" inline top-[73px] absolute  right-1  text-lg" />
                </a>
                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-6 text-lg"
                >
                  WATCHES
                  <AiOutlineRight className=" inline absolute  right-1  text-lg" />
                </a>
                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-6 text-lg"
                >
                  TRAVEL GEAR
                  <AiOutlineRight className=" inline absolute  right-1  text-lg" />
                </a>
                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-6 text-lg "
                >
                  FRAGRANCES
                  <AiOutlineRight className=" inline absolute  right-1  text-lg" />
                </a>
                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 ml-6"
                >
                  STORE LOCATOR
                </a>
                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 text-xs ml-6 "
                >
                  MY VICTORINOX
                </a>

                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 text-xs ml-6"
                >
                  WISH LIST
                </a>
                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 lg:text-white hover:text-red-500 text-xs ml-6 "
                >
                  NEW Arrivals
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

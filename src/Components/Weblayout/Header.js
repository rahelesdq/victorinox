import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header-2 h-28 ">
        <nav className="bg-white py-2 md:py-4 border-solid border-gray-300 border-b">
          <div className="container px-4  md:flex md:items-center ">
            <div className="flex justify-between items-center">
              <a href="#">
                <img
                  className="ml-24 lg:w-64 "
                  // md:w-24 md:-mt-8 ml-72
                  src="https://assets.victorinox.com/_ui/static/media/victorinox-logo.svg?"
                />
              </a>
            </div>

            <div
              class="md:hidden lg:flex   lg:mt-12 md:ml-60 md:mt-10 text-lg font-normal xl:ml-56 md:flex flex-col md:flex-row  mt-3 md:mt-0"
              id="navbar-collapse"
            >
              <a
                href="#"
                class="p-2 lg:px-4 sm:mx-2 lg:w-52 md:w-44  text-gray-600 rounded "
              >
                Swiss Army Knives
              </a>

              {/* <div class="hidden peer-hover:flex hover:flex  flex-col bg-white drop-shadow-lg w-1/5">
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  About Us
                </a>
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  Contact Us
                </a>
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  Privacy Policy
                </a>
              </div> */}
              <a
                href="#"
                class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#"
                class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="#"
                class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Pricing
              </a>
              <a
                href="#"
                class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Contact
              </a>
            </div>

            {/* search input */}
            <div class=" lg:mb-10 lg:mr-16 ">
              {/* md:mt-24 md:mr-24 */}
              <div class="flex bg-rose-700">
                <input
                  type="text"
                  class="px-2 bg-gray-300 py-2 w-80"
                  placeholder="Search..."
                />
                <button class="flex items-center justify-center px-4 border-l">
                  <h3 className="text-white text-sm">SEARCH</h3>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full bg-black">hiiii</div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

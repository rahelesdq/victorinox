import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header-2 h-28 border-solid border-gray-300 border-b">
        <nav className="bg-white py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <a href="#">
                <img src="https://assets.victorinox.com/_ui/static/media/victorinox-logo-anniversary.svg" />
              </a>
              <button
                class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                id="navbar-toggle"
              >
                <i class="fas fa-bars"></i>
              </button>
            </div>

            <div
              class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
              id="navbar-collapse"
            >
              <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded ">
                Swiss Army Knives
              </a>
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
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

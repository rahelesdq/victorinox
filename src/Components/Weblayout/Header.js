import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-2 h-28 ">
        <nav className="bg-white py-2 md:py-4 border-solid border-gray-300 border-b">
          <div className="container  md:flex md:items-center lg:justify-between flex ">
            <div className=" flex justify-between items-end space-x-32">
              <a href="#">
                <img
                  className="lg:ml-24  lg:w-68 md:w-24 lg:block md:-mt-8 md:ml-72 "
                  src="https://assets.victorinox.com/_ui/static/media/victorinox-logo.svg?"
                />
              </a>
            </div>

            {/* <div class="bg-red hidden lg:flex   lg:mt-12 md:mt-10 text-lg font-normal xl:ml-56  flex-col lg:flex-row  mt-3 md:mt-2">
              <div class=" p-2 lg:px-4 sm:mx-2 lg:w-52 md:w-44  text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 itemhover menu1">
                <a href="#">Swiss Army Knives</a>
                <div className=" mt-2 left-2 w-screen h-3/5 z-50 bg-white text-white absolute flex hidden  dropdown1 ">
                  <div className="flex justify-items-center  space-x-2">
                    <ul className="pt-10 pl-32 text-gray-900 ">
                      <li className="font-medium text-base">Categories</li>
                      <li className="pt-10 text-sm">Small Pocket Knives</li>
                      <li className="pt-4 text-sm">Medium Pocket Knives</li>
                      <li className="pt-4 text-sm">Large Pocket Knives</li>
                      <li className="pt-4 text-sm">Pouches & Accessories</li>
                      <li className="pt-4 text-sm">Outdoor</li>
                      <li className="pt-4 text-sm">Garden</li>
                    </ul>
                  </div>
                  <div className="justify-items-center justify-center justify-items-center">
                    <ul className="pt-10 pl-48 text-gray-900 ">
                      <li className="font-medium">Information</li>
                      <li className="pt-10 text-sm">
                        Production of the Pocketknife
                      </li>
                      <li className="pt-4 text-sm">Materials We Use</li>
                      <li className="pt-4 text-sm">Wine Master</li>
                    </ul>
                  </div>
                  <div className="justify-items-center flex">
                    <ul className="pt-10 pl-48 text-gray-900 ">
                      <li className="font-medium ">Service</li>
                      <li className="pt-10 text-sm">FAQ</li>
                      <li className="pt-4 text-sm">Downloads</li>
                      <li className="pt-4 text-sm">Contact</li>
                      <li className="pt-4 text-sm">Pouches & Accessories</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 itemhover menu2">
                <a href="#">Cutlery</a>
                <div className="mt-2 left-2 w-screen h-3/5 z-50 bg-white text-white absolute hidden  dropdown2 ">
                  <div className="flex space-x-2">
                    <ul className="pt-10 pl-32 text-gray-900 ">
                      <li className="font-medium text-base">Categories</li>
                      <li className="pt-10 text-sm">Chef's Knives</li>
                      <li className="pt-4 text-sm">Steak Knives</li>
                      <li className="pt-4 text-sm">Paring Knives</li>
                      <li className="pt-4 text-sm">Bread Knives</li>
                      <li className="pt-4 text-sm">Storage & Sets</li>
                      <li className="pt-4 text-sm">Kitchen Utensils</li>
                      <li className="pt-4 text-sm">Tableware</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pt-10 pl-28 text-gray-900 ">
                      <li className="font-medium text-base">Information</li>
                      <li className="pt-10 text-sm">Knife Overview</li>
                      <li className="pt-4 text-sm">Knife-Buying Guide</li>
                      <li className="pt-4 text-sm">Knife Care Tips</li>
                      <li className="pt-4 text-sm">
                        How to Sharpen Your Kitchen Knife
                      </li>
                      <li className="pt-4 text-sm">Commercial Cutlery</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pt-10 pl-28 text-gray-900 ">
                      <li className="font-medium text-base">Inspiration</li>
                      <li className="pt-10 text-sm">Let's Cook</li>
                      <li className="pt-4 text-sm">BBQ from A to Z</li>
                      <li className="pt-4 text-sm">
                        Nenad Mlinarevic: a Master Partnership
                      </li>
                      <li className="pt-4 text-sm">Knife Skills Videos</li>
                      <li className="pt-4 text-sm">Knife Masterclass</li>
                      <li className="pt-4 text-sm">Santoku Collection</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pt-10 pl-28 text-gray-900 ">
                      <li className="font-medium text-base">Service</li>
                      <li className="pt-10 text-sm">FAQ</li>
                      <li className="pt-4 text-sm">Downloads</li>
                      <li className="pt-4 text-sm">Contact</li>
                      <li className="pt-4 text-sm">Care Tips</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 itemhover menu3">
                <a href="#">Fragrances</a>
                <div className="mt-2 w-full h-3/5 z-50 bg-white text-white absolute hidden left-2 w-screen dropdown3 ">
                  <div className="flex space-x-2">
                    <ul className="pt-10 pl-32 text-gray-900 ">
                      <li className="font-medium text-base">Categories</li>
                      <li className="pt-10 text-sm">For Women</li>
                      <li className="pt-4 text-sm">For Men</li>
                      <li className="pt-4 text-sm">Heritage Collection</li>
                      <li className="pt-4 text-sm">Signature Collection</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pt-10 pl-40 text-gray-900 ">
                      <li className="font-medium text-base">For Men</li>
                      <li className="pt-10 text-sm">Wood</li>
                      <li className="pt-4 text-sm">Black Steel</li>
                      <li className="pt-4 text-sm">Steel</li>
                      <li className="pt-4 text-sm">Rock</li>
                      <li className="pt-4 text-sm">Genepi</li>
                      <li className="pt-4 text-sm">Swiss Army Classic</li>
                      <li className="pt-4 text-sm">Swiss Army Altitude</li>
                      <li className="pt-4 text-sm">Swiss Army Sport</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pt-10 pl-40 text-gray-900 ">
                      <li className="font-medium text-base">For Women</li>
                      <li className="pt-10 text-sm">First Snow</li>
                      <li className="pt-4 text-sm">Forget Me Not</li>
                      <li className="pt-4 text-sm">Morning Dew</li>
                      <li className="pt-4 text-sm">Swiss Army For Her</li>
                      <li className="pt-4 text-sm">
                        Swiss Army For Her Floral
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 itemhover menu4">
                <a href="#">Victorinox</a>
                <div className="mt-2 w-full h-3/5 z-50 bg-white text-white absolute hidden left-2 w-screen dropdown4 ">
                  <div className="flex space-x-2">
                    <ul className="pt-10 pl-32 text-gray-900 ">
                      <li className="font-medium text-base">Welcome</li>
                      <li className="pt-10 text-sm">Company</li>
                      <li className="pt-4 text-sm">Inspiration</li>
                      <li className="pt-4 text-sm">Careers</li>
                      <li className="pt-4 text-sm">Press</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pt-10 pl-40 text-gray-900 ">
                      <li className="font-medium text-base">Visit Us</li>
                      <li className="pt-10 text-sm">Find a Store</li>
                      <li className="pt-4 text-sm">Service Centers</li>
                      <li className="pt-4 text-sm">Country Representatives</li>
                      <li className="pt-4 text-sm">Country Representatives</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pt-10 pl-40 text-gray-900 ">
                      <li className="font-medium text-base">Help & FAQ</li>
                      <li className="pt-10 text-sm">Corporate Gifts (B2B)</li>
                      <li className="pt-4 text-sm">Submit your Product Idea</li>
                      <li className="pt-4 text-sm">Contact</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 itemhover menu5">
                <a href="#">Watches</a>
                <div className="mt-2  h-3/5 z-50 bg-white text-white absolute hidden left-1 w-screen dropdown5 ">
                  <div className="flex space-x-2">
                    <ul className="pt-10 pl-32 text-gray-900 ">
                      <li className="font-medium text-base">Categories</li>
                      <li className="pt-10 text-sm">Men's Watches</li>
                      <li className="pt-4 text-sm">Women's Watches</li>
                      <li className="pt-4 text-sm">Diving Watches</li>
                      <li className="pt-4 text-sm">Chronographs</li>
                      <li className="pt-4 text-sm">Business Watches</li>
                      <li className="pt-4 text-sm">Pilot Watches</li>
                      <li className="pt-4 text-sm">Mechanical Watches</li>
                      <li className="pt-4 text-sm">Collections</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pt-10 pl-40 text-gray-900 ">
                      <li className="font-medium text-base">Information</li>
                      <li className="pt-10 text-sm">Materials We Use</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pt-10 pl-40 text-gray-900 ">
                      <li className="font-medium text-base">Inspiration</li>
                      <li className="pt-10 text-sm">
                        On Point: The I.N.O.X. Mechanical
                      </li>
                      <li className="pt-4 text-sm">Watch Tests</li>
                      <li className="pt-4 text-sm">Catch a wave</li>
                      <li className="pt-4 text-sm">
                        The Future of Stainless Steel
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pt-10 pl-48 text-gray-900 ">
                      <li className="font-medium text-base">Service</li>
                      <li className="pt-10 text-sm">Instruction Movies</li>
                      <li className="pt-4 text-sm">Manuals & Quick Guides</li>
                      <li className="pt-4 text-sm">Replacement Straps</li>
                      <li className="pt-4 text-sm">Watches Warranty</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}

            {/* search input */}
            <div>
              {/* md:mt-24 md:mr-24 */}
              <div class="flex bg-rose-700 lg:mb-10 lg:mr-16 lg:w-80 sm:w-80  sm:mb-18 ">
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
        </nav>
      </div>
    </div>
  );
};

export default Header;

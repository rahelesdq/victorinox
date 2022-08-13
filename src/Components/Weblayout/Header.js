import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="sm:flex justify-between items-center mx-12 h-14 block">
        <div className="flex  content-center">
          <Link to="/">
            <img
              className=" sm:mt-[60px] mt-[10px]"
              src="https://assets.victorinox.com/_ui/static/media/victorinox-logo.svg?"
            />
          </Link>
        </div>
        <div class="lg:flex small:hidden hidden bg-rose-700 mr-[10px] mt-[55px]">
          <input
            className="h-[40px] px-2 bg-gray-300 py-2 w-80  "
            type="text"
            placeholder="Search..."
          />

          <button className="h-[40px] text-white text-sm px-2 py-1">
            SEARCH{" "}
          </button>
        </div>
      </div>
      <nav className="bg-white h-22 sm:border-0 lg:border-solid lg:border-gray-300 lg:border-b">
        <div class=" hidden  lg:flex  md:ml-60 md:mt-10 text-lg font-normal xl:ml-[300px]   lg:flex-row  md:mt-2">
          <div className=" items-center justify-between flex ">
            <div class="  lg:px-4 sm:mx-2 lg:w-48 md:w-44  text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 itemhover menu1">
              <a href="#">Swiss Army Knives</a>
              <div className=" mt-2 left-1  w-full h-3/5 z-50 bg-white text-white absolute flex hidden  dropdown1 ">
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
                    <li className="pt-10 text-sm"> Chef's Knives</li>
                    <li className="pt-4 text-sm">Steak Knives</li>
                    <li className="pt-4 text-sm">Paring Knives</li>
                    <li className="pt-4 text-sm"> Bread Knives</li>
                    <li className="pt-4 text-sm"> Storage & Sets </li>
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
                    <li className="pt-4 text-sm">Swiss Army For Her Floral</li>
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
              <Link to="/Watches">Watches</Link>
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

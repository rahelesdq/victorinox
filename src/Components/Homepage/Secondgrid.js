import React from "react";
import "./Secondgrid.css";
import swissarmy from "../../imagegrid2/download.webp1.webp";
import nife2 from "../../imagegrid2/download.webp2.webp";
import bottle from "../../imagegrid2/download.webp3.webp";
import watch2 from "../../imagegrid2/download.webp4.webp";
import luggage from "../../imagegrid2/download.webp5.webp";

const Secondgrid = () => {
  return (
    <div>
      <div className=" md:px-[10px] lg:px-[130px] md:grid  lg:grid-cols-3 sm:grid-cols-2 gap-3 lg:mt-[58px] sm:mt-[110px] mt-[140px]  ">
        <div className=" lg:col-span-2 sm:col-span-1">
          <div className="w-full h-full relative ">
            <img className="w-full h-full" src={swissarmy} alt="" />
            <div className="flex justify-center">
              <button className=" bg-rose-700 w-52  h-12 absolute md:bottom-7 m-5  text-white uppercase absolute  ">
                Swiss Army Knives
              </button>
            </div>
          </div>
        </div>
        <div className="relative h-full imgbox ">
          <img className="w-full h-full" src={nife2} alt="" />
          <div className="flex justify-center">
            <button className=" bg-rose-700 w-52 h-12  absolute md:bottom-7 m-5  text-white uppercase absolute  ">
              Cutlery
            </button>
          </div>
        </div>

        <div className="col-span-1 ">
          <div className="w-full h-full relative imgbox">
            <img className="w-full h-full" src={bottle} alt="" />
            <div className="flex justify-center">
              <button className=" bg-rose-700 w-52 h-12  absolute md:bottom-7 m-5  text-white uppercase absolute  ">
                Fragrances
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 sm:col-span-1">
          <div className="w-full h-full relative imgbox">
            <img className="w-full h-full" src={watch2} alt="" />
            <div className="flex justify-center">
              <button className=" bg-rose-700 w-52 h-12  absolute md:bottom-7 m-5  text-white uppercase absolute  ">
                Watches
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 sm:hidden lg:block">
          <div className="w-full relative  mt-[5px] imgbox">
            <img className="w-full " src={luggage} alt="" />
            <div className="flex justify-center">
              <button className=" bg-rose-700 w-52 h-12  absolute md:bottom-7 m-5  text-white uppercase absolute  ">
                Travel Gear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondgrid;

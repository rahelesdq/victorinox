import React from "react";
import './Imagegrid.css';
import victorinox from "../../image/download.web1.webp";
import girl from "../../image/download.3.jpg";
import nife from "../../image/download.webp";
import goje from "../../image/download.3.webp";
import watch from "../../image/download.watch.webp";

const Imagegrid = () => {
  return (
    <div>
      <div className=" md:px-[130px]  md:grid  grid-cols-3 gap-3 lg:mt-[58px] sm:mt-[110px] mt-[140px]  ">
        <div className="app w-full h-fit col-span-full relative md:shrink-0 imgbox cursor-auto">
          <img
            className="img-container   md:w-full md:h-full   "
            src={victorinox}
            alt=""
          />
          <h1 className=" absolute md:bottom-7 m-5  text-white uppercase    ">
            BEST OF VICTORINOX AND ADIDAS
          </h1>
          <p className=" absolute bottom-0   text-white  font-bold  m-5 text-lg">
            BE EQUIPPED
          </p>
        </div>
        <div className=" col-span-2 ">
          <div className="w-full relative imgbox">
            <img className="w-full  " src={girl} alt="" />
            <h1 className="absolute bottom-[0px]   text-white uppercase   bg-rose-700 w-full h-[112px] bg-opacity-75  "></h1>
            <p className=" absolute bottom-0  text-white  font-bold  m-5 text-lg">
              PART OF YOUR JOURNEY
            </p>
          </div>
          <div className="w-full mt-[10px] relative imgbox">
            <img className="w-full" src={goje} alt="" />

            <h1 className="absolute bottom-0   text-white  bg-rose-700 w-full h-[112px] bg-opacity-75 "></h1>
            <p className=" absolute bottom-0  text-white  font-bold  m-5 text-lg">
              PART OF YOUR JOURNEY
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full relative imgbox">
            <img className="w-full  " src={nife} alt="" />
            <h1 className="absolute bottom-0  text-white  bg-rose-700 w-full h-[112px] bg-opacity-75 "></h1>
            <p className=" absolute bottom-0  text-white  font-bold  m-5 text-lg">
              PART OF YOUR JOURNEY
            </p>
          </div>

          <div className="w-full relative mt-[10px] imgbox">
            <img className="w-full " src={watch} alt="" />
            <h1 className="absolute bottom-0   text-white  bg-rose-700 w-full h-[112px] bg-opacity-75 "></h1>
            <p className=" absolute bottom-0 text-white  font-bold  m-5 text-lg">
              PART OF YOUR JOURNEY
            </p>
          </div>

          <div className="w-full relative  mt-[10px] imgbox">
            <img className="w-full " src={watch} alt="" />
            <h1 className="absolute bottom-0   text-white  bg-rose-700 w-full h-[112px] bg-opacity-75 "></h1>
            <p className=" absolute bottom-0  text-white  font-bold  m-5 text-lg">
              PART OF YOUR JOURNEY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagegrid;

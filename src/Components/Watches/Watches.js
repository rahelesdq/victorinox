import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Homepage/Secondgrid.css";

const Watches = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex mt-8 ml-8 hidden md:block  xl:space-x-2">
        <a className="  ml-4 " href="/">
          home
        </a>
        <span>|</span>
        <a className=" font-bold text-rose-700 ">watches</a>
      </div>
      <div className="xl:mt-9 xl:ml-28">
        <h1 className="xl:text-3xl font-bold sm:mt-[150px] ">
          Victorinox Watches
        </h1>
      </div>

      <div className="victorinox-text  flex 5  ">
        <div className="  xl:text-left mt-8 xl:ml-32 w-96 ">
          <span className=" xl:text-lg  ">
            ​​​​​​​125 years ago, Karl Elsener didn’t just invent the Swiss Army
            Knife – he invented an attitude. To this day, this attitude inspires
            every single one of our products – including our watches. Our
            timepieces are made right here in Switzerland and will inspire you
            to realize that time having fun is never wasted.
          </span>
          <br />
          <button
            onClick={() => {
              navigate("/Sportchrono");
            }}
            className="xl:mt-7 bg-rose-700 py-3 px-14 text-white xl:text-xl shadow"
          >
            view All Watches
          </button>
        </div>
        <div className=" ">
          <img
            className=" xl:ml-80  "
            src="https://imageengine.victorinox.com/medias/?context=bWFzdGVyfHJvb3R8MTI4MjY1fGltYWdlL2pwZWd8aGQxL2g3Zi8xMzYxMDU4OTcxNjUxMC92eC0xMjVzYWstY3Jvc3NjYXQtd2F0LTI0MTk1Ny1MXzUyNngzMDAuanBnfDNhNzMxMDEwZGU4NjhhMTYxNmRhZDAyZmIwZGUxOTdhYjYzZTI5ODE2NjhmZmFlZTMwYzZkYWI1MDEwYTYyMGM"
          ></img>
        </div>
      </div>
      <div className="xl:mt-28 text-center ">
        <span className="   xl:text-4xl">
          Which type of watch would you like to explore?
        </span>
      </div>
      <div className=" md:px-[10px] lg:px-[130px] md:grid  lg:grid-cols-3 sm:grid-cols-2 gap-3 lg:mt-[58px] sm:mt-[110px] mt-[140px]  ">
        <div className=" lg:col-span-2 sm:col-span-1">
          <div className="w-full h-full relative ">
            <img
              className="w-full h-full"
              src="https://imageengine.victorinox.com/medias/?context=bWFzdGVyfHRpbXwzNDM3NHxpbWFnZS9qcGVnfHRpbS9oYjQvaDI4Lzg4NjMyNTMzOTc1MzQuanBnfGFiYWRhOGY0MjVhYWNiODdlZDk1NzhjMTUyNDllMzMxMTNhNTZhOTFiNmI0YTVmMDYwNTI4M2E5M2QwNzYyYjE"
              alt=""
            />
            <div className="flex justify-center">
              <button className=" bg-rose-700 w-52  h-12 absolute md:bottom-7 m-5  text-white uppercase absolute  ">
                Men's Watches
              </button>
            </div>
          </div>
        </div>
        <div className="relative h-full imgbox ">
          <img
            className="w-full h-full"
            src="https://imageengine.victorinox.com/medias/?context=bWFzdGVyfHRpbXw0MTM4OXxpbWFnZS9qcGVnfHRpbS9oM2YvaDY2Lzg4NjMyNTc5NTIyODYuanBnfDZhYjQ0MjMxOGFlZTNiZmVkMzA0Y2ViZDhmMGQ0MTg3MGNhN2YwNjljNDM1YzdhZGEyMmE3NjMwOGZiMTAwMTk"
            alt=""
          />
          <div className="flex justify-center">
            <button className=" bg-rose-700 w-52 h-12  absolute md:bottom-7 m-5  text-white uppercase absolute  ">
              Mechanical Watches
            </button>
          </div>
        </div>

        <div className="col-span-1 ">
          <div className="w-full h-full relative imgbox">
            <img
              className="w-full h-full"
              src="https://imageengine.victorinox.com/medias/?context=bWFzdGVyfHRpbXwyNDIyN3xpbWFnZS9qcGVnfHRpbS9oYTUvaGRlLzg4NjExOTEwMTIzODIuanBnfDM1ZTVkMjVjNjU1NmE2ZTJiMDA0MzYxYzcwZWI5YzU1NDcwMjQxZDZhYTg0ZWZiZTRiZjQzZDNjMjQyZDg3OGY"
              alt=""
            />
            <div className="flex justify-center">
              <button className=" bg-rose-700 w-52 h-12  absolute md:bottom-7 m-5  text-white uppercase absolute  ">
                Pilot Watches
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 sm:col-span-1">
          <div className="w-full h-full relative imgbox">
            <img
              className="w-full h-full"
              src="https://imageengine.victorinox.com/medias/?context=bWFzdGVyfHRpbXwzNTE4M3xpbWFnZS9qcGVnfHRpbS9oNmIvaDczLzg4NjMyNTU3MjQwNjIuanBnfGVlMDE4YWQ0NjE1M2U0NGI5MGZmYmE1NTQ0NjliYzAxYmQzYjEzMmU2ZGM2MDAwZDVjOWI4ZjdmYzQzNWRlMmM"
              alt=""
            />
            <div className="flex justify-center">
              <button className=" bg-rose-700 w-52 h-12  absolute md:bottom-7 m-5  text-white uppercase absolute  ">
                Diving Watches
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 sm:hidden lg:block">
          <div className="w-full relative  mt-[5px] imgbox">
            <img
              className="w-full "
              src="https://imageengine.victorinox.com/medias/?context=bWFzdGVyfHRpbXwzNTIwM3xpbWFnZS9qcGVnfHRpbS9oMGUvaDhjLzg4NjMyNTY4MzgxNzQuanBnfGE2NjFhMWY4ODdlODAwNjI1NzA1OWE0NDFhNGU0M2YyNzg1NDJhMjU4YTIwZDAzYjJhOTBiNjU4YjA1OGI2M2Q"
              alt=""
            />
            <div className="flex justify-center">
              <button className=" bg-rose-700 w-52 h-12  absolute md:bottom-7 m-5  text-white uppercase absolute  ">
                Chronographs
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 ">
          <div className="w-full h-full relative imgbox">
            <img
              className="w-full h-full"
              src="https://imageengine.victorinox.com/medias/?context=bWFzdGVyfHRpbXwyNDUyNHxpbWFnZS9qcGVnfHRpbS9oZDgvaDcxLzg4NjExOTAyMjU5NTAuanBnfDRiZjBkOGJiZDAxZThlYjQ2NDlkOTdmN2Y0OTc4MDNiMmI2YTZlNDFlYWI2ZTI5ZDBkZTI4MTYzYmEzMDU2MTY"
              alt=""
            />
            <div className="flex justify-center">
              <button className=" bg-rose-700 w-52 h-12  absolute md:bottom-7 m-5  text-white uppercase absolute  ">
                Business Watches
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 ">
          <div className="w-full h-full relative imgbox">
            <img
              className="w-full h-full"
              src="https://imageengine.victorinox.com/medias/?context=bWFzdGVyfHRpbXwyNjczNnxpbWFnZS9qcGVnfHRpbS9oNmEvaDEwLzkzMTc2ODM0NjIxNzQuanBnfDNiYmZkYzk1MDc3OGRkNWFkYWJhYmYyZmU4OTdjNTQ1ZmMxZmJjZDA4N2NkOTgxNTEwNGJiNThjOWNjYjEwNmU"
              alt=""
            />
            <div className="flex justify-center">
              <button className=" bg-rose-700 w-52 h-12  absolute md:bottom-7 m-5  text-white uppercase absolute  ">
                Women's watches
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 sm:hidden lg:block">
          <div className="w-full relative  mt-[5px] imgbox">
            <img
              className="w-full "
              src="https://imageengine.victorinox.com/medias/?context=bWFzdGVyfHRpbXwzNDgwMnxpbWFnZS9qcGVnfHRpbS9oYmQvaDA0Lzg4NjIzMzg2MTMyNzguanBnfGQxMWExOWQ1ZDFkYjQyY2NjMzk4MzgzMmY2ZTE2ZjVlOTgxMmE5NTU2MmRiOWU3NGFmYjFkYTk2NGI0OGM5ODY"
              alt=""
            />
            <div className="flex justify-center">
              <button className=" bg-rose-700 w-52 h-12  absolute md:bottom-7 m-5  text-white uppercase absolute  ">
                Accessories
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watches;

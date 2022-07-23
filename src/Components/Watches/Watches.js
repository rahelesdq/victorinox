import React, { Component } from "react";

class Watches extends Component {
  render() {
    return (
      <div>
        <div className="flex mt-8 ml-8 hidden md:block  xl:space-x-2">
          <a className="  ml-4 " href="/">
            home
          </a>
          <span>|</span>
          <a className=" font-bold text-rose-700 ">watches</a>
        </div>
        <div className="xl:mt-9 xl:ml-28">
          <h1 className="xl:text-3xl font-bold ">Victorinox Watches</h1>
        </div>

        <div className="victorinox-text  flex 5  ">
          <div className="  xl:text-left mt-8 xl:ml-32 w-96 ">
            <span className=" xl:text-lg  ">
              ​​​​​​​125 years ago, Karl Elsener didn’t just invent the Swiss
              Army Knife – he invented an attitude. To this day, this attitude
              inspires every single one of our products – including our watches.
              Our timepieces are made right here in Switzerland and will inspire
              you to realize that time having fun is never wasted.
            </span>
            <br />
            <button className="xl:mt-7 bg-rose-700 py-3 px-14 text-white xl:text-xl shadow">
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
      </div>
    );
  }
}

export default Watches;

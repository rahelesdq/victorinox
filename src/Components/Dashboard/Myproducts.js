import React from "react";
import SidebarDashboard from "./SidebarDashboard";

const Myproducts = () => {
  return (
    <div>
      <section className="container flex justify-between">
        <div className="flex">
          <SidebarDashboard />
        </div>
        <div className="flex border-b border-black w-56  ">
          <button className=" bg-rose-700 h-12 w-52 mt-16 mr-10 text-white">
            ADD NEW PRODUCT
          </button>
        </div>
      </section>
    </div>
  );
};

export default Myproducts;

import React from "react";
import "./Toolbar.css";

const Toolbar = () => {
  return (
    <div>
      <div className=" bg-rose-700 w-screen h-11 container">
        <ul className="flex text-white text-sm space-x-4 ml-24 pt-3">
          <li>
            {" "}
            <a href="/global/en/New-Arrivals/cms/new-arrivals">New Arrivals</a>
          </li>
          <li>
            <a href="/global/en/Gift-Ideas/cms/gift-ideas">Gift Ideas</a>
          </li>
          <li>
            <a href="/global/en/Personalize-Your-Travel-Gear/cms/personalize-your-travel-gear">
              Personalize
            </a>
          </li>
        </ul>
        <ul className="flex ">
          <li className=" order-last">
            <img
              src="//assets.victorinox.com/_ui/static/media/icons/icon_global_white.svg?"
              className="bg-pink-700 w-3"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Toolbar;

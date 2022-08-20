import React from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';




const Florawatch = () => {
  return (
    <div>
      <div className="flex mt-8 ml-8 hidden md:block  xl:space-x-2">
        <a className="  ml-4 " href="/">
          home
        </a>
        <span>|</span>
        <a>Watches</a>
        <span>|</span>
        <a className=" font-bold text-rose-700 ">Flora watch</a>
      </div>
      <div className="flex">
        <div className="absolute xl:mt-16">
          <span className="xl:ml-[90px]  text-3xl font-bold">
            Flora Professional Diver Titanium Limited Edition
          </span>
        </div>
        <div>
            <img className="xl:ml-[200px] xl:mt-[180px] " src="https://imageengine.victorinox.com/mediahub/129530/420Wx368H/WAT_241919_S1.jpg" ></img>
        </div>
        <div className="absolute xl:mt-[45px]">
            <img className="w-[90px] xl:ml-[890px] xl:mt-[90px]" src="https://imageengine.victorinox.com/mediahub/77287/2000Wx1750H/WAT_241807_S1.jpg"></img>
            <img className="w-[90px] xl:ml-[960px] xl:mt-[-78px]" src="https://imageengine.victorinox.com/mediahub/77288/2000Wx1750H/WAT_241808_S1.jpg"></img>
            <img className="w-[90px] xl:ml-[1030px] xl:mt-[-78px]" src="https://imageengine.victorinox.com/mediahub/144946/2000Wx1750H/WAT_241954_S1.jpg"></img>
        </div>
        <div>
            <button className="xl:w-[490px] xl:h-[40px] bg-rose-700 text-white xl:mt-[300px] xl:ml-[245px]">
                find online
            </button>
        </div>
        <div> 
            <LocationOnOutlinedIcon className="xl:mt-[400px] w-[] xl:ml-[-390px] " />
        </div>

      </div>
    </div>
  );
};

export default Florawatch;

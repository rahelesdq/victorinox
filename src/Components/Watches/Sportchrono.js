import React from "react";
import Cardscomponent from "../home image slider/cardscomponent";


const Sportchrono = () => {

 

  return (

    <div>
      <div className="flex mt-8 ml-8 hidden md:block  xl:space-x-2">
        <a className="  ml-4 " href="/">
          home
        </a>
        <span>|</span>
        <a>Watches</a>
        <span>|</span>
        <a className=" font-bold text-rose-700 ">FieldForce Sport Chrono</a>
      </div>
      <div>
       <Cardscomponent  img1={"https://imageengine.victorinox.com/mediahub/129530/420Wx368H/WAT_241919_S1.jpg"} 
       btn={"info"}
       />

      </div>

    </div>
  );
};

export default Sportchrono;

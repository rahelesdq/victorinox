import React, { Component } from "react";
import Cards from "./cards";

class ImageSlider extends Component {

  render() {
    
    return (
      <div>
        <p className="text-center xl:text-4xl font-semibold xl:m-12 xl:p-5 md:text-5xl">
          Our Best Sellers
        </p>
        <Cards />
      </div>
    );
  }
}

export default ImageSlider;

import React, { Component } from "react";
import "./cards.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Carosel from "carousel-react-rcdev";

class Cards extends Component {
  render() {
    return (
        <div className="body flex xl:space-x-3 sm:space-x-4 font-bold overflow-x-auto">
          <div className="card1 -300 xl:border-2">
            <div className="card-image	">
              <img
                className="imageCard  xl:w-72"
                src="https://imageengine.victorinox.com/mediahub/129530/420Wx368H/WAT_241919_S1.jpg"
              />

              <div className="hide-info hidden 	">
                <button className=" duration-300 w-full bg-rose-700 hover:bg-gray-900 text-white font-bold py-2 px-4 border  ">
                  Add to cart
                </button>
                <br />
                <div className="rangbandi-image flex ">
                  <img
                    className="xl:w-16 cursor-pointer"
                    src="https://imageengine.victorinox.com/mediahub/129524/420Wx368H/WAT_241918_S1.jpg"
                  ></img>
                  <img
                    className="white-watch  xl:w-16 cursor-pointer"
                    src="https://imageengine.victorinox.com/mediahub/129542/420Wx368H/WAT_241921_S1.jpg"
                  />
                </div>
                {/* rangbandi */}
              </div>
            </div>
            <div className="info1 	">
              <span>Flora bag</span>
              <br />
              <span>$43.22</span>
              <br />
              <span>black</span>
            </div>
          </div>

          <div className="card4 -300 xl:border-2	">
            <div className="card-image4	">
              <img
                className="imageCard  xl:w-72"
                src="https://imageengine.victorinox.com/mediahub/32966/420Wx368H/SAK_0_6226_T__S1.jpg"
              />

              <div className="hide-info4 hidden 	">
                <button className=" duration-300 w-full bg-rose-700 hover:bg-gray-900 text-white font-bold py-2 px-4 border  ">
                  Add to cart
                </button>
                <br />

                {/* rangbandi */}
              </div>
            </div>
            <div className="info1 	">
              <span>signature lite</span>
              <br />
              <span>$39.99</span>
              <br />
              <span>red</span>
            </div>
          </div>

          <div className="card2 xl:border-2 	">
            <div className="card-image2 	">
              <img
                className="imageCard xl:w-72"
                src="https://imageengine.victorinox.com/mediahub/31254/420Wx368H/CUT_6_7143_5__S1.jpg"
              />

              <div className="hide-info2 hidden 	">
                <button className=" duration-300 w-full bg-rose-700 hover:bg-gray-900 text-white font-bold py-2 px-4 border  ">
                  Add to cart
                </button>
                {/* rangbandi */}
              </div>
            </div>
            <div className="info2 	">
              <span>Flora Knife</span>
              <br />
              <span>$49.22</span>
              <br />
              <span>red</span>
            </div>
          </div>
          <div className="card2 xl:border-2 	">
            <div className="card-image5 	">

              <img
                className="imageCard xl:w-72"
                src="https://imageengine.victorinox.com/mediahub/137636/420Wx368H/WAT_241927-1_S1.jpg"
              />

              <div className="hide-info5 hidden 	">
                <button className=" duration-300 w-full bg-rose-700 hover:bg-gray-900 text-white font-bold py-2 px-4 border  ">
                  Add to cart
                </button>
                {/* rangbandi */}
              </div>
            </div>
            <div className="info2 	">
              <span>I.N.O.X. Carbon Limited Edition</span>
              <br />
              <span>$1,175.00</span>
              <br />
              <span>green</span>
            </div>
          </div>
          <div className="card3 xl:border-2	">
            <div className="card-image3 	">
              <img
                className="imageCard xl:w-72"
                src="https://imageengine.victorinox.com/mediahub/31912/420Wx368H/CUT_7_7400_20G__S1.jpg"
              />

              <div className="hide-info3 hidden 	">
                <button className=" duration-300 w-full bg-rose-700 hover:bg-gray-900 text-white font-bold py-2 px-4 border  ">
                  Add to cart
                </button>
                {/* rangbandi */}
              </div>
            </div>
            <div className="info3 	">
              <span>Flora Knife</span>
              <br />
              <span>$30</span>
              <br />
              <span>gray</span>
            </div>
          </div>

          <div className="card6 xl:border-2	">
            <div className="card-image6 	">
              <img
                className="imageCard xl:w-72"
                src="https://imageengine.victorinox.com/mediahub/34170/420Wx368H/SAK_3_9050_22__S1.jpg"
              />


              <div className="hide-info6 hidden 	">
                <button className=" duration-300 w-full bg-rose-700 hover:bg-gray-900 text-white font-bold py-2 px-4 border  ">
                  Add to cart 
                </button>
                {/* rangbandi */}
              </div>
              
            </div>
            <div className="info6 	">
              <span>Flora Knife</span>
              <br />
              <span>$15</span>
              <br />
              <span>purple</span>
            </div>
          </div>

          <div className="card9 xl:border-2	">
            <div className="card-image9 	">
              <img
                className="imageCard9 xl:w-72"
                src="https://imageengine.victorinox.com/mediahub/34170/420Wx368H/SAK_3_9050_22__S1.jpg"
              />

              <div className="hide-info9 hidden 	">
                <button className=" duration-300 w-full bg-rose-700 hover:bg-gray-900 text-white font-bold py-2 px-4 border  ">
                  Add to cart
                </button>
                {/* rangbandi */}
              </div>
            </div>
            <div className="info9 	">
              <span>Flora Knife</span>
              <br />
              <span>$15</span>
              <br />
              <span>purple</span>
            </div>
          </div>
        </div>
    );
  }
}

export default Cards;

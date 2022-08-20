import { useNavigate } from "react-router-dom";




const Cardscomponent = ({ img1, btn }) => {
    const navigate=useNavigate();
    
  return (
    <>
    <div className="flex p-[45px] ml-[50px] space-x-8">

   
      <div className="card1 -300 xl:border-2 ">
        <div className="card-image 	">
          <img alt="img1" className="imageCard  xl:w-72 " src={img1} />

          <div className="hide-info hidden animate-pulse sm:hidden  ">
            <button 
            onClick={()=>{
                navigate("/Florawatch");
            }}
            className=" duration-300 w-full bg-rose-700 hover:bg-gray-900 text-white font-bold py-2 px-4 border  ">
              {btn}
            </button>
            <br />
            <div className="rangbandi-image flex ">
              <img
                alt="img7"
                className="xl:w-16 cursor-pointer"
                src="https://imageengine.victorinox.com/mediahub/129524/420Wx368H/WAT_241918_S1.jpg"
              ></img>
              <img
                alt="img2"
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
        <div className="card-image">
          <img
            alt="img3"
            className="imageCard  xl:w-72"
            src="https://imageengine.victorinox.com/mediahub/32966/420Wx368H/SAK_0_6226_T__S1.jpg"
          />

          <div className="hide-info hidden 	">
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
            <div className="card-image 	">
              <img
                alt="img4"
                className="imageCard xl:w-72"
                src="https://imageengine.victorinox.com/mediahub/31254/420Wx368H/CUT_6_7143_5__S1.jpg"
              />

              <div className="hide-info hidden 	">
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
            <div className="card-image	">
              <img
                alt="img6"
                className="imageCard xl:w-72"
                src="https://imageengine.victorinox.com/mediahub/137636/420Wx368H/WAT_241927-1_S1.jpg"
              />

              <div className="hide-info hidden 	">
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
      </div>


        
    </>
  );
};
export default Cardscomponent;

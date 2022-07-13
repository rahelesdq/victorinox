import "./App.css";
import Nife from "./image/download.web1.webp";
import newe from "./image/download.3.jpg";
import flow from "./image/download.webp";
import image from "./image/download.3.webp";
import watch from "./image/download.4.webp";
function App() {
  return (
    <div>
      <div className=" grid  grid-cols-1 ">
        <img className="col-start-1 col-end-4 row-start-1 row-end-3  m-auto" src={Nife} alt="" />
        <img className="col-start-1 col-start: 1; " src={newe} alt="" />
        <img className="" src={flow} alt="" />
        <img className="" src={image} alt="" />
        <img className="" src={watch} alt="" />
      </div>
    </div>
  );
}

export default App;

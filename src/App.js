import "./App.css";
import Imagegrid from "./Components/Homepage/Imagegrid";
import ImageSlider from "./Components/home image slider/imageSlider";
import Hello from "./Components/Homepage/Hello";
import Secondgrid from "./Components/Homepage/Secondgrid";

function App() {
  return (
    <div>
      <Imagegrid />
      <ImageSlider />
      <Hello />
      <Secondgrid />
    </div>
  );
}

export default App;

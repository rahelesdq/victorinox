import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weblayout from "./Components/Weblayout/Weblayout";
import App from "./App";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Armyknives from "./Components/Armyknives/Armyknives";
import Cutlery from "./Components/Cutlery/Cutlery";
import Watches from "./Components/Watches/Watches";
import Travelgear from "./Components/Travelgear/Travelgear";
import Fragrances from "./Components/Fragrances/Fragrances";
import Dashboard from "./Components/Dashboard/Dashboard";
import Myprofile from "./Components/Dashboard/Myprofile";
import Myproducts from "./Components/Dashboard/Myproducts";
import Myreviews from "./Components/Dashboard/Myreviews";
import Sportchrono from "./Components/Watches/Sportchrono";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./Components/Redux/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Editprofile from "./Components/Dashboard/Editprofile";
import Florawatch from "./Components/Watches/florawatch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Weblayout />}>
            <Route path="/" element={<App />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="Armyknives" element={<Armyknives />} />
            <Route path="Cutlery" element={<Cutlery />} />
            <Route path="Watches" element={<Watches />} />
            <Route path="Sportchrono" element={<Sportchrono />} />
            <Route path="Travelgear" element={<Travelgear />} />
            <Route path="Fragrances" element={<Fragrances />} />
            <Route path="florawatch" element={<Florawatch />} />

            <Route path="Dashboard" element={<Dashboard />}>
            

            </Route>

            <Route path="/Dashboard/Myprofile" element={<Myprofile />} />
            <Route path="/Dashboard/Editprofile" element={<Editprofile />} />
            <Route path="/Dashboard/Myproducts" element={<Myproducts />} />
            <Route path="/Dashboard/Myreviews" element={<Myreviews />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

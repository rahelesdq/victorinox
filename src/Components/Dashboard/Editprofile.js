import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import SidebarDashboard from "./SidebarDashboard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { addForm } from "./Profileslice";
import { useDispatch } from "react-redux";

const Editprofile = () => {
  const dispatch = useDispatch();

  const [firstname, SetFirstname] = useState("");
  const [Surname, SetSurname] = useState("");
  const [Nickname, SetNickname] = useState("");
  const [title, SetTitle] = useState();
  const [country, setCountry] = useState("choose");
  const [language, SetLanguage] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [submit, SetSubmit] = useState();

  const change = () => {
    dispatch(
      addForm({
        FirstName: "Marzieh",
        Surname: "Saadati",
        Nickname: "Mari",
        Country: "Iran",
        Language: "English",
        Birthday: "1995/7/11",
      })
    );
  };

  return (
    <div className=" flex">
      <div className="block">
        <div className=" flex  h-16  mt-8 ml-8 hidden md:block  xl:space-x-2">
          <a className="  ml-4 " href="/">
            home
          </a>
          <span>|</span>
          <Link to="/Dashboard">My Victorinox</Link>
          <span>|</span>
          <Link
            to="/Dashboard/Editprofile"
            className=" font-bold text-rose-700 "
          >
            Edit profile
          </Link>
        </div>
        <SidebarDashboard />
      </div>
      <div className=" mt-[100px]  mb-[300px]  mr-[50px]  ">
        <span className="text-3xl  ">My Account</span>
        <div
          className="flex  text-2xl mt-[100px]"
          onChange={(e) => SetTitle(e.target.value)}
        >
          {console.log(title, "lalala")}
          <span className="">title*</span>
          <input
            id="bordered-radio-1"
            type="radio"
            value="Mr"
            name="bordered-radio"
            class="   w-7 xl:ml-[400px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
          <labe>Mr</labe>
          <input
            id="bordered-radio-1"
            type="radio"
            value="Ms./Mrs."
            name="bordered-radio"
            class="   w-7 xl:ml-[450px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
          <labe>Ms./Mrs.</labe>
        </div>
        <div className="flex  text-xl mt-[50px]">
          <span>FirstName*</span>
          <input
            value={firstname}
            onChange={(e) => SetFirstname(e.target.value)}
            class="sm:w-full border-gray-400 border-2 ml-[290px] pl-2 h-[40px]	"
            type="text"
          ></input>
        </div>
        <div className="flex  text-xl mt-[50px]">
          <span>Surname*</span>
          <input
            value={Surname}
            onChange={(e) => SetSurname(e.target.value)}
            class="sm:w-full border-gray-400 border-2 ml-[295px] pl-2 h-[40px]	"
            type="text"
          ></input>
        </div>
        <div className="flex  text-2xl mt-[50px]">
          <span>Nickname*</span>
          <input
            value={Nickname}
            onChange={(e) => SetNickname(e.target.value)}
            class="sm:w-full border-gray-400 border-2 ml-[300px] pl-2 h-[40px]		"
            type="text"
          ></input>
        </div>
        <div className="flex  text-2xl mt-[50px]">
          <span>Country/Region*</span>
          <select
            id="country"
            name="country"
            autocomplete="country"
            class="ml-[277px]  w-[253px]  px-3  bg-white border-b-2 border-black  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="choose">choose country</option>
            <option value="iran">Iran</option>
            <option value="United States">United States</option>
            <option value="Canda">Canada</option>
            <option value="mexico">Mexico</option>
          </select>
          {console.log(country)}
        </div>
        {console.log(language, "*")}

        <div
          className="flex  text-2xl mt-[50px]"
          onChange={(e) => SetLanguage(e.target.value)}
        >
          <span>Language*</span>
          <input
            id="bordered-radio-1"
            type="radio"
            value="english"
            name="bordered-radio"
            class="w-7 ml-[200px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
          <labe>English</labe>
          <input
            id="bordered-radio-1"
            type="radio"
            value="french"
            name="bordered-radio"
            class="w-7 ml-[20px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
          <labe>French</labe>
          <input
            id="bordered-radio-1"
            type="radio"
            value="italian"
            name="bordered-radio"
            class="w-7 ml-[40px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
          <labe>Italian</labe>
          <input
            id="bordered-radio-1"
            type="radio"
            value="spanish"
            name="bordered-radio"
            class="w-7 ml-[20px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
          <labe>Spanish</labe>
        </div>
        <div className="flex  text-2xl mt-[50px]">
          <span>Birthday</span>
          <DatePicker
            className="ml-60 border-2"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          {console.log(startDate, "tabalod")}
        </div>
        <div className="flex  text-2xl mt-[50px]">
          <button
            onClick={change}
            className="border-2 border-black w-[230px] h-[50px]"
          >
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editprofile;

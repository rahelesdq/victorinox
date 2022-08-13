import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import SidebarDashboard from "./SidebarDashboard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { addForm } from "./Profileslice";
import { useDispatch, useSelector } from "react-redux";

const Editprofile = () => {
  const x = useSelector((state) => state);
  console.log(x);

  const dispatch = useDispatch();
  const [firstname, SetFirstname] = useState("");
  const [Surname, SetSurname] = useState("");
  const [Nickname, SetNickname] = useState("");
  const [title, SetTitle] = useState();
  const [country, setCountry] = useState("choose");
  const [language, SetLanguage] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [Form, SetForm] = useState();

  const change = () => {
    dispatch(
      addForm({
        firstname,
        Surname,
        Nickname,
        country,
        language,
        startDate: startDate.toISOString(),
      })
    );
  };

  return (
    <div className=" flex">
      <div className="block">
        <div className=" h-16  mt-8 ml-8 lg:block  xl:space-x-2">
          <a className="  ml-4 " href="/">
            home
          </a>
          <span>|</span>
          <Link to="/Dashboard" className="   ">
            My Victorinox
          </Link>
          <span>|</span>
          <Link
            to="/Dashboard/Editprofile"
            className=" font-bold text-rose-700 "
          >
            Edit profile
          </Link>
        </div>
        <div className="sm: hidden hidden lg:block">
          <div class="w-[300px] ml-[20px] mt-[30px] bg-white px-1 ">
            <ul class="relative">
              <li class="relative">
                <Link
                  to="/Dashboard"
                  class="text-2xl flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  My Victorinox
                </Link>
              </li>
              <li class="relative ">
                <Link
                  to="/Dashboard/Editprofile"
                  class="text-1xl flex items-center text-sm py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  Edit Profile
                </Link>
              </li>
              <li class="relative">
                <Link
                  to="/Dashboard/Myprofile"
                  class="text-1xl flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  My profile
                </Link>
                <li class="relative">
                  <a class="text-1xl flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                    My Review
                  </a>
                </li>
                <li class="relative">
                  <a class="text-1xl flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                    My Product
                  </a>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" mt-[100px]  mb-[300px]  mr-[50px] sm:ml-[20px] ml-[20px] ">
        <span className="text-3xl  ">My Account</span>
        <div
          className="lg:flex sm:block block  text-2xl mt-[100px]"
          onChange={(e) => SetTitle(e.target.value)}
        >
          {console.log(title, "lalala")}
          <span className="cursor-pointer sm:block lg:flex block">title*</span>
          <div className="sm:pt-7 lg:pt-[0px]">
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
        </div>
        <div className="text-xl lg:flex sm:block block mt-[50px]">
          <span>FirstName*</span>
          <input
            value={firstname}
            onChange={(e) => SetFirstname(e.target.value)}
            class="sm:w-full border-gray-400 border-2 lg:ml-[290px] pl-2 h-[40px]	"
            type="text"
          ></input>
          {console.log(firstname)}
        </div>
        <div className=" lg:flex sm:block block  text-xl mt-[50px]">
          <span>Surname*</span>
          <input
            value={Surname}
            onChange={(e) => SetSurname(e.target.value)}
            class="sm:w-full border-gray-400 border-2 lg:ml-[295px] pl-2 h-[40px]	"
            type="text"
          ></input>
          {console.log(Surname)}
        </div>
        <div className=" lg:flex sm:block block text-2xl mt-[50px]">
          <span>Nickname*</span>
          <input
            value={Nickname}
            onChange={(e) => SetNickname(e.target.value)}
            class="sm:w-full border-gray-400 border-2 lg:ml-[267px] pl-2 h-[40px]		"
            type="text"
          ></input>
          {console.log(Nickname)}
        </div>
        <div className=" lg:flex sm:block block  text-2xl mt-[50px]">
          <span>Country/Region*</span>
          <div className="lg:ml-[247px]  w-[253px] ">
            <select
              id="country"
              name="country"
              autocomplete="country"
              class="lg:ml-[100px]  w-[253px]  px-3  bg-white border-b-2 border-black  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="choose">choose country</option>
              <option value="iran">Iran</option>
              <option value="United States">United States</option>
              <option value="Canda">Canada</option>
              <option value="mexico">Mexico</option>
            </select>
          </div>
          {console.log(country)}
        </div>
        {console.log(language, "*")}

        <div
          className="lg:flex sm:block block  text-2xl mt-[50px]"
          onChange={(e) => SetLanguage(e.target.value)}
        >
          <span>Language*</span>
          <div className="lg:ml-24 sm:block lg:flex block sm:mt-3 lg:[0px] ">
            <input
              id="bordered-radio-1"
              type="radio"
              value="english"
              name="bordered-radio"
              class="w-7 lg:ml-[200px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
        </div>
        <div className="sm:block lg:flex block  text-2xl mt-[50px]">
          <span>Birthday</span>
          <DatePicker
            className="lg:ml-[295px] border-2"
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

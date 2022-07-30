import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Myprofile = () => {
  const [firstname, SetFirstname] = useState("");
  const [Surname, SetSurname] = useState("");
  const [title, SetTitle] = useState();
  const [country, setCountry] = useState("choose");
  const [language, SetLanguage] = useState();
  const [password, SetPassword] = useState();
  const [Confirmpass, SetConfirmpass] = useState();
  const [email, SetEmail] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [submit, SetSubmit] = useState();
  if (Confirmpass === !password) {
    return <div>Password and password confirmation do not match </div>;
  }

  return (
    <div className="flex">
      {/* <div className="w-16"></div> */}
      <div className="mt-[100px]  mb-[300px] w-full mx-28">
        <div
          className="flex  text-xl mt-[100px]"
          onChange={(e) => SetTitle(e.target.value)}
        >
          {console.log(title, "lalala")}
          <span className="cursor-pointer">title*</span>
          <input
            id="bordered-radio-1"
            type="radio"
            value="Mr"
            name="bordered-radio"
            class=" w-7 xl:ml-[350px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
        <div className="flex  text-xl mt-[35px]">
          <span className="cursor-pointer">FirstName*</span>
          <input
            value={firstname}
            onChange={(e) => SetFirstname(e.target.value)}
            class="sm:w-full border-gray-400 border-2 ml-[286px] pl-2 h-[40px]	"
            type="text"
          ></input>
        </div>
        <div className="flex  text-xl mt-[35px]">
          <span className="cursor-pointer">Surname*</span>
          <input
            value={Surname}
            onChange={(e) => SetSurname(e.target.value)}
            class="sm:w-full border-gray-400 border-2 ml-[295px] pl-2 h-[40px]	"
            type="text"
          ></input>
        </div>

        <div className="flex  text-xl mt-[35px]">
          <span className="cursor-pointer">Country/Region*</span>
          <select
            id="country"
            name="country"
            autocomplete="country"
            class="ml-[247px]  w-[253px]  px-3  bg-white border-b-2 border-black  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
          className="flex  text-xl mt-[35px]"
          onChange={(e) => SetLanguage(e.target.value)}
        >
          <span className="cursor-pointer">Language*</span>
          <div className="ml-24">
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
        </div>
        <div className="flex  text-xl mt-[35px]">
          <span className="cursor-pointer">Email*</span>
          <input
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            class="sm:w-full border-gray-400 border-2 ml-[325px] pl-2 h-[40px]	"
            type="Email"
          ></input>
        </div>
        <div className="flex  text-xl mt-[35px]">
          <span className="cursor-pointer">Birthday</span>
          <DatePicker
            className="ml-[315px] border-2"
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
          />
          {console.log(startDate, "tabalod")}
        </div>
        <div className="flex  text-xl mt-[35px]">
          <span className="cursor-pointer w-[280px]">Desired password*</span>
          <input
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            class="sm:w-full border-gray-400 border-2 ml-[185px] pl-2 h-[40px]	"
            type="password"
          ></input>
        </div>
        <div className="flex  text-xl mt-[35px]">
          <span className="cursor-pointer w-[280px]">Confirm password*</span>
          <input
            value={Confirmpass}
            onChange={(e) => SetConfirmpass(e.target.value)}
            class="sm:w-full border-gray-400 border-2 ml-[185px] pl-2 h-[40px]	"
            type="password"
          ></input>
        </div>
        <div className="flex mt-9">
          <input
            id="bordered-radio-1"
            type="checkbox"
            value=""
            name="bordered-radio"
            class=" mr-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
          <div>
            <span>
              Yes, I would like to receive the Victorinox Newsletter and get
              information about new products, services and events.
            </span>
          </div>
        </div>
        <div className="flex mt-7">
          <input
            id="bordered-radio-1"
            type="checkbox"
            value=""
            name="bordered-radio"
            class=" mr-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
          <div>
            <span>
              Yes, I agree to the Victorinox Terms & Conditions. For information
              on data protection, refer to our Privacy Policy .
            </span>
          </div>
        </div>
        <div className="flex  text-xl mt-[35px]">
          <button className=" w-[230px] h-[50px] bg-rose-700 text-white">
            CREATE ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;

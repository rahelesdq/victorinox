import React from "react";
import SidebarDashboard from "./SidebarDashboard";
import { Link } from "react-router-dom";


const Editprofile = () => {
  return (
    <div className="flex">
      <div className="flex mt-8 ml-8 hidden md:block  xl:space-x-2 h-[25px] w-[270px] ">
        <a className="  ml-4 " href="/">
          home
        </a>
        <span>|</span>
        <Link to="/Dashboard" className="">
          MyVictorinox
        </Link>
        <span>|</span>
        <a className=" font-bold ">EditProfile</a>
      </div>
      <SidebarDashboard />
   
      <div className="mt-[150px]  mb-[300px]  mr-[50px]  ">
        <span className="text-3xl  ">My Account</span>
        <div className="flex  text-2xl mt-[100px]   ">
          <span className="">title*</span>
          <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="   w-7 xl:ml-[400px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
          <labe>Mr</labe>
          <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="   w-7 xl:ml-[450px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
          <labe>Ms./Mrs.</labe>
        </div>
        <div className="flex  text-2xl mt-[50px]">
          <span>FirstName*</span>
          <input class="sm:w-full border-gray-400 border-2 ml-[325px] pl-2 h-[40px]	"   type="text" ></input>
        </div>
        <div className="flex  text-2xl mt-[50px]">
        <span>Surname*</span>
          <input class="sm:w-full border-gray-400 border-2 ml-[295px] pl-2 h-[40px]	"  type="text" ></input>
        
        </div>
        <div className="flex  text-2xl mt-[50px]">
        <span>Nickname*</span>
          <input class="sm:w-full border-gray-400 border-2 ml-[287px] pl-2 h-[40px]		"  type="text" ></input>
        </div>
        <div className="flex  text-2xl mt-[50px]">
          <span>Country/Region*</span>
          <select id="country" name="country" autocomplete="country" class="ml-[277px]  w-[253px]  px-3  bg-white border-b-2 border-black  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Iran</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
        </div>
        <div className="flex  text-2xl mt-[50px]">
          <span>Language*</span>
          <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-7 ml-[200px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
          <labe>English</labe>
          <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-7 ml-[20px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
          <labe>French</labe>
          <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-7 ml-[40px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
          <labe>Italian</labe>
          <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-7 ml-[20px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
          <labe>Spanish</labe>
        </div>
        <div className="flex  text-2xl mt-[50px]">
          <span>Birthday</span>
          <select id="month" name="month"  class="ml-[127px]  w-[100px]  px-3  bg-white border-b-2 border-black  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
           <select id="day" name="day"  class=" w-[100px]  px-3  bg-white border-b-2 border-black  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
           <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                </select>
           <select id="year" name="year"  class="  w-[150px]  px-3  bg-white border-b-2 border-black  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>1980-1990</option>
                  <option>1990-2000</option>
                  <option>2000-2010</option>
                  <option>2010-2020</option>
                </select>     

        </div>
        <div className="flex  text-2xl mt-[50px]">

        <button className="border-2 border-black w-[230px] h-[50px]" >Change</button>
        </div>
      </div>
    </div>
  );
};

export default Editprofile;

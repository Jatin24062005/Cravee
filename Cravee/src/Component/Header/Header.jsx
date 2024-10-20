import React, { useState } from "react";
import logo from "./logo2.png";
import gif from "./Spin ramen spin!.gif";
import { useSign, useDropdown2 } from "../../App";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

export default function Header({ location }) {
  const { sign_up, setsign } = useSign();
  const { dropdown, setdropdown } = useDropdown2();
  const [search, setSearch] = useState('');

  const useDropdown = () => {
    console.log(dropdown);
    setdropdown(!dropdown);
  };

  return (
    <div className=" flex-col">
    <div className="relative flex w-full rounded-md bg-white h-28 mb-2 content-center shadow-lg">
      <img className="bg-contain bg-center w-fit h-25 px-2" src={logo} alt="Logo" />
      <form className="flex items-center justify-center shadow-lg w-fit h-14 content-center m-7 mr-0">
        <i className="fa-solid fa-location-dot w-12 items-center content-center h-14 pl-4 bg-white rounded-l-md text-red-500 p-1"></i>
        <input
          className="w-fit h-14 text-sm pl-12 p-4 rounded-r-md text-gray-400 border hover:border-pink-500 focus:outline-none focus:ring-1 focus:border-transparent"
          type="text"
          placeholder={location}
          onClick={useDropdown}
        />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="text-red-500"
          style={{ fill: 'red', width: '24px', height: '24px' }}
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg> */}
      </form>
      <form className="flex items-center justify-center shadow-lg w-fit h-14 content-center m-7 ml-0">
        <i className="dot items-center content-center h-14 bg-white rounded-l-md text-gray-400 p-1">|</i>
        <input
          className="w-96 h-14 text-sm pl-12 p-4 rounded-md text-gray-400 border hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          type="text"
          value={search}
          placeholder="Search for restaurant, cuisine and dish"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="h-14 content-center items-center w-48">
        <img className="h-16 mt-7 w-fit bg-contain" src={gif} alt="Loading" />
      </div>
      
      <Link to="/Cart" className="w-10 h-14 mt-7 fill-red-400 mr-7 hover:fill-blue-500">
      <svg 
      className="mt-4"
      xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 576 512">
        <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
      </svg>
    </Link>

      
      <div className="content-center flex items-center space-x-4">
        <Link to="/login">
        <button className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Login
        </button>
        </Link>
        <button
          className="bg-green-500 text-white rounded-md py-2 px-4 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => setsign(true)}
        >
          Signup
        </button>
      </div>
    </div>
    <Home/>
    </div>
  );
}

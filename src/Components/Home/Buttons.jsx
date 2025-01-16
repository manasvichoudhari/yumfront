import React from "react";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="flex  mt-6  space-x-5 lg:space-y-0 ">
    <Link to="/Projects">
      <button className="px-5 py-2 font-bold text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300">
        View my work
      </button>
      
    
      </Link>
      <Link to="/contacts">
      <button className="px-5 py-2 font-bold text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300">
      Contact me
    </button>
      </Link>

   
  </div>
  );
};

export default Buttons;

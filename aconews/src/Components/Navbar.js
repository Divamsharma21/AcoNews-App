import React from "react";
import Card from "./Card";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-16 bg-gray-900 text-white">
      <div className="flex items-center font-extrabold to-blue-600 ml-4">
        <h1>AcoNews</h1>
      </div>
      <div className="flex items-center">
        <input
          type="search"
          placeholder="Search news..."
          className="bg-gray-200 py-2 px-4 rounded-md mr-4"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md  mr-10"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { filter } from "../components/data";

export default function Search() {
  const [clickedIndex, setClickedIndex] = useState(null);

  return (
    <div className="relative w-full px-6 ">
      <input
        type="search"
        placeholder="Search for an activity"
        className="w-1/5 p-2 pl-10  border-1 border-gray-600 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none"
      />
      <FaSearch className="absolute left-9 top-1/2 transform -translate-y-1/2 text-gray-500" />
      {filter.map((item, index) => (
        <button
          key={index}
          onClick={() => setClickedIndex(index)}
          className={`${
            clickedIndex === index
              ? "bg-yellow-500 text-white border-yellow-500"
              : ""
          } border-black border-1 px-10 py-[7.5px] ml-10`}>
          {item.name}
        </button>
      ))}
    </div>
  );
}

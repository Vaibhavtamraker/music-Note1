import React from "react";
import { FaPlus } from "react-icons/fa"
const Home = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center bg-gray-100">
      <div className="min-h-screen p-6 w-[700px] mt-36">
        <div className=" flex flex-row justify-between mb-6">
          <p className="text-[32px]  text-black">Notes</p>
          <button className="bg-blue-500 h-6 w-32 p-8 rounded-xl flex flex-row justify-between text-white text-[20px]"><FaPlus/>New</button>
          
           
        </div>

        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Event Name
            </div>
            <p class="block mt-1 text-lg leading-tight font-medium text-black">
              Event Date
            </p>
            <p class="mt-2 text-gray-500">Event Description</p>
            <p class="mt-2 text-gray-500">Event Details...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

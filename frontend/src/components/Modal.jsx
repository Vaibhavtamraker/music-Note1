import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const Modal = () => {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="flex flex-row justify-between m-12">
        <FaArrowLeft />
        <button className="w-[93px] bg-blue-300 h-[38px] rounded-[8px]">
          Save
        </button>
      </div>
      <div className="bg-white w-1/2 min-h-screen md:mx-60 mx-8 ">
        <input
          type="text"
          className="text-md w-full bg-transparent text-gray-300 leading-none focus:outline-none mx-4 my-2"
          placeholder="title"
        />
        <div className="w-full mx-4">
          <textarea
            className="text-md w-full bg-transparent text-gray-300 leading-tight focus:outline-none"
            rows="10"
            placeholder="start typing...."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Modal;

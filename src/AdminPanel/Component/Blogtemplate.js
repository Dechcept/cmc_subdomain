import React from "react";
import { CiEdit } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
const Blogtemplate = () => {
  return (
    <div>
      <div className="flex  text-lg   p-2  py-5 bg-white ">
        <div className=" w-[20%]">
          <ul className="flex justify-between gap-10">
            <li className="font-medium">1</li>
            <li className="w-[60%]">23/10/2023</li>
          </ul>
        </div>
        <ul className="flex justify-between  w-[80%]">
          <li>Test</li>
          <li>Test</li>
          <li> Dechcept</li>
          <li className="flex gap-2">
            <div className="bg-blue-600 h-fit p-1 rounded-lg">
              <CiEdit className="text-white" />
            </div>
            <div className="bg-blue-600 h-fit p-1 rounded-lg">
              <IoMdEye className="text-white" />
            </div>
            <div className="bg-red-600 h-fit p-1 rounded-lg">
              <AiFillDelete className="text-white" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blogtemplate;

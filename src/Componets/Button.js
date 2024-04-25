import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const Button = ({ BtnName }) => {
  return (
    <div className="bg-black px-6 max-sm:px-3 py-3 max-sm:py-2 flex flex-col items-center w-fit   h-fit">
      <button className="flex gap-2 items-center justify-center" type="submit">
        <h1 className="text-white font-sans para max-sm:text-base ">{BtnName}</h1>
        <AiOutlineRight className="text-white text-xl" />
      </button>
    </div>
  );
};

export default Button;

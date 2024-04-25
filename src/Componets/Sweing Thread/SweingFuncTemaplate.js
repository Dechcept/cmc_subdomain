import React from "react";

const SweingFuncTemaplate = ({ title, point1, point2, point3 }) => {
  return (
    <div className="w-[600px] max-xl:w-full">
      <div>
        <h1 className="list w-[560px] text-[22px] max-xl:w-full border-b-[3px] pb-3 border-[#D9D9D9]">
          {" "}
          {title}
        </h1>
        <ul className="list-disc px-3 my-4  ">
          <li className="para ">{point1}</li>
          <li className="para">{point2}</li>
          <li className="para">{point3}</li>
        </ul>
      </div>
    </div>
  );
};

export default SweingFuncTemaplate;

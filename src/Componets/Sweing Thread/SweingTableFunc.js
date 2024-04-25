import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Sweingtable from "./Sweingtable";
import SweingTable2 from "./SweingTable2";

const SweingTableFunc = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div>
      <div className="bg-[#F4F3F3] h-fit   p-20 max-lg:p-3 flex flex-col gap-10 py-10">
      <h1 className="para text-center text-[30px] max-sm:text-[20px] tracking-[2px] font-semibold list-none">
                {" "}
                Product List
              </h1>
      <Sweingtable />
      <SweingTable2 />
        <h1 className="text text-center max-xl:text-[60px] max-lg:text-[40px] max-sm:text-[32px]">
          Sewing Melt Thread
        </h1>
        {/* <div className="flex justify-center " > */}
        <div className="flex max-lg:flex-col justify-start gap-10 w-[1140px] max-xl:w-full m-auto">
            {" "}
            <div className=" max-sm:flex hidden  border-[#4D4D4D] text-[#4D4D4D]  mb-3 pb-1 shadow1 p-2   justify-center items-center gap-3  ">
              <h1 className="para max-sm:text-[20px] tracking-[2px] font-semibold list-none">
                {" "}
                Polyester Sewing Melt Thread(IBP)
              </h1>
              <div
                className="border-[3px] border-[#D9D9D9] p-2 rounded-full   "
                onClick={() => {
                  setShow1(!show1);
                }}
              >
                {show1 ? (
                  <FaAngleDown className="" />
                ) : (
                  <FaAngleUp className="" />
                )}
              </div>
            </div>
            <ul
              className={`list-disc   pl-3 flex-col gap-3 w-full  max-sm:${
                show1 ? "flex" : "hidden"
              }  `}
            >
              <li className="para max-sm:text-[20px] font-semibold list-none border-b-4 border-black mb-3 pb-1 max-sm:hidden ">
                Polyester Sewing Melt Thread(IBP)
              </li>
              <li className="para ">
                Designed for applications requiring low melting2 point threads
              </li>
              <li className="para ">
                Ideal for temporary stitching or for creating intentional
                fraying2 effects
              </li>
              <li className="para ">
                Melts at lower temperatures for easy removal
              </li>
              <li className="para">
                Available in finer deniers for delicate fabrics and projects
              </li>
            </ul>

          {/* <h1 className="para text-[24px] max-xl:hidden  h-fit text-[#4D4D4D] border-b-4 border-[#4D4D4D] mb-3 pb-1 w-[564px]">
                Nylon Sewing2 Melt Thread
              </h1> */}
          {/* </div> */}
        </div>
        {/* <Sweingtable /> */}
        <div className="flex max-lg:flex-col  gap-10 mt-10 ">
          <div className=" w-[1140px] max-xl:w-full m-auto">
            <div className=" max-sm:flex hidden  border-[#4D4D4D] text-[#4D4D4D]  mb-3 pb-1 shadow1 p-2   justify-center items-center gap-3  ">
              <h1 className="para max-sm:text-[20px] tracking-[2px] font-semibold list-none">
                {" "}
                Nylon Sewing Melt Thread(IBN)
              </h1>
              <div
                className="border-[3px] border-[#D9D9D9] p-2 rounded-full   "
                onClick={() => {
                  setShow2(!show2);
                }}
              >
                {setShow2 ? (
                  <FaAngleDown className="" />
                ) : (
                  <FaAngleUp className="" />
                )}
              </div>
            </div>
            <ul
              className={`list-disc px-3  flex-col gap-3 w-full max-sm:${
                show2 ? "flex" : "hidden"
              }  `}
            >
              <li className="para list-none max-sm:text-[20px] W-[80%] font-semibold border-b-4 border-black mb-3 pb-1 max-sm:hidden ">
                Nylon Sewing Melt Thread(IBN)
              </li>
              <li className="para ">
                Provides strong and durable temporary stitching
              </li>
              <li className="para ">
                Suitable for temporary seams in garment manufacturing
              </li>
              <li className="para ">
                Melts at lower temperatures, allowing for easy removal
              </li>
              <li className="para">
                Available in finer deniers for precise stitching in lightweight
                fabrics
              </li>
            </ul>
          </div>
        </div>
        {/* <SweingTable2 /> */}
      </div>
    </div>
  );
};

export default SweingTableFunc;

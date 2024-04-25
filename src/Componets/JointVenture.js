import React from "react";
import { FaHandshake } from "react-icons/fa6";

const JointVenture = () => {
  return (
    <div>
      <div
        className="px-36  max-xl:px-10   max-sm:p-3 my-20"
        style={{ whiteSpace: "pre-line" }}
      >
        <div className="para font-sans">
          <h1 className=" font-sans h-[30px] text-[#442173] max-sm:text-center font-medium text-[28px] max-md:text-[20px] leading-[30px] tracking-wider">
            JOINT VENTURE
          </h1>
        </div>
        <div className="flex  max-lg:flex-col justify-center items-center ">
          <h2 className="w-[916px] max-xl:w-full  max-xl:h-full my-10 homeHeading max-lg:text-[60px] max-sm:text-3xl tracking-widest flex justify-center gap-5 max-sm:gap-5 ">
            <img src="/Images/jointlogo.jpg" alt="#img" className="h-[200px] max-lg:h-[150px]" />
          </h2>
          <p className="w-[900px] max-xl:w-full  font-sans  font-normal text-[22px] leading-[150%] tracking-[2px]">
            CMC and Bekaert Deslee, two of the leading companies in the bedding
            and upholstery industry, have formed a joint venture to leverage
            their strengths and expertise. This partnership will combine CMC’s
            expertise in manufacturing high-quality mattresses with Bekaert
            Deslee’s global leadership in developing innovative mattress
            textiles and covers. Together, we aim to offer our customers the
            best sleep solutions in the market, with a focus on sustainability,
            design, and comfort.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default JointVenture;

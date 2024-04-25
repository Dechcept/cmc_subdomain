import React from "react";

const FunctionalTemplate = ({ title, description, img }) => {
  return (
    <div className="mt-20">
      <div className="shadow2  relative w-[260px]   h-[404px] max-sm:w-[290px] max-sm:h-[310px] flex justify-center  ">
        <div className=" absolute -top-16  flex flex-col  items-center justify-center gap-10  ">
          <div className="bg-[#D9D9D9] h-[120px] w-[120px]  rounded-full flex justify-center items-center">
            <img src={img} alt="#img" className="h-[64px] w-[64px]" />
          </div>
          <div className="text-center flex flex-col items-center justify-center gap-4 p-3 max-sm:p-1  ">
            <h1 className=" font-sans w-[220px] max-sm:w-full font-semibold text-2xl leading-[100%] tracking-widest">
              {title}
            </h1>
            <p className="text-[16px] w-[220px] max-sm:w-full leading-[150%] tracking-[1.6px] font-normal">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionalTemplate;

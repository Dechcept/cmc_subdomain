import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const Contactdetails = ({ para, title }) => {
  return (
    <div>
      <div className=" flex justify-around max-lg:flex-col gap-10 p-10 max-sm:p-3 lg:items-center mt-24 max-sm:mt-10 ">
        <div className="flex flex-col items-start gap-3">
          <h1 className="font-sans text-[40px] max-sm:text-2xl font-semibold leading-[120%] tracking-[4px]">
            {title}
          </h1>
          <p className="text-[20px]  w-[720px] max-lg:w-full">{para}</p>
        </div>
        <Link to="/Contact">
          <Button BtnName={"Contact Us"} />
        </Link>
      </div>
    </div>
  );
};

export default Contactdetails;

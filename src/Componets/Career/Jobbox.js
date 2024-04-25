import React, { useContext, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { SetID, getData } from "../../Redux/CareerSlice";
const Jobbox = ({ job }) => {
  const dispatch = useDispatch();
  console.log(job);
  return (

    <div className=".shadow2">
      {job.map((item,index) => {
        return (
          <Link key={index} to="/detail">
            <div
              className="shadow-md p-5 my-10 group hover:bg-black hover:text-white transition-all duration-500 ease-in-out first-letter:
            "
              onClick={() => {
                dispatch(SetID(item._id));
              }}
            >
              <div className=" flex gap-10">
                <p>{item.jobLocation}</p>
                <p>{item.jobType}</p>
              </div>
              <div className="py-5">+2 years of experience</div>
              <div className="flex justify-between items-center">
                <p className="text-4xl  max-sm:text-2xl"> {item.jobTitle}</p>
                <div className=" max-sm:hidden h-[50px] max-sm:h-[30px] w-[50px] max-sm:w-[30px] bg-black group-hover:bg-white group-hover:text-black text-white rounded-full flex justify-center items-center ">
                  <GoArrowUpRight className="text-2xl max-sm:text-lg font-bold" />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Jobbox;

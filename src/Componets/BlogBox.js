import React, { useContext, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { getData } from "../Redux/AdminCareerSlice";
const Blogbox = ({ job }) => {
//   const dispatch = useDispatch();
//   console.log(job);
  return (
    <div className=".shadow2 grid grid-cols-3 gap-10">
      {job.map((item) => {
        return (
          <Link >
            <div
              className="shadow-md p-5 my-10 group hover:bg-black hover:text-white transition-all duration-500 ease-in-out first-letter:
            "
            //   onClick={() => {
            //     dispatch(getData(item));
            //   }}
            >
              <div className=" flex gap-10">
                <p>{item.jobLocation}</p>
                <p>{item.jobType}</p>
              </div>
              <div className="py-5 text-2xl font-bold">Dive into the World of Technology: Exploring the Latest Trends</div>
              <div className="flex flex-col">
                <p className="text-2px  max-sm:text-2xl">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae beatae, illum sapiente sed blanditiis possimus et
                
                </p>
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

export default Blogbox;

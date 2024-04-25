import React, { useContext, useEffect, useState } from "react";
import CarrerForm from "./CarrerForm";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MainLayout from "../../Main";

const CareerDetailPage = () => {
  const id = JSON.parse(localStorage.getItem("cmc-ID"));
  const [data, setdata] = useState([]);
  const { content } = data;
  // console.log(List);
  console.log(data);
  const getCareerData = async () => {
    try {
      var res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/detail/get-single-data/${id}`
      );
      console.log(res);
      setdata(res.data.jobdetails);
      console.log(res.data.jobdetails);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getCareerData();
  }, []);
  return (
    <MainLayout>
      <section className="">
        <div className="px-28  max-md:px-4  max-sm:p-3 space-y-10">
          <div className="h-[400px] max-sm:h-[300px] flex flex-col justify-center  items-start  gap-10  mt-16 border-b-[1px]  ">
            <h1 className="text  max-lg:text-[60px] max-sm:text-[32px] leading-[100%] tracking-[4px]">
              {data.jobTitle}
            </h1>

            <ul className="flex max-sm:flex-wrap max-sm:gap-2">
              <li className="border-r-[1px] pr-10 ">
                {" "}
                <span className="hover:border-b-[2px] hover:border-black">
                  {data.jobLocation}
                </span>
              </li>
              <li className="border-r-[1px] px-10 ">
                {" "}
                <span className="hover:border-b-[2px] hover:border-black">
                  {data.jobType}
                </span>
              </li>
              {/* <li className="border-r-[1px] px-10 max-sm:pl-0 max-sm:pr-10 ">
              {" "}
              <span className="hover:border-b-[2px] hover:border-black">
                +2 years of experience
              </span>
            </li> */}
            </ul>
          </div>
          <div>
            <div className="text-left">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </div>

        <CarrerForm />
      </section>
    </MainLayout>
  );
};

export default CareerDetailPage;

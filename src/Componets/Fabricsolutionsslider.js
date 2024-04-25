import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Scrollbar, A11y, Keyboard } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css/navigation";
import { useState } from "react";
import { Navigation } from "swiper/modules";

const Data = [
  {
    id: 1,
    No: "01",
    title: "High Yarn Stability",
  },
  {
    id: 2,
    No: "02",
    title: "Consistent tension",
  },
  {
    id: 3,
    No: "03",
    title: "High volume",
  },
  {
    id: 4,
    No: "04",
    title: "Pilling-resistant",
  },
  {
    id: 5,
    No: "05",
    title: "Even fabric look",
  },
  {
    id: 6,
    No: "06",
    title: "Soft texture",
  },
];

const Fabricssolutionslider = ({ heading, list, activity, paraStyle ,img}) => {
  return (
    <section className=" p-20 max-xl:h-fit max-xl:p-10 max-sm:p-3  ">
      <div className=" ">
        <div className="max-sm:mt-10 w-full flex justify-start ">
          <h1 className="w-fit opacity-30 text-black font-semibold text-[80px] max-lg:text-[80px] max-md:text-[60px] leading-[120%] tracking-[12px] max-sm:tracking-[4px] mb-10 max-md:mb-0">
            {heading}
          </h1>
        </div>

        <Swiper loop={true}   spaceBetween={10} slidesPerView={1}  keyboard={{
            enabled: true,
          }}>
          {list.map((item, index) => {
            return (
              <SwiperSlide>
                <div key={index} className="flex justify-center ">
                  <div className="flex justify-center  gap-2 max-xl:flex-col  max-lg:gap-10 max-sm:gap-5 w-fit z-10 ">
                    <div className=" flex flex-col items-start my-5">
                      <span className=" text-black font-bold text-[40px] leading-[48px] text-left tracking-widest  ">
                        {item.No}
                      </span>
                      <hr className="w-[160px] h-[2px] mt-5 bg-black" />
                    </div>
                    <div className="">
                      <h1 className="text-black  max-xl:w-full  font-semibold text-[40px]  max-sm:text-3xl leading-[48px] max-sm:leading-[120%] tracking-widest font-sans">
                        {item.title}
                      </h1>
                      <p
                        className={`mt-10 max-sm:mt-5   max-xl:w-full    text-black font-normal text-[20px]  leading-[30px] tracking-wider `}
                      >
                        {item.description}<br/>
                       
                      </p>

                    </div>
                    <div className="relative w-[250px] h-fit items-center justify-center m-auto max-sm:h-fit bg-white max-xl:justify-start max-xl:m-10">
                      <img
                        src={item.img}
                        alt="#img"
                        className="w-full h-full m-auto "
                      />

                      {/* <div className=" max-xl:hidden h-[120px] w-[120px] bg-[#D9D9D9] rounded-ful l absolute top-[20%] max-lg:-top-1/4 -left-20 max-lg:left-[60%] flex justify-center items-center">
                      <span className="text-[#000000] font-bold text-[20px] leading-[30px] tracking-[10%]">
                        Drag
                      </span>
                    </div> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Fabricssolutionslider;

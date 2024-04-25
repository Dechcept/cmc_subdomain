import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const SustainableSlider = () => {
  const [mousePositon, setMousePositon] = useState({
    x: 0,
    y: 0,
  });

  const variants = {
    default: {
      x: mousePositon.x,
      y: mousePositon.y,
    },
  };

  return (
    <section
      className="bg-white flex flex-col mt-20 max-sm:mt-10 "
      onPointerMove={(e) => {
        setMousePositon({ x: e.clientX, y: e.clientY });
      }}
    >
      <h1 className="text_120 text-[80px] text-black  max-lg:text-[40px] opacity-100 text-center max-xl:text-left mb-10 max-xl:h-fit relative">
        OUR CERTIFICATE
      </h1>
      <div className="  relative  cursor-none">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoHeight={true}
          className="w-[1160px] max-xl:w-full"
        >
          <SwiperSlide>
            {" "}
            <div className=" w-full inline-flex max-lg:flex-col gap-10 ">
              <div className="space-y-6 py-5 pl-5 max-lg:p-3">
                <h1 className="text_40 max-sm:text-[32px] w-[660px] max-xl:w-full">
                  GOTS Certified
                </h1>
                <p className="para w-[560px] max-lg:w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor Lorem ipsum dolor sit amet, Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed
                </p>
              </div>
              <div className="">
                <img
                  src="/Images/ProductSlider2.webp"
                  alt="#img"
                  className="w-[460px] max-lg:w-full h-[320px] max-lg:h-[400px] max-sm:h-[300px]"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className=" w-full inline-flex max-lg:flex-col gap-10  "
              // onMouseMove={(e) => {
              //   setMousePositon({ x: e.clientX, y: e.clientY });
              // }}
            >
              <div className="space-y-6 py-5 pl-5 max-lg:p-3">
                <h1 className="text_40 max-sm:text-[32px] w-[660px] max-xl:w-full">
                  GOTS Certified
                </h1>
                <p className="para w-[560px] max-lg:w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor Lorem ipsum dolor sit amet, Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed
                </p>
              </div>
              <div className=" ">
                <img
                  src="/Images/ProductSlider2.webp"
                  alt="#img"
                  className="w-[460px] max-lg:w-full h-[320px] max-lg:h-[400px] max-sm:h-[300px]"
                />
                {/* <motion.div
                  variants={variants}
                  animate="default"
                  className=" h-[120px] w-[120px] bg-[#D9D9D9] rounded-full  fixed top-0 left-0   flex justify-center items-center"
                >
                  <span className="text-[#000000] font-bold text-[20px] leading-[30px] tracking-[10%]">
                    Drag
                  </span>
                </motion.div> */}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <motion.div
          variants={variants}
          animate="default"
          className=" h-[120px] w-[120px] bg-[#D9D9D9] rounded-full absolute top-0 left-0 z-50  flex justify-center items-center"
        >
          <span className="text-[#000000] font-bold text-[20px] leading-[30px] tracking-[10%]">
            Drag
          </span>
        </motion.div> */}
      </div>
    </section>
  );
};

export default SustainableSlider;

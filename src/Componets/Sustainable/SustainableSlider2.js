import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SustainableSlider2 = () => {
  const [mousePositon, setMousePositon] = useState({
    x: 0,
    y: 0,
  });

  const variants = {
    default: {
      x: mousePositon.x - 100,
      y: mousePositon.y - 100,
    },
  };
  return (
    <div
      className=" relative cursor-none  "
      onMouseMove={(e) => {
        setMousePositon({ x: e.clientX, y: e.clientY });
      }}
    >
      <div className="bg-black h-[800px] max-xl:h-full  flex justify-center ">
        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          autoHeight={true}
        >
          <SwiperSlide>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-20">
              <div className=" max-sm:p-3 mt-10 flex flex-col   gap-5 justify-center pl-10">
                <h1 className="w-[660px] max-xl:w-full text max-xl:text-[40px] text-white  font-semibold  leading-[120%] tracking-[4px] font-sans">
                  Sustainability Product
                </h1>
                <p className="w-[558px]  max-xl:w-full para text-white font-normal text-[24px]  leading-[150%] tracking-[2px]">
                  We offer customizable solutions for your unique mattress
                  fabric needs. Our team is dedicated to bringing your vision to
                  life. Let us create a personalized fabric solution that aligns
                  with your brand and sustainability goals.
                </p>
                {/* <div className="flex items-center ">
                  <h1 className="para text-white ">View Product </h1>
                  <div className="relative rounded-full p-1 border-white border-[1px]"></div>
                </div> */}
              </div>
              <div>
                <img
                  src="/Images/ProductSlider2.webp"
                  alt="#img"
                  className="w-full max-xl:w-full h-[800px] max-xl:h-[700px] max-lg:h-[700px]  max-sm:h-[516px] "
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-20">
              <div className=" max-sm:p-3 mt-10 flex flex-col   gap-5 justify-center pl-10">
                <h1 className="w-[660px] max-xl:w-full text max-xl:text-[40px] text-white  font-semibold  leading-[120%] tracking-[4px] font-sans">
                  Sustainability Product
                </h1>
                <p className="w-[558px]  max-xl:w-full para text-white font-normal text-[24px]  leading-[150%] tracking-[2px]">
                  Join us towards a greener future. Explore our collection of
                  recycled, natural, and sustainable mattress fabrics. Make a
                  conscious choice for the environment while enjoying comfort
                  and quality.
                </p>
                {/* <div className="flex items-center ">
                  <h1 className="para text-white ">View Product </h1>
                  <div className="relative rounded-full p-1 border-white border-[1px]"></div>
                </div> */}
              </div>
              <div>
                <img
                  src="/Images/ProductSlider2.webp"
                  alt="#img"
                  className="w-full max-xl:w-full h-[800px] max-xl:h-[700px] max-lg:h-[700px]  max-sm:h-[516px] "
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
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
  );
};

export default SustainableSlider2;

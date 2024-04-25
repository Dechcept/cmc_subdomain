import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";
import { Keyboard } from "swiper/modules";

import "swiper/css";
import { UpholsteryProductData } from "../../Assests/Data";

const UpholsterySlider2 = () => {
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
    <div className="mt-24">
      <div>
        <div className="flex justify-center">
          <h1 className="text text-center max-lg:text-[40px] max-lg:leading-[100%] max-lg:tracking-[4px]  w-[960px] max-xl:w-full">
            Home Textile Applications
          </h1>
        </div>
        <div
          className="mt-10 p-3 relative"
          onPointerMove={(e) => {
            setMousePositon({ x: e.clientX, y: e.clientY });
          }}
        >
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            keyboard={{
              enabled: true,
            }} 
            modules={[Keyboard]}
            breakpoints={{
              240: {
                slidesPerView: 1, // 2 slides visible on screens wider than 640px
              },
              768: {
                slidesPerView: 3, // 3 slides visible on screens wider than 768px
              },
            }}
            className="h-[400px] flex items-center p-10"
          >
            {UpholsteryProductData.map((item, index) => {
              return (
                <SwiperSlide>
                  <div key={index} className="shadow2  mt-4 ">
                    <img
                      src={item.img}
                      alt="#img"
                      className="w-[560px] h-[360px]"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* <motion.div
            variants={variants}
            animate="default"
            className=" h-[100px] w-[100px] bg-[#D9D9D9] rounded-full absolute top-0 left-0 z-50  flex justify-center items-center"
          >
            <span className="text-[#000000] font-bold text-[20px] leading-[30px] tracking-[10%]">
              Drag
            </span>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default UpholsterySlider2;

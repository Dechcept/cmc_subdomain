import React from "react";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Navigation } from "swiper/modules";

const Data = [
  {
    id: 1,
    No: "01",
    title: "Affordable Excellence",
    para: "We believe Premium quality at an affordable price. Our affordable upholstery warp knit fabrics are thoughtfully crafted to provide Exceptional value for your investment.",
    src:"Images/Upholstery/67.png"
  },
  {
    id: 2,
    No: "02",
    title: "Versatile Style",
    para: "A spectrum of styles to match your vision, from timeless to trendy.",
    src:"/Images/Upholstery/6.png"
  },
  {
    id: 3,
    No: "03",
    title: "Durable Comfort",
    para: "Home textiles should not only look good but also stand the test of time. Our upholstery warp knit fabrics are engineered for durability, ensuring lasting beauty and comfort.",
    src:"/Images/Upholstery/7.png"
  },
  {
    id: 4,
    No: "04",
    title: "Easy Maintenance",
    para: "We understand the demands of daily life. That's why our fabrics are designed for daily life and our fabrics are stain-resistant and easy to clean.",
    src:"/Images/Upholstery/8.png"
  },
];
const UpholsterySlider = ({ heading, title, detail, list, activity }) => {
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
      className="bg-black p-20 max-xl:h-fit max-xl:p-10 max-sm:p-3 "
      onPointerMove={(e) => {
        setMousePositon({ x: e.clientX, y: e.clientY });
      }}
    >
      <div className="max-sm:mt-10 w-full flex justify-start max-sm:justify-center">
        <h1 className="w-fit opacity-30 text-[#FFFFFF] font-semibold text-[70px]  max-md:text-[40px] leading-[120%]  tracking-[8px] max-sm:tracking-[4px] mb-10 max-md:mb-0">
          Why Choose Our 
          Upholstery Fabrics?
        </h1>
      </div>
      <Swiper loop={true} spaceBetween={10} slidesPerView={1} 
          autoHeight={true}
      
      >
        {Data.map((item, index) => {
          return (
            <SwiperSlide>
              <div key={index} className="flex justify-center">
                <div className="flex justify-center  gap-16 max-xl:flex-col  max-lg:gap-10 w-fit ">
                  <div className=" flex flex-col items-start my-5">
                    <span className=" text-white font-bold text-[40px] leading-[48px] text-left tracking-widest  ">
                      {item.No}
                    </span>
                    <hr className="w-[160px] h-[2px] mt-5 bg-white" />
                  </div>
                  <div className="">
                    <h1 className="text-[#FFFFFF] w-[565px] max-xl:w-full  font-semibold text-[40px]  max-sm:text-3xl leading-[48px] max-sm:leading-[120%] tracking-widest font-sans">
                      {item.title}
                    </h1>
                    <p className="mt-10 w-[560px] max-xl:w-full  text-[#FFFFFF] font-normal text-[20px]  leading-[30px] tracking-wider ">
                      {item.para}

                      {activity ? (
                        <ul className="list-disc pl-6">
                          {Object.keys(item.point).map((key) => (
                            <li
                              key={key}
                              className="text-white  font-normal text-[20px]  leading-[30px] tracking-wider "
                            >
                              {item.point[key]}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        ""
                      )}
                    </p>

                    <div></div>
                  </div>
                  <div className="relative w-full h-full max-sm:h-fit ">
                    <img
                      src={item.src}
                      alt="#img"
                      className="w-full h-full "
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

      {/* <motion.div
        variants={variants}
        animate="default"
        className=" h-[120px] w-[120px] bg-[#D9D9D9] rounded-full absolute top-0 left-0 z-50  flex justify-center items-center"
      >
        <span className="text-[#000000] font-bold text-[20px] leading-[30px] tracking-[10%]">
          Drag
        </span>
      </motion.div> */}
    </section>
  );
};

export default UpholsterySlider;

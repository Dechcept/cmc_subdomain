import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
const JointSlider = ({ heading, list, activity, paraStyle }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <section className="bg-black p-20 max-xl:h-fit max-xl:p-10 max-sm:p-3 relative ">
      <div className=" ">
        <div className="max-sm:mt-10 w-full flex justify-start ">
          <h1 className="w-fit opacity-30 text-[#FFFFFF] font-semibold text-[120px] max-lg:text-[80px] max-md:text-[60px] leading-[120%] tracking-[12px] max-sm:tracking-[4px] mb-10 max-md:mb-0">
            {heading}
          </h1>
        </div>

        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          autoHeight={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
          {list.map((item, index) => {
            return (
              <SwiperSlide>
                <div
                  key={index}
                  className="flex justify-center  max-xl:justify-start "
                >
                  <div className="flex justify-center  gap-16 max-xl:gap-5 max-xl:flex-col  w-fit ">
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
                      <p
                        className={`mt-10 max-sm:mt-5 w-[560px]  max-xl:w-full    text-[#FFFFFF] font-normal text-[20px]  leading-[30px] tracking-wider `}
                      >
                        {item.para}
                        <br />
                        {item.para2}
                        <br />

                        {item.para3}
                        <br />

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
                    </div>
                    <div className="relative w-full h-full max-sm:h-fit ">
                      <img
                        src={`${item.img}`}
                        alt="#img"
                        className="w-[300px]  max-xl:w-1/2 max-sm:w-full h-[300px]  "
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div
            className="autoplay-progress absolute top-0 right-0"
            slot="container-end"
          >
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default JointSlider;

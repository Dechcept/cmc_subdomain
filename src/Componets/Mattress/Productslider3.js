import React from 'react'

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const Productslider3 = ({ ProductData }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    

          <section className="bg-[#F4F3F3] h-[944px] max-lg:h-fit pb-5">
            <div className="">
              <div className="px-3 space-y-5 ">
                <Swiper
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={1}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="max-w-[1160px] h-fit "
                >
                  {ProductData.map((item, index) => {
                    console.log(item.img);
                    return (
                      <SwiperSlide className="">
                        <div key={index}>
                          <img
                            src={`${item.img}`}
                            alt="#img"
                            className="h-[580px] max-lg:h-full max-md:h-[236px] max-sm:h-[183px]  w-[1160px] max-lg:w-full "
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                {/* <div className="flex items-center justify-center"> */}
                {/* <div className="border-[1px] border-black p-2 rounded-full max-lg:hidden w-fit ">
                    <BsArrowLeft />
                  </div> */}
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={2}
                  freeMode={true}
                  navigation={{
                    nextEl: ".next",
                    prevEl: ".prev-active",
                  }}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="max-w-[760px] h-fit"
                >
                  {ProductData.map((item, index) => {
                    return (
                      <SwiperSlide className="">
                        <div key={index}>
                          <img
                            src={`${item.img}`}
                            alt="#img"
                            className="h-[181px] max-sm:h-[84px] w-full"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              {/* </div> */}
      
              {/* <div className="flex justify-center max-lg:flex-col gap-10 max-md:gap-2 items-center"> */}
              {/* <div className="border-[1px] border-black p-2 rounded-full max-lg:hidden">
                  <BsArrowLeft />
                </div> */}
      
              {/* <div className="bg-blackh-[180px] w-[360px]">
                  <img src="/Images/Mattress/MattressProduct5.webp" alt="#img" />
                </div> */}
      
              <div className="flex justify-center gap-3 mt-5">
                <div className="  border-[1px] border-black p-2 rounded-full next">
                  <BsArrowLeft />
                </div>
                <div className="border-[1px] border-black p-2 rounded-full  prev-active">
                  <BsArrowRight />
                </div>
              </div>
              {/* </div> */}
            </div>
          </section>
        );
      };
      
  

export default Productslider3
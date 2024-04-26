import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Add this line if you need Swiper navigation styles
import 'swiper/css/pagination'; // Add this line if you need Swiper pagination styles

const Testimonial = () => {
  return (
    <>
      <div className="bg-black pt-20 pb-20 my-10">
        <p className="bg-black text-[80px] text-white text-center max-md:text-[50px]">
          Client Say’s
        </p>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev"
          }
          }
          loop={true}
          keyboard={true}


          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className="flex gap-2 justify-center">
              <img className="" src="./Images/test.png" alt="" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center text-white w-[600px] max-md:w-[400px] max-sm:w-[250px] ">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Lorem ipsum dolor sit

                amet, consectetur rem ipsum dolor sit amet, consectetur”
              </p>
              <div className="text-white flex justify-center gap-2">
                <p className="">WILSON FISK</p>
                <p className="border-s-2 ltr pl-3">Engineer</p>
              </div>

            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex gap-2 justify-center">
              <img className="" src="./Images/test.png" alt="" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center text-white w-[600px] max-md:w-[400px] max-sm:w-[250px] ">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Lorem ipsum dolor sit

                amet, consectetur rem ipsum dolor sit amet, consectetur”
              </p>
              <div className="text-white flex justify-center gap-2">
                <p className="">WILSON FISK</p>
                <p className="border-s-2 ltr pl-3">Engineer</p>
              </div>

            </div>
          </SwiperSlide>
          <div className="flex gap-5 justify-center p-5">
            <img className="prev" src="./Images/arrow-circle-left.svg " alt="#img" />
            <img className="next" src="./Images/arrow-circle-right.svg " alt="" />

          </div>
        </Swiper>


      </div>
    </>
  );
};

export default Testimonial;

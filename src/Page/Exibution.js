import React, { useEffect } from "react";
import Gallery from "../Componets/Gallery";
import { Link, useLocation } from "react-router-dom";
import MainLayout from "../Main";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
const Exibution = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <MainLayout>
      <section className="p-3">
        <div className="h-fit flex flex-col justify-center  items-center max-sm:items-start gap-7 mt-36 border-double">
          <h1 className="text  max-lg:text-[60px] max-sm:text-[40px]">
            EXHIBITION
          </h1>
          
        </div>
        <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-10 p-[5vw] max-lg:p-2 max-lg:mt-20" >
          <div className="h-[50vh] max-xl:h-[30vh] col-span-1 ">
            <div className="p-5 max-lg:p-2">
              <h1 className="text-[1.5rem] max-lg:text-[20px] font-bold uppercase tracking-wide">
                India Mattresstech Expo
              </h1>
              <p className="text-[16px] ">22nd - 25th February, 2024</p>
              <p className="text-[16px]">Bengaluru, India</p>
              <p className="text-[18px] pt-5">We were proud participants at the recent INDIA MATTRESSTECH & UPHOLSTERY SUPPLIES Expo, a leading trade fair for the mattress and upholstery industry. This prestigious event brought together key decision-makers, industry experts, and innovative companies to showcase the latest trends, technologies, and materials in the sleep products market. Our presence at the event highlights our dedication to providing high-quality solutions and collaborating with industry partners to ensure a good night's sleep for everyone. </p>

            </div>
          </div>
          <div className="h-[70vh] w-full b col-span-2 max-xl:col-span-1">
            <Swiper
              slidesPerView={1}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
              className="h-[70vh] w-full"
            >
              {Array.from({ length: 12 }).map((_, index, item) => {
                return (
                  <SwiperSlide className="" key={index}>
                    <img
                      src={`/Images/exibution/g${index + 1}.webp`}
                      className="h-full w-full object-cover max-lg:object-contain"
                      alt=""
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div className="flex flex-col items-center gap-24 max-lg:gap-16 mt-48 max-xl:mt-20 max-sm:mt-10">
          <h1 className="text-[90px]  max-lg:text-[80px] max-md:text-[60px] max-sm:text-[40px] max text-center font-sans font-bold leading-[120%] max-xl:leading-[100%] tracking-[12px] max-sm:tracking-[4px] w-[1160px] max-xl:w-full">
            {" "}
            Want to connect with us
          </h1>
          <Link to="/Contact">
            <div className="w-[260px] max-md:w-[130px] max h-[64px] max-md:h-[46px] border-black border-[1px] rounded-[32px] flex justify-center items-center">
              Let’s Talk
            </div>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Exibution;

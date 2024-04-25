import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

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

const Slider = ({ heading, list, activity, paraStyle }) => {
  return (
    <section className="bg-black p-20 max-xl:h-fit max-xl:p-10 max-sm:p-3  ">
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
        >
         
         
          {list.map((item, index) => {
            return (
              <SwiperSlide>
                <Link to={item.url}>
                <div key={index} className="flex justify-center ">
                  <div className="flex justify-center gap-16 max-xl:flex-col  max-lg:gap-10 max-sm:gap-5 w-fit ">
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
                        className={` max-sm:mt-5 w-[560px]  max-xl:w-full    text-[#FFFFFF] font-normal text-[20px]  leading-[35px] tracking-wider mt-5 `}
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
                </Link>
              </SwiperSlide>
              
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;

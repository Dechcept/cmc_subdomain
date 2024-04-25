import React, { useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Add this line if you need Swiper navigation styles
import "swiper/css/pagination"; // Add this line if you need Swiper pagination
import { useState } from "react";
import { Lightbox, initTE } from "tw-elements";
import { ProcessData } from "../Assests/Data";

const Data = [
  {
    id: 1,
    image: "/Images/slider1.png",
    heading: "Cutting",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error perspiciatis ab facere aperiam suscipit at quasi ratione voluptatum repudiandae.",
  },
  {
    id: 2,
    image: "/Images/slider2.png",
    heading: "Process2",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error perspiciatis ab facere aperiam suscipit at quasi ratione voluptatum repudiandae.",
  },
  {
    id: 3,
    image: "/Images/slider3.png",
    heading: "Process3",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error perspiciatis ab facere aperiam suscipit at quasi ratione voluptatum repudiandae.",
  },
  {
    id: 4,
    image: "/Images/slider1.png",
    heading: "Process4",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error perspiciatis ab facere aperiam suscipit at quasi ratione voluptatum repudiandae.",
  },
  {
    id: 5,
    image: "/Images/slider2.png",
    heading: "Process5",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error perspiciatis ab facere aperiam suscipit at quasi ratione voluptatum repudiandae.",
  },
  {
    id: 6,
    image: "/Images/slider3.png",
    heading: "Prrocess6",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error perspiciatis ab facere aperiam suscipit at quasi ratione voluptatum repudiandae.",
  },
];
console.log(Data.image);
const Process = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  useEffect(() => {
    initTE({ Lightbox });
  });
  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, 2000);
  });
  const [hide, setHide] = useState(false);

  console.log();
  return (
    <>
      <div className="pl-16 py-20 max-sm:py-10 px-10 max-sm:px-3">
        <div className="text-7xl text-left max-md:text-5xl max-sm:text-4xl py-5">
          <p>Explore Our Mattress Fabrics</p>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{
            240: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1730: {
              slidesPerView: 4,
            },
          }}
          loop={true}
          keyboard={true}
          scrollbar={{ draggable: true }}
          data-te-lightbox-init
        >
          <div className=" flex gap-5 py-10 px-10 relative">
            <div className=" flex gap-5 py-10 px-10 relative">
              {ProcessData.map((item) => {
                return (
                  <SwiperSlide>
                    <div className="relative   ">
                      <img
                        src={item.img}
                        alt=""
                        className="w-full h-80 cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
                      />
                      {/* {hide ? (
                        <div
                          className="text-black text-center absolute top-0 inset-0   opacity-70 bg-white   flex flex-col   items-center justify-center"
                        
                        >
                          <h2 className="text-4xl">1</h2>
                          <h2 className="text-4xl font-semibold">Cutting</h2>

                          <p className="p-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Minus error perspiciatis ab facere aperiam
                            suscipit at quasi ratione voluptatum repudiandae.
                          </p>
                        </div>
                      ) : (
                        ""
                      )} */}
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Process;

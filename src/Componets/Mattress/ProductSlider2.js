import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import { useState } from "react";

const ProductSlider2 = ({ heading, title, detail }) => {
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
    <section className="  ">
      <div
        className="bg-black"
        onPointerMove={(e) => {
          setMousePositon({ x: e.clientX, y: e.clientY });
        }}
      >
        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          autoHeight={true}
          className=""
        >
          <SwiperSlide>
            <div className="flex max-lg:flex-col gap-10 justify-center max-2xl:justify-between">
              <div className="h-[810px] max-lg:h-fit w-1/2 max-lg:w-full text-white p-3  pl-20 max-xl:pl-10 max-sm:pl-3 pt-10">
                <h1 className="text-[120px] max-lg:text-[80px] font-bold opacity-[40%]">
                  Fibers
                </h1>
                <div className="space-y-6">
                  <div>
                    <h1 className="text_40">Eco Blend Fabrics</h1>
                  </div>
                  <div className="space-y-5">
                    <p className="w-[700px] max-2xl:w-full para ">
                      Experience nature's beauty with our natural fabrics.
                      Sourced from renewable resources like organic cotton,
                      bamboo, hemp, and wool. Grown sustainably without harmful
                      chemicals. <br />
                      <br /> Offers breathability, moisture-wicking, and a
                      luxurious feel. Kind to your body and the planet.
                      Exclusive range of 100% natural fabrics available. Dyed
                      options and panels/borders also provided.
                    </p>
                    <ul className="grid grid-cols-2 max-sm:grid-cols-1 list-disc pl-5 w-fit gap-x-10 ">
                      <li className="para">Organic Cotton</li>
                      <li className="para">Tencel</li>
                      <li className="para">Bamboo</li>
                      <li className="para">Viscose</li>
                      <li className="para">Linen</li>
                      <li className="para">Cotton mélange</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" text-white w-1/2 max-lg:w-full">
                <img
                  src="/Images/ProductSlider2.webp"
                  alt="#img"
                  className="h-[890px] w-full max-lg:h-[600px] max-sm:h-[400px]"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex max-lg:flex-col justify-center gap-10  max-2xl:justify-between">
              <div className="h-[810px] max-lg:h-fit w-1/2 max-lg:w-full text-white p-3  pl-20 max-xl:pl-10 max-sm:pl-3 pt-10">
                <h1 className="text-[120px] max-lg:text-[80px] font-bold opacity-[40%]">
                  Fibers
                </h1>
                <div className="space-y-6">
                  <div>
                    <h1 className="text_40">Reborn Fab</h1>
                  </div>
                  <div className="space-y-5">
                    <p className="w-[700px] max-2xl:w-full para ">
                      Committed to waste reduction and a circular economy, our
                      recycled fabrics are made from post-consumer or
                      post-industrial materials. Transformed into high-quality
                      fibers, these fabrics are durable and beautiful.. <br />
                      <br />
                      Choosing our recycled fabrics minimizes environmental
                      impact and repurposes waste. Contact us for sustainable
                      recycled yarn-based mattress fabrics and covers.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" text-white w-1/2 max-lg:w-full">
                <img
                  src="/Images/ProductSlider2.webp"
                  alt="#img"
                  className="h-[890px] w-full max-lg:h-[600px] max-sm:h-[400px]"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex max-lg:flex-col justify-center gap-10  max-2xl:justify-between">
              <div className="h-[810px] max-lg:h-fit w-1/2 max-lg:w-full text-white p-3  pl-20 max-xl:pl-10 max-sm:pl-3 pt-10">
                <h1 className="text-[120px] max-lg:text-[80px] font-bold opacity-[40%]">
                  Fibers
                </h1>
                <div className="space-y-6">
                  <div>
                    <h1 className="text_40">Chill-tech fabric</h1>
                  </div>
                  <div className="space-y-5">
                    <p className="w-[700px] max-2xl:w-full para ">
                        Introducing CMC chill tech, the ultimate in cool
                      temperature yarn-based mattress fabrics. Experience
                      refreshing sleep with our innovative collection. Our
                      advanced cooling technology provides a soothing sleep
                      experience. <br />
                      <br />
                      Our cool temperature yarns ensure optimal ventilation and
                      dissipate excess heat and humidity. Say goodbye to night
                      sweats and hello to a dry, comfortable sleep. Our yarns
                      offer a luxurious, soft touch for deep sleep. <br />{" "}
                      <br />
                      Transform your sleep with our cool temperature yarn-based
                      products. Enjoy a refreshing, cool, and rejuvenating
                      sleep. <br /> <br />
                      Contact us to explore our range and find the perfect
                      product for your needs. Our team is here to assist you in
                      creating the ideal sleep environment.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" text-white w-1/2 max-lg:w-full">
                <img
                  src="/Images/ProductSlider2.webp"
                  alt="#img"
                  className="h-[850px] w-full max-lg:h-[600px] max-sm:h-[400px]"
                />
              </div>
            </div>
          </SwiperSlide>
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
    </section>
  );
};

export default ProductSlider2;

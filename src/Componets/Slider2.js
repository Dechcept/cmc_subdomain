import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css/navigation";
import { useState } from "react";
import { FreeMode, Navigation } from "swiper/modules";
import BDandCMC from "./BDandCMC";
import MainLayout from "../Main";

const Certifications = (props) => {
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
    <>
      <MainLayout>
        <section className=" mt-48 h-full max-lg:h-full flex justify-center">
          <div className="relative w-[90%] max-md:w-full max-md:px-3">
            <div className="mb-20 max-sm:mb-5 mt-5">
              <h1 className="w-full max-lg:w-full opacity-30 h-[120px] max-lg:h-fit text-black font-semibold text-[120px] max-lg:text-[80px] max-sm:text-[40px] leading-[144px] max-md:leading-[120%] tracking-widest max-lg:tracking-wide mb-5 max-sm:mb-0">
                Certifications
              </h1>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <h1 className="text-Black font-semibold text-[40px] max-sm:text-[24px] leading-[48px] tracking-widest ">
                  Oektotex Certificate
                </h1>
                <p className="my-5 font-sans text-Black font-normal text-[20px]  max-md:text-[15px] leading-[30px] max-sm:leading-[120%] tracking-widest max-sm:tracking-[2px]">
                  The STANDARD 100 by OEKO-TEX is one of the most well-known and
                  widely used certifications for textiles in the world. It is a
                  comprehensive testing and certification system that ensures
                  that textile products (including fabrics, garments, and
                  accessories) are free from harmful substances.
                </p>
                <ul className=" font-sans text-Black font-normal  text-[20px] max-md:text-[15px] leading-[30px] max-sm:leading-[120%] tracking-widest max-sm:tracking-[2px]">
                  <li className="my-4">
                    Comprehensive Testing: The certification involves thorough
                    testing for a wide range of harmful substances, including
                    substances that are regulated by law and chemicals that are
                    known to be harmful to health.
                  </li>
                </ul>
              </div>

              <div className="flex justify-between max-xl:flex-col gap-2 max-xl:gap-10">
                <div className="w-[65%] max-xl:w-full">
                  <ul className="space-y-5">
                    <li className=" font-sans text-Black font-normal text-[20px] max-md:text-[15px] leading-[30px] max-sm:leading-[120%] tracking-widest max-sm:tracking-[2px]">
                      {" "}
                      Regular Testing: The certification is not a one-time
                      process. Textiles must undergo regular testing to maintain
                      the certification, ensuring that products remain free from
                      harmful substances throughout their lifecycle.
                    </li>
                    <li className=" font-sans text-Black font-normal text-[20px]  max-md:text-[15px]  leading-[30px] max-sm:leading-[120%] tracking-widest max-sm:tracking-[2px]">
                      {" "}
                      Product Categories: The STANDARD 100 covers a wide range
                      of textile products, including raw materials,
                      semi-finished products, and finished products.
                    </li>
                    <li className=" font-sans text-Black font-normal text-[20px] max-md:text-[15px]  leading-[30px] max-sm:leading-[120%] tracking-widest max-sm:tracking-[2px]">
                      Global Recognition: The certification is recognized
                      globally and is considered a mark of product safety.
                      Consumers often look for the STANDARD 100 label when
                      purchasing textiles to ensure that the products have been
                      tested for harmful substances.
                    </li>
                    <li className=" font-sans text-Black font-normal text-[20px] max-md:text-[15px]  leading-[30px] max-sm:leading-[120%] tracking-widest max-sm:tracking-[2px]">
                      {" "}
                      Independent Testing: The testing is conducted by
                      independent OEKO-TEX member institutes. These institutes
                      have the expertise to analyze textiles for various
                      chemical parameters.
                    </li>
                    <li className=" font-sans text-Black font-normal text-[20px] max-md:text-[15px]   leading-[30px] max-sm:leading-[120%] tracking-widest max-sm:tracking-[2px]">
                      {" "}
                      Limit Values: The STANDARD 100 sets strict limit values
                      for each tested substance. If a textile product exceeds
                      these limits, it does not receive the certification.
                    </li>
                  </ul>
                </div>
                <div className="w-[400px] max-2xl:w-[30%] max-xl:w-2/5 max-md:w-full h-full relative">
                  <img
                    src="/Images/Certificate.jpg"
                    alt="#img"
                    className="w-full h-[550px] max-xl:h-full object-fill"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <BDandCMC isShow={false} />
      </MainLayout>
    </>
  );
};

export default Certifications;

import React, { useEffect } from "react";
import SustainableHeading from "../Componets/Sustainable/SustainableHeading";
import ProductSlider2 from "../Componets/Mattress/ProductSlider2";
import Slider2 from "../Componets/Slider2";
import SustainableSlider from "../Componets/Sustainable/SustainableSlider";
import SustainableSlider2 from "../Componets/Sustainable/SustainableSlider2";
import Timeline from "../Componets/Sustainable/Timeline";
import { useLocation } from "react-router-dom";
import BDandCMC from "../Componets/BDandCMC";
import MainLayout from "../Main";

const Sustainable = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <MainLayout>
      
    <div>
      <SustainableHeading />
      <div className="p-36  max-xl:p-28  max-lg:p-10  max-sm:p-3 mt-10">
        <div className="para1 font-sans my-5">
          <h1 className="w-[158px] font-sans h-[30px] text-[#442173] font-medium text-[20px] leading-[30px] tracking-wider">
            INTRODUCTION
          </h1>
          {/* <h2 className="w-[916px] max-xl:w-full h-[192px] max-xl:h-full my-5 homeHeading max-lg:text-[60px] max-sm:text-3xl tracking-widest">
            Lorem ipsum dolor sit amet
          </h2> */}
        </div>
        <div className="flex justify-end ">
          <p className="w-[800px] max-2xl:w-[560px] max-sm:w-full  max-md:h-full font-sans  font-normal text-[20px] leading-[150%] tracking-[2px]">
            At CMC, sustainability is our core. We prioritize eco-friendly
            processes, water conservation, and energy efficiency. Choose our
            sustainable mattress fabrics for a positive environmental impact.
            <br />
            <br />
            We value transparency and provide information for informed choices.
            Our fabrics are certified by reputable organizations for strict
            environmental and social standards. Trust our transparency when
            choosing our sustainable mattress fabrics.
            <br />
            <br />
            Our sustainable mattress fabrics offer quality and comfort. Designed
            for a good night’s sleep, our fabrics offer breathability, moisture
            management, and softness. Enjoy the luxury of sustainable materials
            without compromising on performance.
          </p>
        </div>
      </div>

      <SustainableSlider2 />
      <BDandCMC isShow={false}/>
      {/* <SustainableSlider /> */}
    </div>
    </MainLayout>

  );
};

export default Sustainable;

import React from "react";
import ProductSlider2 from "../Mattress/ProductSlider2";

const SustainableHeading = () => {
  return (
    <section>
      <div
        className="h-[576px] max-lg:h-[520px] max-sm:h-[446px] flex justify-center items-center bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/Images/SustaibaleBanner.webp')" }}
      >
        <h1 className="homeHeading tracking-widest w-[960px] max-lg:w-full text-center">
          SUSTAINABLE CMC
        </h1>
      </div>
    
    </section>
  );
};

export default SustainableHeading;

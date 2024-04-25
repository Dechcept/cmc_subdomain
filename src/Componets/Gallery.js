import React, { useEffect, useState } from "react";
import { Lightbox, initTE } from "tw-elements";
const Gallery = ({ activity, heading }) => {
  useEffect(() => {
    initTE({ Lightbox });
  });
  return (
    <section className=" mt-14 max-sm:mt-10 ">
      <div>
        <h1 className="text-black text max-md:text-5xl max-sm:text-3xl text-center mb-24 max-sm:mb-10">
          {heading}
        </h1>
        <div className="flex flex-col items-center w-[80%] m-auto">
          <div className="space-y-6" data-te-lightbox-init>
            <div className="grid grid-cols-3 m-auto max-lg:grid-cols-2  gap-6 max-sm:gap-3">
              <div className="p-3 border-[1px]">
                <img
                  src="/Images/MP/1.png"
                  alt="#img"
                  className=" hover:opacity-30 cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
                />
              </div>
              <div className="">
                <img src="/Images/MP/2.png" alt="#img" />
              </div>
              <div className="">
                <img src="/Images/MP/3.png" alt="#img" />
              </div>
            </div>
            <div
              className={`grid grid-cols-2 max-lg:grid-cols-1  ${
                activity ? "hidden" : ""
              } gap-6  max-sm:gap-3`}
            >
              <div className="">
                <img
                  src="/Images/MP/4.png"
                  alt="#img"
                  className="w-full"
                />
              </div>
              <div className="w-full">
                <img
                  src="/Images/MP/23.1.png"
                  alt="#img"
                  className="w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-6 max-sm:gap-3   ">
              <div className="">
                <img
                  src="/Images/MP/9.png"
                  alt="#img"
                  className="w-full"
                />
              </div>
              <div className="w-full">
                <img
                  src="/Images/MP/13.png"
                  alt="#img"
                  className="w-full"
                />
              </div>
              <div className="w-full">
                <img
                  src="/Images/MP/11.png"
                  alt="#img"
                  className="w-full"
                />
              </div>
              <div className="w-full">
                <img
                  src="/Images/MP/12.png"
                  alt="#img"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

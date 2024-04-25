import React from "react";

const News = () => {
  return (
    <>
      <div className="">
        <p className="text-8xl text-left p-10  max-md:text-6xl max-sm:text-4xl">
          News & Blogs
        </p>
        <div className="grid grid-cols-2 pl-10 pr-10 pb-10 gap-5 2xl:flex 2xl:justify-center max-lg:grid-cols-1">
          <div className="flex shadow-xl w-fit max-md:flex-col max-md:w-full">
            <img
              className="max-md:h-[400px] max-sm:h-[250px]"
              src="./Images/Blog1.png"
              alt=""
            />

            <div className="flex text-left flex-col gap-10  p-10">
              <p className="font-semibold max-md:text-2xl">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <p className=" text-[#757575] max-md:text-xl">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et
              </p>
              <button className="w-fit font-semibold max-md:2xl">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="flex shadow-xl w-fit max-md:flex-col max-md:w-full">
            <img
              className="max-md:h-[400px] max-sm:h-[250px]"
              src="./Images/Blog2.png"
              alt=""
            />

            <div className="flex text-left flex-col gap-10  p-10">
              <p className="font-semibold max-md:text-2xl">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <p className=" text-[#757575] max-md:text-xl">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et
              </p>
              <button className="w-fit font-semibold max-md:2xl">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default News;

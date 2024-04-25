import React from "react";
import { Link } from "react-router-dom";

const Banner5 = () => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        style={{ backgroundImage: "url('/Images/banner3.png')" }}
        className=" bg-cover bg-center bg-no-repeat h-[1200px]  shadow-xl  max-lg:h-[500px]"
      >
        <div
          className="homeHeading   w-fit text-left max-lg:text-[50px] max-sm:text-[35px]"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1500"
        >
          <p className=" pt-40 pl-20 pr-20 max-lg:pt-20 max-lg:pl-10 max-lg:pr-10">
            Feel warm with <br />
            our yarns
          </p>
        </div>
        <div className="flex text-2xl  items-center text-left  justify-between px-20 max-lg:px-10 max-sm:py-5 mt-10 max-sm:mt-5 ">
          <Link to="/Yarn" div className="flex gap-2 font-medium">
            <p>Explore</p> <img src="/Images/icon.png" alt="" />
          </Link>

          {/* <div className='max-md:hidden'>  <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed<br /> do eiusmod tempor  Lorem<br /> ipsum dolor sit amet,</p></div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner5;

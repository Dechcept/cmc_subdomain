import React, { useState } from "react";
import Testimonial from "../Componets/Testimonial";
import Process from "../Componets/Process";
import Banner5 from "../Componets/Banner5";
import Blogslider from "../Componets/Blogslider";
import { Link } from "react-router-dom";
import BDandCMC from "../Componets/BDandCMC";
import MainLayout from "../Main";
import Popup from "../Componets/Popup";


const Home = (props) => {
  const [isHovered, setisHovered] = useState(false);

  // const HandleMouse = () => {
  //   setisHovered(!isHovered);
  //   Aos.init();
  // };

  return (
    <MainLayout>
       <Popup/>
      
      <div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ backgroundImage: "url('/Images/m1.jpg')" }}
          className=" bg-cover bg-center bg-no-repeat h-[1200px]  shadow-xl  max-lg:h-[500px] mt-32 relative"
        >
          <div
            className="inset-0 h-full bg-white bg-opacity-25"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1500"
          >
            <div className={`homeHeading  w-full z-50  `}>
              <p
                className={`font-sans tracking-widest pt-40 pl-20 pr-20 max-lg:pt-20 max-lg:pl-10 max-lg:pr-10 z-50 `}
              >
                Comfort is in our product
              </p>
              {/* <div className=" flex gap-4 text-2xl px-20 py-10 items-center max-sm:px-10 max-sm:py-5">
              <div className="bg-slate-200 shadow-2xl transform p-1 bg-opacity-100 hover:scale-150 duration-500 rounded-full">
                <img
                  className="h-7 "
                  src="/Images/play-circle.svg"
                  alt="#img"
                />
              </div>
              <p>Watch Video</p>
            </div> */}

              <div
                className="flex text-2xl  items-center text-left  justify-between px-20 max-lg:px-10 max-sm:py-5 mt-10 max-sm:mt-5"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                <Link to="/Mattress_fabrics" className="flex gap-2 font-medium">
                  <button>Explore</button> <img src="/Images/icon.png" alt="" />
                </Link>

                {/* <div className="max-md:hidden">
            {" "}
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit, sed
              <br /> do eiusmod tempor Lorem
              <br /> ipsum dolor sit amet,
            </p>
          </div> */}
              </div>
            </div>
          </div>
        </div>
        <Banner5 />
        <div
          style={{ backgroundImage: "url('/Images/bg_yarn.webp')" }}
          className=" bg-cover bg-center bg-no-repeat h-[1200px]  shadow-xl  max-lg:h-[500px]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1500"
            className="homeHeading   w-fit text-left max-lg:text-[50px] max-sm:text-[35px]"
          >
            <p className=" pt-40 pl-20 pr-20 max-lg:pt-20 max-lg:pl-10 max-lg:pr-10">
              Strings to bind <br />
              our bond
              <br /> together
            </p>
          </div>
          <div className="flex text-2xl  items-center text-left  justify-between px-20 max-lg:px-10 max-sm:py-5 mt-10 max-sm:mt-5">
            <Link to="/Sewing_Thread" className="flex gap-2 font-medium">
              <button>Explore</button> <img src="/Images/icon.png" alt="" />
            </Link>

            {/* <div className="max-md:hidden">
            {" "}
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit, sed
              <br /> do eiusmod tempor Lorem
              <br /> ipsum dolor sit amet,
            </p>
          </div> */}
          </div>
        </div>
        <div
          style={{ backgroundImage: "url('/Images/pillow.png')" }}
          className=" bg-cover bg-center bg-no-repeat h-[1200px]  shadow-xl relative  max-lg:h-[500px]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div
            className="inset-0 h-full bg-white bg-opacity-25"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1500"
          >
            <div className="homeHeading   w-fit  ">
              <p className="font-sans pt-60 pl-20 pr-20 max-lg:pt-20 max-lg:pl-10 max-lg:pr-10">
                Sleep with <br />
                sweet dream
              </p>
            </div>

            <div className="flex text-2xl  items-center text-left  justify-between px-20 max-lg:px-10 max-sm:py-5 mt-10 max-sm:mt-5">
              <div className="flex gap-2 font-medium">
                <Link
                  to="/MattressPillow_cover"
                  className="flex gap-2 font-medium"
                >
                  <button>Explore</button>
                  <img src="/Images/icon.png" alt="" />
                </Link>{" "}
              </div>

              {/* <div className="max-md:hidden">
              {" "}
              <p>
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit, sed
                <br /> do eiusmod tempor Lorem
                <br /> ipsum dolor sit amet,
              </p>
            </div> */}
            </div>
          </div>
        </div>

        {/* <Process /> */}

        {/* <Testimonial /> */}

        {/* <Blogslider /> */}
        <BDandCMC isShow={false} />
      </div>
    </MainLayout>
  );
};

export default Home;

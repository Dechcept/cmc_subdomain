import React, { useState } from "react";
import Testimonial from "../Componets/Testimonial";
import Process from "../Componets/Process";
import Banner5 from "../Componets/Banner5";
import Blogslider from "../Componets/Blogslider";
import { Link } from "react-router-dom";
import BDandCMC from "../Componets/BDandCMC";
import MainLayout from "../Main";
import Popup from "../Componets/Popup";
import Slider from "../Componets/Slider";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Button from "../Componets/Button";
import Leftbanner from "../Componets/Leftbanner";
import Rightbanner from "../Componets/Rightbanner";


const Data = [
  {
    id: 1,
    No: "01",
    title: "Trendy Designs",
    para: "Our collection offers a blend of aesthetics and comfort to suit various styles.",
    src: "/Images/MP/8.png",
  },
  {
    id: 2,
    No: "02",
    title: "Diverse Fabric Options",
    para: "We offer a wide selection of durable and stylish fabrics in various colors and textures, all designed in-house.",
    para2: "Diverse Fabric Options For Border and Panels",
    src: "/Images/MP/7.png",
  },
  {
    id: 3,
    No: "03",
    title: "Exporting Excellence",
    para: "We’re a trusted partner for OEM projects, capable of meeting the demands of large companies globally.",
    src: "/Images/MP/6.png",
  },
  {
    id: 4,
    No: "04",
    title: "High Production Capacities",
    para: " Various kinds of SKUs available All your sizes can be managed in one place",
    para3:
      "Various kinds of sizes can be made and maintained in stock at our conducive new plant for various mattress heights which leaves you trouble free from inventory problems.",
    src: "/Images/MP/1.png",
  },
];

const Home = (props) => {
  const [isHovered, setisHovered] = useState(false);

  // const HandleMouse = () => {
  //   setisHovered(!isHovered);
  //   Aos.init();
  // };

  return (
    <MainLayout>
      <Popup />

      <div>
        <div>
          {/* <div className="flex mt-32 justify-center items-center overflow-hidden">
            <div className="w-[50%] ">
              <div
                className="inset-0 h-full "
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <p className="text-[50px] leading-[1.1em] font-sans tracking-widest pl-20  max-lg:pt-20 max-lg:pl-10 max-lg:pr-10 z-50">Comfort is in our product</p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1000"

                className=" "
              >
                <p className="text-[18px] font-sans tracking-widest pl-20 pr-20 pt-4 max-lg:pl-10 max-lg:pr-10 z-50">At CMC, we offer a vast selection of high-quality mattress fabrics, including warp knit, circular knit jacquard, laminated fabrics, and single jersey inner fabrics, all designed to enhance comfort and durability.</p>
              </div>
              <div
                className="flex text-2xl  items-center text-left  justify-between px-20 max-lg:px-10 max-sm:py-5 mt-10 max-sm:mt-5 overflow-hidden"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                <Link to="/Mattress_fabrics" className="flex gap-2 font-medium ">
                  <button>Explore</button> <img src="/Images/icon.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="w-[50%] overflow-hidden">
              <img className="transition duration-300 ease-in-out hover:scale-105 overflow-hidden" src="/Images/Mattress/banner_img.webp" alt="" />
            </div>
          </div> */}
          <Leftbanner Top={true} title={"Comfort is in our product"} Description={"At CMC, we offer a vast selection of high-quality mattress fabrics, including warp knit, circular knit jacquard, laminated fabrics, and single jersey inner fabrics, all designed to enhance comfort and durability."} url={"/Mattress_fabrics"} src={"/Images/Mattress/banner_img.webp"} />
        </div>
        <div>
          <Rightbanner title={"Feel warm with our yarns"} Description={"We use top-quality raw materials and advanced machinery to produce texturized yarns. These yarns, ranging from 30D-1800D, are available in various forms like intermingled, non-intermingled, bright, semi-dull, and full dull, and dope dyed in nylon and polyester."} src={"/Images/Yarn/5.jpg"} url={"/Yarn"}/>
        </div>
        <div>
          <Leftbanner title={"Strings to bind our bond together"} Description={"Welcome to CMC Threads, your go-to for high-quality, high tenacity threads. We provide superior threads for the textile sector, creative projects, and major OEM sewing thread brands."} url={"/Sewing_Thread"} src={"/Images/Sweing/Thred-cmc5.jpg"}/>
        
        </div>
        <div>
          <Rightbanner title={"Sleep with sweet dream"}  Description={"At CMC, we’re a top manufacturer of quality mattress and pillow covers, committed to innovation and sustainability."} url={"/MattressPillow_cover"} src={"/Images/MP/MP_slider3.webp"}/>
        </div>
        <div>
          <Leftbanner title={"Upholstery Fabrics"} Description={"At CMC, we offer a vast selection of high-quality mattress fabrics, including warp knit, circular knit jacquard, laminated fabrics, and single jersey inner fabrics, all designed to enhance comfort and durability."} url={"/Upholstery_Fabrics"} src={"/Images/Upholstery/UP_slider3.webp"}/>
          
        </div>

        <div className="m-10"></div>
        <Link to="/partnership">
          <div className="flex justify-center bg-black py-10 ">
            <div className="flex justify-center gap-16 max-xl:flex-col  max-lg:gap-10 max-sm:gap-5 w-fit ">
              <div className=" flex flex-col items-start my-5">
              
              </div>
              <div className="relative w-full h-full max-sm:h-fit ">
                <img
                  src="/Images/cmc&BD.png"
                  alt="#img"
                  className="w-full h-full transition duration-300 ease-in-out hover:scale-105 "
                />
              </div>
              <div className="pt-10">
                <div
                  className="inset-0 h-full "
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >

                  <h1 className="text-[#FFFFFF] w-[565px] max-xl:w-full  font-semibold text-[40px]   max-sm:text-3xl leading-[48px] max-sm:leading-[120%] tracking-widest font-sans">
                    Partnership
                    With BekaertDeslee
                  </h1>

                  <p
                    className={` max-sm:mt-5 w-[560px]  max-xl:w-full    text-[#FFFFFF] font-normal text-[20px]  leading-[35px] tracking-wider mt-5 `}
                  >
                    We are proud to announce that we have established a joint venture with BekaertDeslee, the world-leading company in the mattress fabrics and covers industry, proudly announces a major achievement in its global expansion strategy with the establishment of a joint venture in India.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Link>
        <div className="mt-10">
          <h1 className="text-black text max-md:text-5xl max-sm:text-3xl text-center mb-24 max-sm:mb-10">
            Our Gallery
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
                className={`grid grid-cols-2 max-lg:grid-cols-1  gap-6  max-sm:gap-3`}
              >
                <div className="">
                  <img
                    src="/Images/G1.webp"
                    alt="#img"
                    className="w-full"
                  />
                </div>
                <div className="w-full">
                  <img
                    src="/Images/G3.webp"
                    alt="#img"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-6 max-sm:gap-3   ">
                <div className="">
                  <img
                    src="/Images/Yarn/4.jpg"
                    alt="#img"
                    className="w-full"
                  />
                </div>
                <div className="w-full">
                  <img
                    src="/Images/Yarn/3.jpg"
                    alt="#img"
                    className="w-full"
                  />
                </div>
                <div className="w-full">
                  <img
                    src="/Images/Yarn/2.jpg"
                    alt="#img"
                    className="w-full"
                  />
                </div>
                <div className="w-full">
                  <img
                    src="/Images/Yarn/1.jpg"
                    alt="#img"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonial />
        <div className="h-fit flex flex-col justify-center  items-center max-sm:items-start gap-7 mt-36 border-double">
          <h1 className="text  max-lg:text-[60px] max-sm:text-[40px]">
            EXHIBITION
          </h1>

        </div>
        <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-10 p-[5vw] max-lg:p-2 max-lg:mt-20 justify-center items-center" >
          <div className="h-[50vh] max-xl:h-[30vh] col-span-1 ">
            <div className="p-5 max-lg:p-2">
              <h1 className="text-[1.5rem] max-lg:text-[20px] font-bold uppercase tracking-wide">
                India Mattresstech Expo
              </h1>
              <p className="text-[16px] ">22nd - 25th February, 2024</p>
              <p className="text-[16px]">Bengaluru, India</p>
              <div className="mt-5">
                <Link to="/Exhibition">
                  <Button BtnName={"View More"} />
                </Link>
              </div>


            </div>
          </div>
          <div className="h-[70vh] w-full b col-span-2 max-xl:col-span-1">
            <Swiper
              slidesPerView={1}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
              className="h-[70vh] w-full"
            >
              {Array.from({ length: 12 }).map((_, index, item) => {
                return (
                  <SwiperSlide className="" key={index}>
                    <img
                      src={`/Images/exibution/g${index + 1}.webp`}
                      className="h-full w-full object-cover max-lg:object-contain"
                      alt=""
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        {/* <Banner5 />
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
            </Link> */}

        {/* <div className="max-md:hidden">
            {" "}
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit, sed
              <br /> do eiusmod tempor Lorem
              <br /> ipsum dolor sit amet,
            </p>
          </div> */}
        {/* </div>
        </div> */}
        {/* <div
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
              </div> */}

        {/* <div className="max-md:hidden">
              {" "}
              <p>
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit, sed
                <br /> do eiusmod tempor Lorem
                <br /> ipsum dolor sit amet,
              </p>
            </div> */}
        {/* </div>
          </div>
        </div> */}

        {/* <Process /> */}

        {/* <Testimonial /> */}

        {/* <Blogslider /> */}
        <BDandCMC isShow={false} />
      </div>
    </MainLayout>
  );
};

export default Home;

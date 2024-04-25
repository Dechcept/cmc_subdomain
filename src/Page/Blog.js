import React, { useEffect } from "react";
import Jobbox from "../Componets/Career/Jobbox";
import Slider from "../Componets/Slider";
import { useState } from "react";
import Aos from "aos";
import MainLayout from "../Main";
import axios from "axios";
import toast from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import Blogbox from "../Componets/BlogBox";

const Blogpage = (props) => {
  function handlescroll() {
    Aos.refresh();
  }
  const Data = [
    {
      id: 1,
      No: "01",
      title: "Unparalleled Designs",
      para: "Explore our wide range of captivating jacquard designs, from timeless classics to contemporary masterpieces, adding sophistication to any mattress.",
      src: "/Images/Mattress/1.png",
    },
    {
      id: 2,
      No: "02",
      title: "Product Innovation",
      para: "We're at the forefront of product innovation, incorporating cutting-edge materials and unique weaving techniques to deliver visually stunning and comfortable fabrics.",
      src: "/Images/Mattress/2.png",
    },
    {
      id: 3,
      No: "03",
      title: "Single Jacquard and Double Jacquard",
      para: "Experience the beauty and versatility of our single and double jacquard fabrics, catering to all tastes and design preferences for all grades of mattresses.",
      src: "/Images/Mattress/3.png",
    },
    {
      id: 4,
      No: "04",
      title: "High-End Panels and Borders",
      para: "Our high-end panels and borders add a refined and luxurious finish to your mattress, making it a true work of art. ",
      src: "/Images/Mattress/4.png",
    },
    {
      id: 5,
      No: "05",
      title: "Customization",
      para: "We offer extensive customization options for our mattress fabrics, creating custom patterns, colours, and finishes that meet your exact specifications. ",
      src: "/Images/Mattress/5.png",
    },
    {
      id: 6,
      No: "06",
      title: "Exceptional Quality",
      para: `We're committed to delivering unparalleled quality, sourcing the finest materials and ensuring our products meet the highest industry standards.Explore our diverse collection of knitted jacquard fabrics, high-end panels, and borders.Contact us today to discuss your requirements or inquire about customization options.Explore the various type of value additions at CMC mattress fabrics. `,
      src: "/Images/Mattress/6.png",
    },
  ];

  const [jobData, setjobData] = useState([]);
  console.log(!jobData);
  useEffect(() => {
    getCareerData();
  }, []);

  const getCareerData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/detail/getJobdetail`
      );
      const { data } = res;
      setjobData(data.jobdetails);
    } catch (error) {
      console.error("Error fetching job data:", error);
      toast.error("Something went wrong while fetching job data");
    }
  };

  return (
    <MainLayout>
      <div onScroll={handlescroll}>
        <ToastContainer />

        <div className="overflow-hidden">
          <div
            className="flex flex-col h-[400px] max-sm:h-[200px]  justify-center items-center gap-36 max-lg:gap-20 p-3 mt-24"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1 className="text-[80px] font-bold max-sm:text-[33px] tracking-[8px] leading-[100%] w-[80%]  max-sm:w-full">
              Blog
            </h1>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="  px-10" data-aos="fade-up" data-aos-duration="2000">
            <div className="">
              <Blogbox job={Data} />
            </div>
          </div>
        </div>
        {/* <Slider heading={"Our Benefits"} list={Data} /> */}
        {/* <BDandCMC isShow={false} /> */}
      </div>
    </MainLayout>
  );
};

export default Blogpage;

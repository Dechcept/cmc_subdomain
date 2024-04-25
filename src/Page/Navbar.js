import React, { useState } from "react";
import Bar from "../Componets/Bar";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

import { RxCross1 } from "react-icons/rx";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Navbar = () => {
  const [showDrop, SetshowDrop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    SetshowDrop(false);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };
  return (
    <nav
      className={`p-7 py-10 max-sm:p-3 ${
        isOpen ? "fixed z-50" : "absolute"
      } top-0 w-full  `}
    >
      <div className="flex justify-around max-xl:justify-between items-center gap-10 ">
        <Link to="/" className={`logo ${isOpen && "z-50"}`}>
          <div className="flex flex-col items-center gap-1">
            <img
              src="/Images/CMC-Group-Logo.png"
              alt="#img"
              className="h-[80px] w-[60px]"
            />
          </div>
        </Link>
        <div className="category max-xl:hidden">
          <ul className="flex  items-center">
            <Link to="/Yarn" className="navitem border-r-[1px]">
              YARN
            </Link>
            <Link to="/Mattress_fabrics" className="navitem border-r-[1px]">
              MATTRESS FABRICS
            </Link>
            <Link to="/Sewing_Thread" className="navitem border-r-[1px]">
              SEWING THREAD
            </Link>
            <Link
              to="/MattressPillow_cover"
              className="navitem border-r-[1px] "
            >
              MATTRESS & PILLOW COVERS
            </Link>
            <Link to="/Upholstery_Fabrics" className="navitem border-r-[1px]">
              UPHOLSTERY FABRICS
            </Link>
            <Link to="/partnership" className="navitem">
              PARTNERSHIP
            </Link>
          </ul>
        </div>
        <div
          className={`fixed inset-y-0 right-0 z-40 w-full max-md:w-full h-fit  bg-white text-white transform transition-transform duration-300  flex flex-col justify-center items-center  gap-5  p-16  max-sm:p-3 ${
            isOpen ? "translate-x-0 max-md:translate-x-0 :" : "translate-x-full"
          }`}
        >
          {/* <Link to="/about" className={`logo absolute top-0 p-4`}>
            <img src="/Images/logo.webp" alt="#img" />
          </Link> */}

          <ul className=" flex flex-col items-center max-sm:items-center  gap-4 max-sm:gap-3 mt-20">
            <li className="mb-2">
              <Link
                to={"/home"}
                className=" a  text-[28px] max-sm:text-[22px] text-[#4D4D4D] font-semibold leading-[120%] tracking-[1.4px]  hover:text-black"
                onClick={closeSidebar}
              >
                HOME
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/about"
                className=" a text-[28px] max-sm:text-[22px]  text-[#4D4D4D] font-semibold leading-[120%] tracking-[1.4px]  hover:text-black"
                onClick={closeSidebar}
              >
                ABOUT US
              </Link>
            </li>
            <li
              className="mb-2 relative hidden max-xl:block "
              onClick={() => {
                SetshowDrop(!showDrop);
              }}
            >
              <a
                to="/product"
                className=" a text-[28px]  max-sm:text-[22px]  text-[#4D4D4D] font-semibold leading-[120%] tracking-[1.4px]  hover:text-black"
              >
                PRODUCT
              </a>
            </li>
            {showDrop ? (
              <ul className="flex flex-col   relative  bg-white   justify-center transform  transition  duration-800 ease-in-out text-black">
                <li
                  className=" hover:bg-gray-100 px-3  text-center text-[20px] "
                  onClick={closeSidebar}
                >
                  <Link to="/Yarn" className="a">
                    Yarn
                  </Link>
                </li>
                <li
                  className="hover:bg-gray-100 p-2 text-center text-[20px]"
                  onClick={closeSidebar}
                >
                  <Link to="/Mattress_fabrics" className="a">
                    Mattress Fabrics 
                  </Link>{" "}
                </li>
                <li
                  className="hover:bg-gray-100 p-2 text-center text-[20px]"
                  onClick={closeSidebar}
                >
                  <Link to="/Sewing_Thread" className="a">
                    Sewing Thread
                  </Link>
                   {" "}
                </li>
                <li
                  className="hover:bg-gray-100 p-2 text-center text-[20px]"
                  onClick={closeSidebar}
                >
                  <Link to="/MattressPillow_cover" className="a">
                    Mattress & Pillow Covers
                  </Link>
                   {" "}
                </li>
                <li
                  className="hover:bg-gray-100 p-2 text-center text-[20px]"
                  onClick={closeSidebar}
                >
                  <Link to="/Upholstery_Fabrics" className="a">
                    Upholstery Fabrics{" "}
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}
            {/* <li className="mb-2">
              <Link
                to="/Sustainable"
                className="a text-[28px] max-sm:text-[22px]  text-[#4D4D4D] font-semibold leading-[120%] tracking-[1.4px]  hover:text-black"
                onClick={closeSidebar}
              >
                SUSTAINABLE
              </Link>
            </li> */}
            <li className="mb-2">
              <Link
                to="/partnership"
                className="a text-[28px] max-sm:text-[22px]  text-[#4D4D4D] font-semibold leading-[120%] tracking-[1.4px]  hover:text-black"
                onClick={closeSidebar}
              >
                PARTNERSHIP
              </Link>
            </li>
            {/* <li className="mb-2">
              <Link
                to="/Career"
                className=" text-[28px] max-sm:text-[22px]  text-[#4D4D4D] font-semibold leading-[120%] tracking-[1.4px]  hover:text-black"
                onClick={closeSidebar}
              >
                CAREER
              </Link>
            </li> */}
            <li className="mb-2">
              <Link
                to="/Certifications"
                className=" text-[28px] max-sm:text-[22px]  text-[#4D4D4D] font-semibold leading-[120%] tracking-[1.4px]  hover:text-black"
                onClick={closeSidebar}
              >
                CERTIFICATIONS
              </Link>
            </li>
            {/* <li className="mb-2">
              <Link
                to="./Career"
                className=" text-[28px] max-sm:text-[22px]  text-[#4D4D4D] font-semibold leading-[120%] tracking-[1.4px]  hover:text-black"
                onClick={closeSidebar}
              >
                CAREER
              </Link> */}
            {/* </li>
            <li className="mb-2">
              <Link
                // to="#"
                className=" text-[28px] max-sm:text-[22px]  text-[#4D4D4D] font-semibold leading-[120%] tracking-[1.4px]  hover:text-black"
                onClick={closeSidebar}
              >
                EXIBUTION
              </Link>
            </li> */}
            <li className="mb-2">
              <Link
                to="/Contact"
                className="a text-[28px] max-sm:text-[22px]  text-[#4D4D4D] font-semibold leading-[120%] tracking-[1.4px]  hover:text-black"
                onClick={closeSidebar}
              >
                CONTACT US
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/Exhibition"
                className="a text-[28px] max-sm:text-[22px]  text-[#4D4D4D] font-semibold leading-[120%] tracking-[1.4px]  hover:text-black"
                onClick={closeSidebar}
              >
                EXHIBITION
              </Link>
            </li>
          </ul>
          <h1 className="para text-[#4D4D4D] text-[22px]">
            {" "}
            Call Us: <br />
          </h1>
          <div className="space-x-5 max-md:space-x-0  flex max-md:flex-col  max-md:items-center  ">
            <div className="para text-[#4D4D4D] text-[22px] items-center">
              <span className="text-[22px] text-black font-normal leading-[150%] tracking-[2.8px]">
                +91 93743 30553
              </span>
            </div>
            <span className=" text-3xl font-normal text-black max-md:hidden">
              |
            </span>
            <div>
              <span className="para text-[18px] text-[#4D4D4D] ">
                shikhar.yadav@cmctextile.com
              </span>
            </div>
          </div>

          <div className="flex max-sm:justify-center gap-6">
            <a
              href="https://www.linkedin.com/company/101442619/admin/feed/posts/?feedType=following"
              target="_blank"
              className="flex justify-center items-center cursor-pointer bg-black h-10 w-10 rounded-full text-white transition duration-300  ease-in-out hover:bg-white border-[1px] hover:text-black"
            >
              <FaLinkedinIn className="" />
            </a>
            <a
              href="https://www.instagram.com/cmc__group/"
              target="_blank"
              className="flex justify-center items-center cursor-pointer bg-black h-10 w-10 rounded-full text-white transition duration-300  ease-in-out hover:bg-white border-[1px] hover:text-black"
            >
              <FaInstagram className="" />
            </a>
          </div>
        </div>

        <div className="bar   z-50 sticky top-0" onClick={toggleSidebar}>
          {isOpen ? <RxCross1 className="text-4xl " /> : <Bar />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

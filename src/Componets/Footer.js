import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const useFulLink = [
    { title: "About", link: "about" },
    { title: "Sustainable", link: "Sustainable" },
    { title: "Contact", link: "Contact" },
  ];
  const About = [
    { title: "Yarn", link: "Yarn" },
    { title: "Mattress Fabrics ", link: "Mattress_fabrics" },
    { title: "Sewing Thread", link: "Sewing_Thread" },
    { title: "Mattress & Pillow Covers", link: "MattressPillow_cover" },
    { title: "Upholstery Fabrics", link: "Upholstery_Fabrics" },
  ];
  return (
    <footer className="pt-20">
      <div
        className="h-fit flex flex-col px-10 max-sm:p-3 py-5  bg-zinc-950 text-white    rounded-tr-md rounded-tl-md  "
      >
        <div className="flex justify-around items-start  mt-4 max-lg:flex-wrap max-md:grid max-md:grid-cols-2 max-lg:gap-4 max-sm:grid-cols-1 ">
        
          <ul className="flex flex-col items-start gap-1  text-white ">
            <li className="   text-left text-[20px] border-b-2 mb-3 border-zinc-500 font-medium">
              Useful Links
            </li>

            {useFulLink.map((item) => {
              return (
                <div class="group inline-block relative overflow-hidden cursor-pointer">
                  <Link to={`/${item.link}`} className=" text-center text-[20px] font-thin">
                    {item.title}
                  </Link>
                   {" "}
                  <span class="absolute bottom-0 left-0 w-0 h-[0.5px] bg-zinc-400  transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              );
            })}
          </ul>
          <ul className="flex flex-col gap-1 items-start text-white">
            <li className="   text-left text-[20px] border-b-2 mb-3 border-zinc-500  font-medium">
              Products
            </li>

            {About.map((item) => {
              return (
                <div class="group inline-block relative overflow-hidden cursor-pointer">
             <Link to={`/${item.link}`} className=" text-center text-[20px] font-thin">
                    {item.title}
                  </Link>
                   {" "}
                  <span class="absolute bottom-0 left-0 w-0 h-[0.5px] bg-zinc-400  transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              );
            })}
          </ul>

          <div className="flex flex-col gap-2 items-start  ">
            <span className="text-2xl  border-b-2 mb-3 border-zinc-500  font-medium">
              {" "}
              Address:
            </span>
            <p className="text-[20px]  font-thin  w-[500px] max-sm:w-full">
              <span className=" font-sans text-xl font-thin ">Office : </span>
              Survey No. 217/13, Village Dabra D& NH, Trade House,
              Surat-395002, Gujarat, India
            </p>
            <p className="text-[20px] font-thin   w-[500px] max-sm:w-full">
              <span className=" font-sans text-xl font-thin">Factory : </span>
              Dadra, Dadra and Nagar Haveli and Daman and Diu 396193
            </p>

            <div className="flex gap-4">
              <div className="flex justify-center items-center bg-black h-8 w-8 cursor-pointer rounded-full text-white transition duration-300  ease-in-out hover:bg-white border-[1px] hover:text-black">
                <a
                  href="https://www.linkedin.com/company/101442619/admin/feed/posts/?feedType=following"
                  target="_blank"
                >
                  <FaLinkedinIn className="" />
                </a>
              </div>
              <div className="flex justify-center items-center bg-black h-8 w-8 cursor-pointer  rounded-full text-white transition duration-300  ease-in-out hover:bg-white border-[1px] hover:text-black">
                <a href="https://www.instagram.com/cmc__group/" target="_blank">
                  <FaInstagram className="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-10 ">
          <span className="text-base font-thin tracking flex justify-center items-center">&copy; CMC | All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

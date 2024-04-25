import React, { useEffect } from "react";
import MainLayout from "../Main";
import Slider from "../Componets/Slider";
import { Lightbox, initTE } from "tw-elements";

import "swiper/css";
import "swiper/css/navigation"; // Add this line if you need Swiper navigation styles
import "swiper/css/pagination"; // Add this line if you need Swiper pagination
import BDtimeline from "../Componets/BDtimeline";
import JointSlider from "../Componets/JointSlider";
const JointVenture_About = () => {
  useEffect(() => {
    initTE({ Lightbox });
  });
  const details = [
    {
      id: 1,
      No: "01",
      title: "Tape Edge Cover",
      para: "A tape edge cover has three parts: a top panel, a border and a bottom panel. The border is as tall as the mattress. The top and bottom panels are sewn to the border with a tape or piping.",
      img: "/Images/joint/Tape.png",
    },
    {
      id: 2,
      No: "02",

      title: "Pocket Cover",
      para: "A pocket cover has two parts: a top and bottom panel, usually in the same fabric, with a zipper between them. The panels hang over the border.",
      img: "/Images/joint/pocket.png",
    },
    {
      id: 3,
      No: "03",
      title: "Waterfall cover",
      para: "A waterfall cover has a bottom panel and a top panel that extends to the border. The top panel and border usually have different fabrics. The bottom panel usually begins a few cm past the border edge.",
      img: "/Images/joint/waterfall.png",
    },
    {
      id: 4,
      No: "04",
      title: "Reversed Waterfall Cover",
      para: " A reversed waterfall cover has a top panel that ends at the border edge. The top panel and border usually have different fabrics. The bottom panel usually begins a few cm past the border edge..",
      img: "/Images/joint/reverse.png",
    },
    {
      id: 5,
      No: "05",
      title: "Topper  cover",
      para: "Topper is a slender mattress with a maximum thickness of 8 cm.",
      img: "/Images/joint/Topper.png",
    },
    {
      id: 6,
      No: "06",
      title: "Pillow Top Cover",
      para: "Any cover for a mattress with an additional cushioning layer on top.",
      img: "/Images/joint/pillowcover.png",
    },
  ];
  return (
    <MainLayout>
      <section>
        <div>
          <div>
            <div>
              <div
                // style={{ backgroundImage: `url('/Images/CMC&BD.png')` }}
                className="mt-32"
              >
                <div className="bg-stone-100 h-52 max-sm:h-24 flex justify-center items-center  ">
                  <h2 className="p-3 text-4xl max-sm:text-xl text-center tracking-widest uppercase font-semibold">
                    About Our Partnership
                  </h2>
                </div>
                <div className="flex max-lg:flex-col-reverse justify-center">
                  <div className="flex justify-center items-center ">
                    <div className=" flex text-center justify-center gap-10 max-sm:gap-5  homeHeading tracking-widest p-5 ">
                      <h2 className="w-[400px] max-xl:h-full my-10  max-lg:text-[60px] max-sm:text-3xl tracking-widest flex justify-center gap-5 max-sm:gap-5 ">
                        <img
                          src="/Images/jointlogo.jpg"
                          alt="#img"
                          className="w-[400px]"
                        />
                      </h2>
                    </div>
                  </div>

                  <div className=" bg-white h-full w-full ">
                    <img
                      src="/Images/cmc&BD.png"
                      alt="#img"
                      className="w-full max-lg:w-full h-[520px]  max-sm:h-full"
                    />
                  </div>
                </div>

              <div className="flex justify-center">
              <div
             className="w-[90%] max-sm:w-full max-sm:p-3"
                  style={{ whiteSpace: "pre-line" }}
                >
                  <div className=" font-sans">
                    <h1 className="font-sans h-[30px] text-[#442173] font-medium text-[28px] leading-[30px] tracking-wider my-5">
                      WHO WE ARE
                    </h1>
                    <h2 className="  my-10 text-[40px]  font-sans  max-xl:w-full leading-[120%]   font-semibold  max-lg:tracking-[4px]  border-black  max-sm:text-2xl tracking-widest  max-sm:tracking-wider ">
                      CMC Textiles and BekaertDeslee: A New Partnership for the
                      Indian Mattress Market
                    </h2>
                  </div>
                  <div className="flex flex-col justify-end max-lg:justify-normal items-end space-y-5 mt-10">
                    <p className="w-[50vw] max-lg:w-full  max-md:h-full font-sans  font-normal text-[20px] leading-[150%] tracking-[2px]">
                      We are proud to announce that we have established a joint
                      venture with BekaertDeslee, the world-leading company in
                      the mattress fabrics and covers industry, proudly
                      announces a major achievement in its global expansion
                      strategy with the establishment of a joint venture in
                      India. <br />
                      <br />
                      The company strengthens its global position and growth
                      potential by entering one of the world’s biggest mattress
                      markets with this strategic move. <br /> <br />
                      CMC Textiles is a family-owned business with nearly 200
                      employees and over 20 years of experience in yarn
                      texturizing and mattress fabric manufacturing. Led by the
                      Yadav family, CMC Textiles has a strong reputation for
                      quality and service in the Indian market. <br /> <br />
                      CMC Textiles and BekaertDeslee, together will leverage our
                      combined expertise and strengths to create a world-class
                      manufacturing facility, catering to the large untapped
                      Indian market and some of the most reputed brands across
                      the country.
                      <br /> <br />
                      This strategic move aligns with our ‘Close to you’
                      philosophy, which emphasizes our commitment to
                      understanding and servicing local markets. We will focus
                      on ‘India for India’, tailoring products and services to
                      meet the unique requirements of the Indian consumer.{" "}
                      <br />
                      <br />
                      We are delighted to start this new venture with
                      BekaertDeslee, and we anticipate a successful
                      collaboration that will open a new chapter in our global
                      journey and strengthen our position as a leading player in
                      the international mattress and bedding market.
                      <br /> <br />
                    </p>
                  </div>
                </div>
              </div>

                <div className="">
                  <div className="px-36  max-xl:px-28  max-lg:px-10  max-sm:p-3 mb-10 bg-stone-100 p-10">
                    <h1 className="  my-10 text-[40px]  font-sans  max-xl:w-full leading-[120%]   font-semibold  max-lg:tracking-[4px]  border-black  max-sm:text-2xl tracking-widest  max-sm:tracking-wider ">
                      INTRODUCTION
                    </h1>
                    <div className="flex flex-col justify-end max-lg:justify-normal items-end space-y-5 mt-10">
                      <p className="w-[800px] max-xl:w-[560px] max-sm:w-full  max-md:h-full font-sans  font-normal text-[20px] leading-[150%] tracking-[2px]">
                        This manual explains the cover product and how cut & sew
                        techniques affect its appearance and price. We help our
                        customers create and visualize new mattress covers and
                        concepts using our fabrics and designs. This reduces the
                        options and improves their understanding. Having a clear
                        idea before sampling is good for us too. We can sell
                        fabrics and covers by offering concepts, regardless of
                        who makes the cover.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                  <div    className="w-[90%] max-sm:w-full max-sm:p-3 my-20">
                    <h1 className=" text-left  my-10 text-[40px] uppercase font-sans  max-xl:w-full leading-[120%]   font-semibold  max-lg:tracking-[4px]  border-black  max-sm:text-2xl tracking-widest  max-sm:tracking-wider ">
                      Mattress Manufacturing
                    </h1>
                    <div className=" flex items-center justify-between max-xl:flex-col-reverse gap-10  ">
                      <div>
                        <p className="w-[800px] max-xl:w-full max-md:h-full font-sans  font-normal text-[20px] leading-[150%] tracking-[2px]">
                          This manual explains the cover product and how cut &
                          sew techniques affect its appearance and price. We
                          help our customers create and visualize new mattress
                          covers and concepts using our fabrics and designs.
                          This reduces the options and improves their
                          understanding. Having a clear idea before sampling is
                          good for us too. We can sell fabrics and covers by
                          offering concepts, regardless of who makes the cover.{" "}
                          <br /> <br />
                          Innerspring mattresses used to be common and always
                          tufted. Tufting is a process that prevents the layers
                          from moving and wearing out. It makes the mattress
                          more durable. <br /> <br />
                          BD Solutions makes mattress covers. These covers are
                          shells that can fit any core. We also make pillow
                          covers, protectors and sleeves.
                        </p>
                      </div>
                      <div
                        className="w-[400px] max-sm:w-[300px] h-[400px] max-sm:h-[300px] bg-cover  bg-center bg-no-repeat "
                        style={{
                          backgroundImage: `url('/Images/joint/menu.jpeg')`,
                        }}
                      >
                        {/* <img src="/Images/joint/menu.jpeg" alt="#img" className="h-full w-full" /> */}
                        <div className="bg-slate-600 h-full w-full bg-opacity-25 "></div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="my-10">
                  <JointSlider heading={"Products"} list={details} />
                </div>
              </div>

              <div className="my-20 max-sm:my-10 p-3">
                <h1 className=" text-center max-sm:text-left  my-10 text-[40px] uppercase font-sans  max-xl:w-full leading-[120%]   font-semibold  max-lg:tracking-[4px]  border-black  max-sm:text-2xl tracking-widest  max-sm:tracking-wider ">
                  SOLEU products
                </h1>
                {/* 
                <h1 className="  my-10 text-[40px]  font-sans  max-xl:w-full leading-[120%]   font-semibold  max-lg:tracking-[4px]  border-black  max-sm:text-2xl tracking-widest  max-sm:tracking-wider ">
                      INTRODUCTION
                    </h1> */}
                <p className="max-xl:w-full max-md:h-full font-sans my-10  font-normal text-[20px] leading-[150%] tracking-[2px] px-36 max-lg:px-10 max-sm:p-3">
                  BD Solutions covers any mattress and pillow with ease. Our
                  covers offer a stunning range of design, colour, texture,
                  functionality and fabric. We provide complete solutions and
                  creative packages. Whether you have a design idea or need our
                  advice, we can satisfy your requirements.
                </p>

                <div className="flex justify-center p-3">
                  <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max gap-10">
                    <div className="border-[1px] shadow-lg w-fit rounded-xl ">
                      <img
                        src="/Images/joint/soleu1.jpg"
                        alt="#img"
                        className="h-52 w-full p-5"
                      />
                      <h1 className="text-center text-xl font-semibold  p-1 ">
                        Mattress covers
                      </h1>
                    </div>
                    <div className="border-[1px] shadow-lg w-fit rounded-xl ">
                      <img
                        src="/Images/joint/soleu2.jpg"
                        alt="#img"
                        className="h-52 w-[300px] p-5"
                      />
                      <h1 className="text-center text-xl font-semibold  p-1 ">
                        Pillowencasement
                      </h1>
                    </div>
                    <div className="border-[1px] shadow-lg w-fit rounded-xl ">
                      <img
                        src="/Images/joint/soleu3.png"
                        alt="#img"
                        className="h-52 w-full p-5"
                      />
                      <h1 className="text-center text-xl font-semibold  p-1 ">
                        Mattress protectors
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <section className=" my-16 max-sm:my-10">
                <div>
                  <h1 className=" text-center max-sm:text-left  my-10 text-[40px] uppercase font-sans  max-xl:w-full leading-[120%]   font-semibold  max-lg:tracking-[4px]  border-black  max-sm:text-2xl tracking-widest  max-sm:tracking-wider ">
                    Gallery
                  </h1>
                  <div className="flex flex-col items-center ">
                    <div className="space-y-6" data-te-lightbox-init>
                      <div className="grid grid-cols-2 max-lg:grid-cols-1  gap-6 max-sm:gap-3">
                        <div className="p-10">
                          <img
                            src="/Images/project1.png"
                            alt="#img"
                            className="  cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto  "
                          />
                        </div>
                        <div className="p-10">
                          <img
                            src="/Images/project2.png"
                            alt="#img"
                            className="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
                          />
                        </div>
                        {/* <div className="">
                          <img src="/Images/gallery1.webp" alt="#img" />
                        </div> */}
                      </div>
                      {/* <div
                        className={`grid grid-cols-2 max-lg:grid-cols-1  ${
                          activity ? "hidden" : ""
                        } gap-6  max-sm:gap-3`}
                      >
                        <div className="">
                          <img
                            src="/Images/gallery2.webp"
                            alt="#img"
                            className="w-full"
                          />
                        </div>
                        <div className="w-full">
                          <img
                            src="/Images/gallery2.webp"
                            alt="#img"
                            className="w-full"
                          />
                        </div>
                      </div> */}
                      {/* <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-6 max-sm:gap-3   ">
                        <div className="">
                          <img
                            src="/Images/Gallery3.webp"
                            alt="#img"
                            className="w-full"
                          />
                        </div>
                        <div className="w-full">
                          <img
                            src="/Images/Gallery3.webp"
                            alt="#img"
                            className="w-full"
                          />
                        </div>
                        <div className="w-full">
                          <img
                            src="/Images/Gallery3.webp"
                            alt="#img"
                            className="w-full"
                          />
                        </div>
                        <div className="w-full">
                          <img
                            src="/Images/Gallery3.webp"
                            alt="#img"
                            className="w-full"
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </section>

              <BDtimeline />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default JointVenture_About;

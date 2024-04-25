import React, { useEffect } from "react";
import ProductHeading from "../Componets/ProductHeading";
import ProductSlider from "../Componets/Mattress/ProductSlider";
import { SweingProductData, SweingSlider2 } from "../Assests/Data";
import ProductDetails from "../Componets/ProductDetails";
import Slider from "../Componets/Slider";
import SweingFucntion from "../Componets/Sweing Thread/SweingFucntion";
import InqueryForm from "../Componets/Contact/InqueryForm";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import SweingFuncTemaplate from "../Componets/Sweing Thread/SweingFuncTemaplate";
import SweingTableFunc from "../Componets/Sweing Thread/SweingTableFunc";
import BDandCMC from "../Componets/BDandCMC";
import MainLayout from "../Main";

function SewingProduct(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);



  const para =
    "Welcome to CMC Threads, your go-to for high-quality, high tenacity threads. We provide superior threads for the textile sector, creative projects, and major OEM sewing thread brands. \n\nOur polyester thread is known for its strength and durability, perfect for heavy-duty sewing and industrial stitching. Our nylon thread offers enhanced strength and flexibility, ideal for upholstery, automotive components, or outdoor gear.\n\n We cater to diverse projects with a variety of thread specifications. We offer different sizes in kingspool and dye tubes, cones from 3000 to 12000 meters, and 50 to 1200 deniers in various 2-3 plys. We also have y cones and soft tubes of different dimensions. \n\nQuality and customer satisfaction are our priorities. Our threads are tested to meet industry standards, with our advanced facilities ensuring reliable performance. \n\nIn addition to polyester and nylon threads, we offer a range of high-performance threads. Check our website for threads suitable for sewing, embroidery, quilting, and more. We're dedicated to providing the best threads for your needs.";
  return (
    <MainLayout>

      <section className="">
        <ProductHeading
          title={"Sewing threads "}
          img={"/Images/Sweing/SweingBanner.webp"}
        />
        <ProductSlider ProductData={SweingProductData} />
        <ProductDetails para={para} />
        {/* <SweingTableFunc /> */}
        <div>
          <Slider list={SweingSlider2} activity={true} heading={"Our Products"} />
        </div>
        <SweingFucntion />
       
        <InqueryForm />


        <BDandCMC isShow={false} />

      </section>
    </MainLayout>

  );
}

export default SewingProduct;

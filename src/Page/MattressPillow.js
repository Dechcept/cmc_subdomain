import React, { useEffect } from "react";
import ProductHeading from "../Componets/ProductHeading";
import { MattressProductData, MattressProductData2 } from "../Assests/Data";
import Gallery from "../Componets/Gallery";
import ProductSlider from "../Componets/Mattress/ProductSlider";

import InqueryForm from "../Componets/Contact/InqueryForm";

import ProductDetails from "../Componets/ProductDetails";
import { useLocation } from "react-router-dom";
import Slider from "../Componets/Slider";
import BDandCMC from "../Componets/BDandCMC";
import MainLayout from "../Main";
import JointVenture from "../Componets/JointVenture";
import JointMatressSlider from "../Componets/JointMatressSlider";
import JointSlider from "../Componets/JointSlider";

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

const details = [
  {
    id: 1,
    No: "01",
    title: "Vitalize",
    para: "Vitalize is a mattress textile with incorporated  Far Infrared Technology.",
    para1:
      "This high tech yarn is made from polyester fibers, permanently linked with ceramic mineral  crystals. Vitalize textiles have the ability to  reflect Far Infrared Rays back to the body that generated them.",

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
const MattressPillow = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const para =
    "At CMC, we’re a top manufacturer of quality mattress and pillow covers, committed to innovation and sustainability.";
  return (
    <MainLayout>
      <section>
        <div>
          <ProductHeading
            title={"MATTRESS & PILLOW COVERS"}
            img={"/Images/MattressP.webp"}
          />
          <JointVenture />

          <div className="my-20">
            <JointSlider heading={"Products"} list={details} />
          </div>
          <ProductSlider ProductData={MattressProductData2} />

          <ProductDetails
            title={
              "CMC mattress covers and cut and sew – Your Premier Mattress Fabric Manufacturer"
            }
            para={para}
          />
          <Slider heading={"USP"} list={Data} />

          <Gallery activity={true} heading={"Our Gallery"} />
          {/* <InqueryForm /> */}
        </div>
        <BDandCMC isShow={false} />
      </section>
    </MainLayout>
  );
};

export default MattressPillow;

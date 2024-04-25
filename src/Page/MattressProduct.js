import React from "react";
import { useEffect } from "react";
import ProductHeading from "../Componets/ProductHeading";
import ProductSlider from "../Componets/Mattress/ProductSlider";
import Slider from "../Componets/Slider";
import Functional from "../Componets/Mattress/Functional";
import ProductSlider2 from "../Componets/Mattress/ProductSlider2";
import { MattressProductData } from "../Assests/Data";
import ProductDetails from "../Componets/ProductDetails";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Contactdetails from "../Componets/Contact/Contactdetails";
import Process from "../Componets/Process";
import Fabricssolutionslider from "../Componets/Fabricsolutionsslider";
import BDandCMC from "../Componets/BDandCMC";
import MainLayout from "../Main";
import JointVenture from "../Componets/JointVenture";
import JointSlider from "../Componets/JointSlider";
import JointMatressSlider from "../Componets/JointMatressSlider";
const Data = [
  {
    id: 1,
    No: "01",
    title: "Unparalleled Designs",
    para: "Explore our wide range of captivating jacquard designs, from timeless classics to contemporary masterpieces, adding sophistication to any mattress.",
    src: "/Images/Mattress/MF-Banner3.webp",
  },
  {
    id: 2,
    No: "02",
    title: "Product Innovation",
    para: "We're at the forefront of product innovation, incorporating cutting-edge materials and unique weaving techniques to deliver visually stunning and comfortable fabrics.",
    src: "/Images/Mattress/10.png",
  },
  {
    id: 3,
    No: "03",
    title: "Single Jacquard and Double Jacquard",
    para: "Experience the beauty and versatility of our single and double jacquard fabrics, catering to all tastes and design preferences for all grades of mattresses.",
    src: "/Images/Mattress/12.png",
  },
  {
    id: 4,
    No: "04",
    title: "High-End Panels and Borders",
    para: "Our high-end panels and borders add a refined and luxurious finish to your mattress, making it a true work of art. ",
    para2: "It can be customize to any mattress size",
    para3: "High-end panels and cut borders",
    src: "/Images/Mattress/Border2.png",
  },
  {
    id: 5,
    No: "05",
    title: "Customization",
    para: "We offer extensive customization options for our mattress fabrics, creating custom patterns, colours, and finishes that meet your exact specifications. ",
    src: "/Images/Mattress/11.png",
  },
  {
    id: 6,
    No: "06",
    title: "Exceptional Quality",
    para: `We're committed to delivering unparalleled quality, sourcing the finest materials and ensuring our products meet the highest industry standards.Explore our diverse collection of knitted jacquard fabrics, high-end panels, and borders.Contact us today to discuss your requirements or inquire about customization options.Explore the various type of value additions at CMC mattress fabrics. `,
    src: "/Images/Mattress/7.png",
  },
];
const data2 = [
  {
    id: 1,
    No: "01",
    title: "Breathability",
    description:
      "Promotes air circulation and heat dissipation for cool sleep. This helps regulate body temperature, reducing the risk of overheating during sleep and ensuring a comfortable and cool sleep environment.",
    img: "/Images/Functional/mattress-1.webp",
  },
  {
    id: 2,
    No: "02",
    title: "Moisture Management",
    description:
      "These fibres can effectively manage sweat and prevent the build-up of moisture, enhancing sleep quality.",
    img: "/Images/Functional/moisture.webp",
  },
  {
    id: 3,
    No: "03",
    title: "Hypoallergenic",
    description:
      "Hypoallergenic fabrics are specifically engineered to minimize allergenic properties and reduce the risk of allergic reactions. Suitable for allergy sufferers.",
    img: "/Images/Functional/hypoallergenic.webp",
  },
  {
    id: 4,
    No: "04",
    title: "Antibacterial & Antimicrobial",
    description:
      "Fabrics containing antibacterial or antimicrobial finish inhibit Inhibits microorganism growth. These fibres help maintaining a hygienic sleep environment.",
    img: "/Images/Functional/antibacterial.webp",
  },
  {
    id: 5,
    No: "05",
    title: "Odour Control",
    description:
      "Some fabrics are designed to Neutralizes unpleasant odours. These odour-control fabrics help keeping mattress fresh and inviting.",
    img: "/Images/Functional/control.webp",
  },
  {
    id: 6,
    No: "06",
    title: "Durability and Longevity",
    description:
      "Certain fibres are known for their repeated use. Fabrics made from these fibres ensures long-lasting mattress support and comfort.",
    img: "/Images/Functional/longevity.webp",
  },
  {
    id: 7,
    No: "07",
    title: "Softness and Comfort",
    description:
      "Provides a luxurious feel. Fabrics made from softeners enhances enhancing mattress comfort for deep sleep.",
    img: "/Images/Functional/mattress.webp",
  },
  {
    id: 8,
    No: "08",
    title: "Thermal Regulation",
    description:
      "Thermal-regulating fibres help Balances body temperature for optimal comfort regardless of ambient temperature.",
    img: "/Images/Functional/thermal.webp",
  },
];

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
const MattressProduct = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const description =
    "At CMC, we offer a vast selection of high-quality mattress fabrics, including warp knit, circular knit jacquard, laminated fabrics, and single jersey inner fabrics, all designed to enhance comfort and durability.";

  const para =
    " Experience the luxury and elegance of our circular knit jacquard  fabrics. With intricate patterns and textures, they add sophistication to any mattress. They’re not only visually appealing  but also comfortable and durable. Our in-house yarn manufacturing  allows us to cater to custom size requirements. Welcome to CMC  Knitted Fabrics, your go-to for high-quality mattress fabrics in knitted jacquard designs. Our collection includes single jacquard,  double jacquard, and high-end panels and borders, all designed with attention to detail and a focus on innovation.";
  return (
    <MainLayout>
      <section className="section">
        <ProductHeading
          img={"/Images/MattressP.webp"}
          title={"MATTRESS FABRICS"}
          description={description}
        />
        <JointVenture />
        <div className="my-20">
          <JointMatressSlider heading={"Products"} list={details} />
        </div>

        <ProductSlider ProductData={MattressProductData} />
        <ProductDetails title={"Circular Knitted Jacquard"} para={para} />

        <Slider heading={"USP"} list={Data} />
        <Fabricssolutionslider heading={"Fabric Solutions"} list={data2} />
        {/* <Functional /> */}

        <Process />

        <ProductSlider2 />
        <Contactdetails
          para={
            " Transform your sleep with our cool temperature yarn-based products. Enjoy a refreshing, cool, and rejuvenating sleep"
          }
        />
        <BDandCMC isShow={false} />
      </section>
    </MainLayout>
  );
};

export default MattressProduct;

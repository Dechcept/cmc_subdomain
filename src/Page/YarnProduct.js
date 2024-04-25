import React from "react";
import { useEffect } from "react";
import ProductHeading from "../Componets/ProductHeading";
import ProductSlider from "../Componets/Mattress/ProductSlider";
import { YarnProductData } from "../Assests/Data";
import ProductDetails from "../Componets/ProductDetails";
import YarnTable from "../Componets/Yarn/Table";
import Slider from "../Componets/Slider";
import Table2 from "../Componets/Table2";
import InqueryForm from "../Componets/Contact/InqueryForm";
import { useLocation } from "react-router-dom";
import BDandCMC from "../Componets/BDandCMC";
import MainLayout from "../Main";

const YarnProduct = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const details = [
    {
      id: 1,
      No: "01",
      title: "High Yarn Stability",
      src: "/Images/Yarn/9.png",
    },
    {
      id: 2,
      No: "02",
      title: "Consistent tension ",
      src: "/Images/Yarn/Yarn_slider21.png",
    },
    {
      id: 3,
      No: "03",
      title: " High volume ",
      src: "/Images/Yarn/10.png",
    },
    {
      id: 4,
      No: "04",
      title: "Pilling-resistant  ",
      src: "/Images/Yarn/11.png",
    },
    {
      id: 5,
      No: "05",
      title: "Even fabric look",
      src: "/Images/Yarn/12.png",
    },
    {
      id: 6,
      No: "06",
      title: " Soft texture",
      src: "/Images/Yarn/13.png",
    },
  ];
  const para =
    "We use top-quality raw materials and advanced machinery to produce texturized yarns. These yarns, ranging from 30D-1800D, are available in various forms like intermingled, non-intermingled, bright, semi-dull, and full dull, and dope dyed in nylon and polyester.\n\n They’re also available as lycra covered and in mélange form in filament and non-filaments. Our products cater to a wide range of applications including home textiles, apparels, shirting, suiting, sari, socks and more.\n";
  const para2 =
    "Air Texturized Yarns (ATY) are made using air and steam, offering a unique look and feel to fabrics. They’re suitable for a wide range of fabrics, from lightweight swimwear to heavy-duty parkas. \n\nATY can be a cost-effective alternative to spun yarns, providing a cotton-like feel at a competitive price. We can create various yarns like slubs for different fabric effects. Our ATY comes in deniers ranging from 90D – 600D in semi-dull, bright, mélange and dope dyed shades in nylon & polyester.";
  return (
    <MainLayout>
      <section className="">
        <ProductHeading img={"/Images/Yarn/YarnBanner.webp"} title={"yarn"} />
        <ProductSlider ProductData={YarnProductData} />
        <ProductDetails para={para} title={"TEXTURISED YARN"} />
        <YarnTable />
        <ProductDetails para={para2} title={"AIR TEXTURISED YARN"} />
        <Slider heading={"Benefits"} list={details} />
        <div className="p-28 max-lg:p-10 max-sm:p-5">
          <div className="flex flex-col gap-7">
            <p className="para w-[860px]  max-lg:w-full text-[28px] max-sm:text-[20px] tracking-[2.8px] leading-[150%] ">
              CMC were one of the early manufacturers and pioneers in air
              texturized yarns, uses advanced machinery and rigorous R&D for
              nylon and polyester yarn production.
            </p>
          </div>
        </div>
        <Table2 />
        <InqueryForm />
        <BDandCMC isShow={false} />
      </section>
    </MainLayout>
  );
};

export default YarnProduct;

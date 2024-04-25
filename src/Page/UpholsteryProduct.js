import React from "react";
import { useEffect } from "react";
import ProductHeading from "../Componets/ProductHeading";
import ProductSlider from "../Componets/Mattress/ProductSlider";
import { UpholsteryProductData } from "../Assests/Data";
import ProductDetails from "../Componets/ProductDetails";
import UpholsterySlider from "../Componets/Upholstery/UpholsterySlider";
import Contactdetails from "../Componets/Contact/Contactdetails";
import UpholsterySlider2 from "../Componets/Upholstery/UpholsterySlider2";
import { useLocation } from "react-router-dom";
import BDandCMC from "../Componets/BDandCMC";
import MainLayout from "../Main";

const UpholsteryProduct = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const description =
    "At CMC, we offer a vast selection of high-quality mattress fabrics, including warp knit, circular knit jacquard, laminated fabrics, and single jersey inner fabrics, all designed to enhance comfort and durability.";
  const para =
    "Upholstery is key to enhancing your living space’s beauty and comfort. We offer a variety of affordable, high-quality upholstery warp knit fabrics to elevate your home décor.";
  const para2 =
    "Discover our affordable, durable upholstery warp knit fabrics. Transform your home into a stylish sanctuary with our Collection Start your project today! Contact us for samples and learn how our fabrics can enhance your home textiles. We're here to make your home décor dreams come true.";
  return (
    <MainLayout>
      <section>
        <div style={{ whiteSpace: "pre-line" }}>
          <ProductHeading
            title={"UPHOLSTERY FABRICS"}
            img={"/Images/Upholstery/Upholsterybanner.webp"}
            description={description}
          />
          <ProductSlider ProductData={UpholsteryProductData} />
          <ProductDetails
            title={
              "Affordable Upholstery Warp Knit Fabrics: Elevate Your Home Décor with Style and Savings"
            }
            para={para}
          />
          {/* <UpholsterySlider
          heading={"Why Choose Our Upholstery Fabrics?"}
          title={"Affordable Excellence"}
          detail={
            "We believe Premium quality at an affordable price. Our affordable upholstery warp knit fabrics are thoughtfully crafted to provide Exceptional value for your investment."
          }
        /> */}
          <UpholsterySlider />
          <UpholsterySlider2 />
          <Contactdetails
            title={"Explore Affordable Elegance \nToday"}
            para={para2}
          />
        </div>
        <BDandCMC isShow={false} />
      </section>
    </MainLayout>
  );
};

export default UpholsteryProduct;

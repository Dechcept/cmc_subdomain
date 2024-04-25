import React, { useEffect, useState } from "react";
import Slider from "../Componets/Slider";
import Gallery from "../Componets/Gallery";
import Slider2 from "../Componets/Slider2";
import Heading from "../Componets/Heading";
import HorizontalTimeline from "../Componets/HorizontalTimeline";
import { useLocation } from "react-router-dom";
import BDandCMC from "../Componets/BDandCMC";
import MainLayout from "../Main";

const Data = [
  {
    id: 1,
    No: "01",
    title: "Texturised Yarns",
    para: "A pure denier ranges from 30d -1800 denier in various shades in dope dyed, semi-dull, bright filament, and non-filament yarns in polyester and nylon has been developed with the latest types of machinery.  Including different applications to textiles, socks, the apparel industry, sarees, and dress materials.",
    para2:
      "We seek to provide the right products to the specific industry at the right price, with a colour range among the highest in the country.  It has supported in making a name for oneself in the industry.",
    src: "/Images/9.png",
  },
  {
    id: 2,
    No: "02",
    title: "Air Texturized Yarns",
    para: "The group first diversified, as need for different services provided in the yarn industry. To venture into the exploring field of the yarn industry, CMC successfully incorporated in air texturized yarns which has many products to offer from cotton feel `Cooltex` to different kinds and sizes of Slub yarns to many other developments in the respective area. As we are catering to many industries which includes all major clients from their respective fields.",
    src: "/Images/AB_slider2.webp",
  },
  {
    id: 3,
    No: "03",
    title: "Warp Knitted Fabrics",
    para: "The group turned its head to diversify more into the production of warp-knitted fabrics; we have best-in-class (one of the first) German high-speed knitted machines catering to various industries, from curtain and upholstery to automotive. The division successfully expanded its capacity for manufacturing and produced high-quality fabrics. In addition, the group offers printed and dyed warp knitted solutions.",
    src: "/Images/67.png",
  },
  {
    id: 4,
    No: "04",
    title: "Mattress Ticking Jacquard",
    para: "The group identified a major gap in supplying in providing quality fabrics for the mattress industry as our experience in home textiles grew.",
    para2:
      "Assisting all renowned mattress manufacturers in the nation. We closely collaborate with our clients and provided a range of components used in the mattress industry.",
    src: "/Images/AB_slider4.webp",
  },
  {
    id: 5,
    No: "05",
    title: "Digital Transfer Paper",
    para: "We have successfully installed the newest heat transfer paper coating machines that serve our customers from all fields involved in this expanding field in response to the increase in demand for digitally printed fabrics.",
    src: "/Images/AB.webp",
  },
];

const About = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [bgColor, setbgColor] = useState(false);
  console.log(bgColor);
  const sliderDetails =
    " All our activities are centred on innovation. By regularly supplying new products and continually conducting new tests, always keeping in mind the consistently changing taste and preferences of our respective customers.";
  return (
    <MainLayout>
      <section className="section">
        <Heading
          img={"/Images/HomeBanner.webp"}
          title={"  Discover our home fabrics"}
        />
        <div className="p-36  max-xl:p-28  max-lg:p-10  max-sm:p-3  mt-10">
          <div className="para1 font-sans">
            <h1 className="w-[158px] font-sans h-[30px] text-[#442173] font-medium text-[20px] leading-[30px] tracking-wider">
              WHO WE ARE
            </h1>
            {/* <h2 className="w-[916px] max-xl:w-full h-[192px] max-xl:h-full my-5 homeHeading max-lg:text-[60px] max-sm:text-3xl tracking-widest">
            Lorem ipsum dolor sit amet
          </h2> */}
          </div>
          <div className="flex flex-col justify-end max-lg:justify-normal items-end space-y-5 mt-10">
            <p className="w-[800px] max-2xl:w-[560px] max-sm:w-full h-fit max-md:h-full font-sans  font-normal text-[20px] leading-[150%] tracking-[2px]">
              CMC textiles was started in 1999 in Daman by the name of its
              subsidiary mani more synthetics. It was a sick company taken over
              by our md, Mr. Ajeet Yadav, who has more than 30 years of
              experience in yarn manufacturing. My expertise and know-how leaded
              to the creation of fancy yarns in texturized and later air
              texturized yarns, which have pioneered products in this respective
              field. <br />
              <br />
              Now 2 decades in our group engages in various business activities
              ranging from yarn to fabrics to printing, with more than 100000
              sq. ft. of manufacturing and inventory space. CMC has been located
              at various units in Silvassa and Daman in the territory of Dadra &
              Nagar Haveli and Daman & Diu. All the units are centrally located
              at one server location, getting all relevant information in real
              time. The group serves all its customers efficiently across the
              country and abroad, providing supply chain solutions. <br />{" "}
              <br />
              CMC textiles was founded in 2001. As the team and experience grew,
              CMC textiles successfully ventured from yarns to fabrics, from
              home textiles to technical textiles, and from fabrics to
              finishing. From warp knitted filaments to circular knitted
              filaments jacquard (mattress ticking filaments), to plain
              polyester circular knitting.
            </p>
          </div>
        </div>

        <Slider heading={"How we Do"} list={Data} paraStyle={"h-[200px]"} />
        <Gallery heading={"Our Gallery"} />
        <HorizontalTimeline />
        <BDandCMC isShow={false} />
      </section>
    </MainLayout>
  );
};

export default About;

import React from "react";
import FunctionalTemplate from "./FunctionalTemplate";

const Functional = () => {
  const data = [
    {
      id: 1,
      title: "Breathability",
      description:
        "Promotes air circulation and heat dissipation for cool sleep. This helps regulate body temperature, reducing the risk of overheating during sleep and ensuring a comfortable and cool sleep environment.",
      img: "/Images/Functional/mattress.webp",
    },
    {
      id: 2,
      title: "Moisture Management",
      description:
        "These fibres can effectively manage sweat and prevent the build-up of moisture, enhancing sleep quality.",
      img: "/Images/Functional/moisture-wicking-fabric.webp",
    },
    {
      id: 3,
      title: "Hypoallergenic",
      description:
        "Hypoallergenic fabrics are specifically engineered to minimize allergenic properties and reduce the risk of allergic reactions. Suitable for allergy sufferers.",
      img: "/Images/Functional/hypoallergenic.webp",
    },
    {
      id: 4,
      title: "Antibacterial & Antimicrobial",
      description:
        "Fabrics containing antibacterial or antimicrobial finish inhibit Inhibits microorganism growth. These fibres help maintaining a hygienic sleep environment.",
      img: "/Images/Functional/antibacterial.webp",
    },
    {
      id: 5,
      title: "Odour Control",
      description:
        "Some fabrics are designed to Neutralizes unpleasant odours. These odour-control fabrics help keeping mattress fresh and inviting.",
      img: "/Images/Functional/antibacterial.webp",
    },
    {
      id: 6,
      title: "Durability and Longevity",
      description:
        "Certain fibres are known for their repeated use. Fabrics made from these fibres ensures long-lasting mattress support and comfort.",
      img: "/Images/Functional/durable-fabric.webp",
    },
    {
      id: 7,
      title: "Softness and Comfort",
      description:
        "Provides a luxurious feel. Fabrics made from softeners enhances enhancing mattress comfort for deep sleep.",
      img: "/Images/Functional/mattress1.webp",
    },
    {
      id: 8,
      title: "Thermal Regulation",
      description:
        "Thermal-regulating fibres help Balances body temperature for optimal comfort regardless of ambient temperature.",
      img: "/Images/Functional/thermal.webp",
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center gap-10 my-20 ">
           <div className="w-[960px]  max-lg:w-full text-center">
                <h1 className="text max-lg:text-[60px] max-sm:text-[32px] max-lg:leading-[150%]">Finishes Functional Values</h1>
           </div>
      <div className="grid grid-cols-4 max-xl:grid-cols-3  max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 ">
        {data.map((item) => {
          return (
            <FunctionalTemplate
              title={item.title}
              description={item.description}
              img={item.img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Functional;

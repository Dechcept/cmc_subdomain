import React from "react";
import SweingFuncTemaplate from "./SweingFuncTemaplate";

const SweingFucntion = () => {
  const functiondata = [
    {
      id: 1,
      title: "UV-Resistant High Tenacity Thread",
      point1: "Provides protection against sun exposure",
      point2: "Suitable for outdoor and marine applications",
      point3: "Retains colour and strength in prolonged sun exposure",
    },
    {
      id: 2,
      title: "Anti-Wick High Tenacity Thread",
      point1: "Prevents water or moisture from traveling along the thread",
      point2: "Suitable for outdoor and marine applications",
      point3: "Ideal for outdoor gear, tents, and upholstery",
    },
    {
      id: 3,
      title: "Fire-Resistant High Tenacity Thread",
      point1: "Offers flame retardancy and heat resistance",
      point2: "Suitable for protective clothing and equipment",
      point3: "Complies with industry safety standards",
    },
    {
      id: 4,
      title: "Chemical-Resistant High Tenacity Thread",
      point1: "Resistant to chemicals, acids, and solvents",
      point2: "Ideal for applications in chemical processing and manufacturing",
      point3: "Ensures thread integrity and longevity",
    },
  ];
  return (
    <div className="flex flex-col gap-16  max-sm:gap-10  p-24 max-xl:p-16 max-sm:p-3 mt-10">
      <h1 className="text max-sm:text-[40px] text-center">Application</h1>
      <div className="flex flex-col gap-12">
        <div className="flex justify-around gap-10 max-xl:flex-col ">
          {functiondata.slice(0, 2).map((item) => {
            return (
              <SweingFuncTemaplate
                title={item.title}
                point1={item.point1}
                point2={item.point2}
                point3={item.point3}
              />
            );
          })}
        </div>
        <div className="flex justify-around gap-10 max-xl:flex-col ">
          {functiondata.slice(2, 4).map((item) => {
            return (
              <SweingFuncTemaplate
                title={item.title}
                point1={item.point1}
                point2={item.point2}
                point3={item.point3}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SweingFucntion;

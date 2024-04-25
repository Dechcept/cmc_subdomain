import React, { useState } from "react";

const milestoneYears = [
  {
    id: 1,
    year: 2011,
    point1: "Start BDSolutions in Raureni (Ramnicu Valcea) Romania(1200m²)",
  },
  {
    id: 2,
    year: 2014,
    point1:
      "Significant growth of up to 50% with mainly traditional mattress producers",
  },

  {
    id: 3,
    year: 2015,
    point1:
      "BIAB boom ! new distribution channels 2nd production facility in Vladesti, Romania (1000m²) ",
    point2: "Raureni specialized in NQ covers",
    point3: "Vladesti specialized in Q covers ",
  },

  {
    id: 4,
    year: 2017,
    point1:
      "Relocation to brand new 8000m² factory. Additional investments : sewing islands, warehouse, spreader & cutter.",
  },
  {
    id: 5,
    year: 2019,
    point1: "Expanding with BDSolutions Nasaud, Romania",
  },
  {
    id: 6,
    year: 2020,
    point1: "Start BDSolutions factory in Ergene (Tekirdag), Turkey",
  },
  {
    id: 7,
    year: 2022,
    point1:
      "BDSolutions relocation to brand new 20.000m² factory in Ergene (Tekirdag), Turkey",
  },
];
const BDtimeline = () => {
  const [activeYear, setActiveYear] = useState(2011);
  const [show, setShow] = useState(false);

  const handleYearClick = (year) => {
    setActiveYear(year);
  };
  const [isClicked, setIsClicked] = useState(false);

  const [buttons, setButtons] = useState(Array(5).fill(false));

  const handleClick = (index) => {
    const newButtons = [...buttons];
    newButtons[index] = true;
    setButtons(newButtons);
  };

  return (
    <div className="mt-16 p-4">
      <h1 className=" text-center max-sm:text-left  my-10 text-[40px] uppercase font-sans  max-xl:w-full leading-[120%]   font-semibold  max-lg:tracking-[4px]  border-black  max-sm:text-2xl tracking-widest  max-sm:tracking-wider ">
        Timeline
      </h1>
      <div className="grid   lg:flex-row space-y-4 lg:space-x-4">
        <div className="h-[200px] max-sm:h-[320px]">
          {milestoneYears.map((x) => (
            <div
              key={x.id}
              className={`px-10 max-sm:px-0 max-sm:pl-5 mb-4 ${activeYear === x.year ? "block" : "hidden"
                }`}
            >
              <h2 className="text-lg font-semibold mb-1">{x.year}</h2>
              <ul
                className={`list-disc list-outside h-full flex-col space-y-3 w-full `}
              >
                {x.point1 && (
                  <li className="text-base tracking-[1.6px] leading-[120%]  ">
                    {x.point1}
                  </li>
                )}
                {x.point2 && (
                  <li className="text-base tracking-[1.6px] leading-[120%]  ">
                    {x.point2}
                  </li>
                )}
                {x.point3 && (
                  <li className="text-base tracking-[1.6px] leading-[120%]  ">
                    {x.point3}
                  </li>
                )}
                {x.point4 && (
                  <li className="text-base tracking-[1.6px] leading-[120%]  ">
                    {x.point4}
                  </li>
                )}
              </ul>
              {/* Add content for each milestone year */}
            </div>
          ))}
        </div>
        <hr className="w-full h-2 bg-gray-400 px-10 m-0" />
        <div className="flex gap-10 overflow-x-scroll">
          {milestoneYears.map((x) => (
            <button
              key={x.id}
              onClick={() => handleYearClick(x.year)}
              className={`block p-2 w-full  ${activeYear === x.year ? "text-white  bg-black" : ""
                } rounded-lg mb-2`}
            >
              {x.year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BDtimeline;

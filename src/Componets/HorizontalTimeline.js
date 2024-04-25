import React, { useState } from "react";

const milestoneYears = [
  {
    id: 1,
    year: 1999,
    point1:
      "In an auction, our M.D. Ajeet Yadav purchased a failing business from EDC Bank Goa.",
    point2:
      "Mani More Synthetics installed a yarn-texturized machine at the Daman factory.",
    point3: "Unveiled a brand-new item: single-filament Kota yarn ",
    point4:
      "Introduced the first-ever black dope-dyed Roto yarn and went on to become a pioneer in the field. ",
  },
  {
    id: 2,
    year: 2001,
    point1:
      "Silvassa is the location of the yarn manufacture for C.M.C Textiles.  ",
    point2:
      "Created Taspa yarn, the first of its type, a specialised yarn used in the production of knitted yarn. ",
  },

  {
    id: 5,
    year: 2003,
    point1:
      "Increased yarn commercial activities under the C.M.C. brand by putting in high-speed, cutting-edge machinery at our new Dadra plant. ",
  },

  {
    id: 7,
    year: 2005,
    point1:
      "Created a first-of-its-kind product called DMS, which went into the applications of shirting and suiting to all valued clients in the appropriate field across the country. More than fifty different dope-dyed colours and polyesters are available. ",
  },
  {
    id: 8,
    year: 2006,
    point1:
      "Developed melange tone yarn in our DMS line and pioneered it by supplying it in more than fifty hues (one of the ranges largest in the nation) .",
    point2: "",
    point3: "",
    point4: "",
  },
  {
    id: 9,
    year: 2007,
    point1:
      "First one to produce micro-texture for Mink blankets catering to all the main blanket makers in the country. ",
    point2: "",
    point3: "",
    point4: "",
  },
  {
    id: 10,
    year: 2008,
    point1:
      "Installed high-speed, cutting-edge air texturized machinery, preparing the way for the first vertical integration. diversified into slub yarn and a variety of other items. ",
    point2: "",
    point3: "",
    point4: "",
  },
  {
    id: 11,
    year: 2009,
    point1: "Additional capacity in the air texturizing process was added. ",
    point2: "",
    point3: "",
    point4: "",
  },

  {
    id: 13,
    year: 2011,
    point1:
      "Allow for further diversification by advancing integration by adding high-speed, first-of-their-kind warp knitted equipment. ",
    point2: "",
    point3: "",
    point4: "",
  },
  {
    id: 14,
    year: 2012,
    point1:
      "First, create 'awesome text'. Cotton-like yarn was used instead of cotton yarn in dhotis. ",
    point2:
      "Kota polyester dope dyed colours (more than 20 colours) were introduced as a first-of-its-kind alternative for silk in ladies' sarees. ",
    point3: "",
    point4: "",
  },
  {
    id: 16,
    year: 2013,
    point1:
      "Additional capacity in warp knitting and air texturization has been added.  ",
    point2: "",
    point3: "",
    point4: "",
  },
  {
    id: 17,
    year: 2015,
    point1:
      "We launched a new product called nylon Kota, which we pioneered by catering to all the leading saree houses in the country.   ",
    point2: "",
    point3: "",
    point4: "",
  },
  {
    id: 18,
    year: 2016,
    point1:
      "Vertically diversified into mattress ticking fabric making and importing machinery (first in the nation).",
    point2: "",
    point3: "",
    point4: "",
  },
  {
    id: 19,
    year: 2017,
    point1:
      "Expanded into additional capacity in the mattress ticking sector and released new value-added such as FR, WR, anti-micro bill, and so on, catering to all the country's main mattress manufacturers with high-quality fabrics and outstanding value addition.  ",
    point2: "",
    point3: "",
    point4: "",
  },
  {
    id: 20,
    year: 2018,
    point1:
      "Company expanded into sublimation paper, which is used in the digital printing process.   ",
    point2: "",
    point3: "",
    point4: "",
  },
  {
    id: 21,
    year: 2019,
    point1:
      "More machinery was introduced in the circulation of knitted jacquard and texturized yarn.   ",
    point2:
      "Launched water-proof mattress protectors and customizable mattress coverings to begin delivering customized solutions. ",
    point3: "",
    point4: "",
  },
  {
    id: 22,
    year: 2020,
    point1:"started a world class sewing thread facility with high tech machinery with monthly 50 tons of production.",
    point2:"",
    point3: "",
    point4: "",
  },
  {
    id: 23,
    year: 2022,
    point1:"expanded more machines in mattress fabrics business. Becoming a major player in the segment.",
    point2:"",
    point3: "",
    point4: "",
  },
  {
    id: 24,
    year: 2023,
    point1:
      "agreed to do a joint venture with worlds biggest mattress fabric company (bekaert deslee) to invest in Indian future . With aim to increasing market share by offering world class product.",
    point2:"",
    point3: "",
    point4: "",
  },
];

const HorizontalTimeline = () => {
  const [activeYear, setActiveYear] = useState(1999);
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
      <h1 className="text-6xl font-bold mb-4 text-center pt-10">Timeline</h1>
      <div className="grid   lg:flex-row space-y-4 lg:space-x-4">
        <div className="h-[200px] max-sm:h-[320px]">
          {milestoneYears.map((x) => (
            <div
              key={x.id}
              className={`px-10 max-sm:px-0 max-sm:pl-5 mb-4 ${
                activeYear === x.year ? "block" : "hidden"
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
              className={`block p-2 w-full  ${
                activeYear === x.year ? "text-white  bg-black" : ""
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

export default HorizontalTimeline;

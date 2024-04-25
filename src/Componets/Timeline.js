import React, { useState } from "react";

const timelineData = [
  {
    date: "January 2022",
    event: "Event 1",
    description: "Description for Event 1",
  },
  {
    date: "March 2022",
    event: "Event 2",
    description: "Description for Event 2",
  },
  {
    date: "May 2022",
    event: "Event 3",
    description: "Description for Event 3",
  },
  {
    date: "May 2022",
    event: "Event 3",
    description: "Description for Event 3",
  },
  {
    date: "May 2022",
    event: "Event 3",
    description: "Description for Event 3",
  },
  {
    date: "May 2022",
    event: "Event 3",
    description: "Description for Event 3",
  },
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="w-[400px] p-4">
      {activeIndex !== -1 && (
        <div className="mt-4 border-l-2 border-blue-500 pl-4">
          <p className="text-sm text-gray-600">
            {timelineData[activeIndex].date}
          </p>
          <h2 className="text-lg font-semibold">
            {timelineData[activeIndex].event}
          </h2>
          <p className="text-gray-700">
            {timelineData[activeIndex].description}
          </p>
        </div>
      )}
      <div className="flex items-center ">
        {timelineData.map((item, index) => (
          <div key={index}>
            <div
              className={`cursor-pointer inline-block w-4 h-4 rounded-full border-2  border-blue-500 ${
                activeIndex === index ? "bg-blue-500" : "bg-white"
              }`}
              onClick={() => handleClick(index)}
            ></div>
            {index < timelineData.length - 1 && (
              <div className="w-12 border-t-2 border-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

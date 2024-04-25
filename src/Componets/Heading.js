import React from "react";

const Heading = ({ img, title }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url('${img}')` }}
        className="bg-cover  bg-center bg-no-repeat h-[720px] max-lg:h-[345px]  flex "
      >
        <div className="  flex items-center pl-36 max-lg:pl-20 max-sm:pl-10 bg-white h-full w-full bg-opacity-60  ">
          <p className="homeHeading max-lg:leading-[120%] tracking-widest">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Heading;

import React from "react";

const ProductDetails = ({ title, para,point,point1,point2,point3,point4,point5,point6,point7,point8 }) => {
  return (
    <div>
      <div
        className="p-28 max-lg:p-10 max-sm:p-3 mt-14"
        style={{ whiteSpace: "pre-line" }}
      >
        <div className="flex flex-col gap-7">
          <h1 className="font-sans  font-semibold text-[40px] max-sm:text-2xl leading-[150%]  max-lg:leading-[100%] tracking-widest max-sm:tracking-[3.2px]">
            {title}
          </h1>
          <p className="para w-[860px] max-sm:leading-[150%] max-lg:w-full ">
            {para}
          </p>

         { point ?<ul className="max-sm:mt-5  max-xl:w-full   font-normal text-[20px]  leading-[30px] tracking-wider">
            <li>{point1}</li>
            <li>{point2}</li>
            <li>{point3}</li>
            <li>{point4}</li>
            <li>{point5}</li>
            <li>{point6}</li>
            <li>{point7}</li>
            <li>{point8}</li>
          </ul>:""}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

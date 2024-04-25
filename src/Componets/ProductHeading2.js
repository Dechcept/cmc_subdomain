import React from "react";

const ProductHeading2 = ({ img, title, description }) => {
  console.log(description);
  return (
    <div>
      <div>
        <div
          style={{ backgroundImage: `url('${img}')` }}
          className="bg-cover  bg-center bg-no-repeat h-[720px] max-lg:h-[520px] max-sm:h-[446px] max-sm:mt-10"
        >
          <div className=" bg-white h-full w-full bg-opacity-60  flex flex-col justify-center items-center gap-5 p-3 pt-24 ">
            <h1 className="homeHeading tracking-widest uppercase  w-[960px] max-lg:w-full text-center">
              {title}
            </h1>
            <p className="para max-sm:leading-[120%] text-center w-[760px] max-md:w-full ">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeading2;

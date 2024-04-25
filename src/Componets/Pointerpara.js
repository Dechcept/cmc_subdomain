import React from 'react'

const QuiltproData = [

  {
    point: "High-Tenacity Filament Polyester: ",
    para: "Ensures excellent strength and durability for demanding stitching applications.",
  },
  {
    point: "Abrasion Resistance: ",
    para: "Offers good resistance to abrasion, ensuring long-lasting performance.",
  },
  {
    point: "UV Resistance:",
    para: " Provides protection against ultraviolet light, making it suitable for outdoor applications.",
  },
  {
    point: "Chemical Resistance: ",
    para: "Resistant to mild acids, enhancing its versatility in various environments.",
  },
  {
    point: "Special Lubricant: ",
    para: "The special lubricant applied during manufacturing minimizes the effects of needle heat and abrasion.This unique feature allows for",
  },
  {
    point: "Excellent Sewing Performance:  ",
    para: "Enables sewing at low tension, even in the most challenging operations.",
  },
  {
    point: "Reduced Friction",
    para: "Enhances the thread's smoothness and reduces wear and tear on sewing machines.",
  }]

const StitchbondseriesData = [
  {
    point: "Leather Footwear: ",
    para: "Ideal for craing durable and high-quality leather shoes."
  },
  {
    point: "Leather Sofa and Bag Products:",
    para: "Suitable for stitching leather sofas and bags with reliable and strong bonds."
  },
  {
    point: "Denim Products with Heavy Wash Lycra:",
    para: "Designed for stitching denim products, ensuring durability during heavy wash cycles."
  },
  {
    point: "Sports Shoes and Sports Goods: ",
    para: "Provides strong and secure stitching for sports shoes and goods"
  },
  {
    point: "Automotive Airbag, Seat Cover, Leather Steering Wheel Stitching: ",
    para: "Ensures secure and durable stitching for automotive safety and luxury"
  }, {
    point: "Luggage and Travel Products: ",
    para: "Designed for reliable and long-lasting stitching in luggage and travel bags."
  },
  {
    point: "Diving Suit: ",
    para: "Provides strong and secure stitching for diving suits, ensuring safety and durability."
  }, {
    point: "Experience the Strength and Reliability of Stitch Bond Series - Your Trusted Choice for Durable Stitching!"
  },

]
const Pointerpara = ({ title, Data, Quiltpro, StitchBondSeries }) => {


  return (
    <div>
      <div
        className="pt-2 pl-10 max-lg:p-10 max-sm:p-3 mt-14"
        style={{ whiteSpace: "pre-line" }}
      >
        <div className="flex flex-col gap-7">
          <h1 className="font-sans  font-semibold text-[40px] max-sm:text-2xl leading-[150%]  max-lg:leading-[100%] tracking-widest max-sm:tracking-[3.2px]">
            {title}
          </h1>
          <ul className="max-sm:mt-5 max-xl:w-full font-normal text-[20px]  leading-[38px] tracking-wider list-disc px-4">
            {Quiltpro && title === "Features" ? <div> {QuiltproData.map((item) => {
              return (

                <li className='py-2'><span className='font-bold'>{item.point}</span><span className='text-gray-500'>{item.para}</span></li>

              )
            })}</div> : ""}
            {StitchBondSeries && title === "Uses" ? <div> {StitchbondseriesData.map((item) => {
              return (

                <li className='py-2'><span className='font-bold'>{item.point}</span><span className='text-gray-500'>{item.para}</span></li>

              )
            })}</div> : ""}
          </ul>

          {/* <ul className="max-sm:mt-5 max-xl:w-full font-normal text-[20px]  leading-[38px] tracking-wider list-disc px-4">
            <li className='py-2'><span className='font-bold'>{point1}</span><span className='text-gray-500'>{para1}</span></li>
            <li className='py-2'><span className='font-bold'>{point2}</span><span className='text-gray-500'>{para2}</span></li>
            <li className='py-2'><span className='font-bold'>{point3}</span><span className='text-gray-500'>{para3}</span></li>
            <li className='py-2'><span className='font-bold'>{point4}</span><span className='text-gray-500'>{para4}</span></li>
            <li className='py-2'><span className='font-bold'>{point5}</span><span className='text-gray-500'>{para5}</span></li>
            <li className='py-2'><span className='font-bold'>{point6}</span><span className='text-gray-500'>{para6}</span></li>
            <li className='py-2'><span className='font-bold'>{point7}</span><span className='text-gray-500'>{para7}</span></li>
            <li className='py-2'><span className='font-bold'>{point8}</span><span className='text-gray-500'>{para8}</span></li>

          </ul> : ""} */}
        </div>
      </div>
    </div >
  )
}

export default Pointerpara
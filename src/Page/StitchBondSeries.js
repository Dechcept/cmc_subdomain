import React, { useEffect } from 'react'
import ProductHeading from '../Componets/ProductHeading'
import Navbar from './Navbar'
import Footer from '../Componets/Footer'
import Pointerpara from '../Componets/Pointerpara'
import Swingtable from '../Componets/Sweing Thread/Sweingtable.js'
import Imagepara from '../Componets/Sweing Thread/Imagepara.js'
import Pdfbutton from '../Componets/Sweing Thread/Pdfbutton.js'
import { useLocation } from 'react-router-dom'
import ProductHeading2 from '../Componets/ProductHeading2.js'



const para =
  "At CMC, we’re a top manufacturer of quality mattress and pillow covers, committed to innovation and sustainability.";
  const description="The Stitch Bond Series oers bonded threads with strong tenacity, available in various yarn types including polyester, nylon 6,and nylon 66. Designed for durability and reliability, the Stitch Bond Series is the ideal choice for a wide range of applications."
const StitchBondSeries = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const openPDF = () => {
    // Replace 'your_pdf_url.pdf' with the actual URL of your PDF file
    window.open("/Images/Sweing/CMC-Stitch-bond-series.pdf", '_blank');
};

  return (
    <div>
      <Navbar />
      <ProductHeading2
        title={"Stitch Bond Series"}
        img={"/Images/Sweing/17290.jpg"}
        description={description}
      />
    
      <div
        className="pt-2 pl-10 max-lg:p-10 max-sm:p-3 mt-14"
        style={{ whiteSpace: "pre-line" }}
      >
        <div className="flex flex-col gap-7">
          <h1 className="font-sans  font-semibold text-[40px] max-sm:text-2xl leading-[150%]  max-lg:leading-[100%] tracking-widest max-sm:tracking-[3.2px]">
          Features
          </h1>
          <ul className="max-sm:mt-5 max-xl:w-full font-normal text-[20px]  leading-[38px] tracking-wider list-disc px-4">
            <li className='py-2'><span className='font-bold'>Strong Tenacity:</span><span className='text-gray-500'>Provides excellent strength and durability for demanding applications.</span></li>
            <li className='py-2'><span className='font-bold'>Bonded Threads:</span><span className='text-gray-500'>Enhanced bonding for increased reliability and performance.</span></li>
            <li className='py-2'><span className='font-bold'>Versatile Yarn Options:</span><span className='text-gray-500'>Available in polyester, nylon 6, and nylon 66 to meet various application requirements</span></li>
          </ul>
        </div>
      </div>
      
      <Pointerpara
        title={
          "Uses"
        }
        StitchBondSeries={true}
        

      />
      <Pointerpara
        title={
          "Technical Specifications"
        }

      />
      <Swingtable />
      <Imagepara para={"The conditions and practice for the use of sewing threads are quite variable. Therefore, it is important that the manufacturers have to do pre-tests to determine whether the product specifications are suitable for use in order to assure themselves. Ozen Iplik is not liable for unsuitable or improper use of the products. The above information is based on current average values and should be considered as guidance only"} src={"/Images/Sweing/SSP-1.jpg"} />
      {/* <div classname="flex justify-center items-center m-auto bg-black w-10">
          <button onClick={openPDF}>Open PDF</button>
        </div> */}
      {/* <Pdfbutton url={"/Images/Sweing/CMC-Stitch-bond-series.pdf"} /> */}
      <div className=' flex justify-center items-center'>
            <div classname=" w-10">
                <button className='bg-black text-white p-5 rounded-md' onClick={openPDF}>Download Brochure</button>
            </div>
        </div>

      <Footer />
    </div>
  )
}

export default StitchBondSeries
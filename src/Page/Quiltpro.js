import React, { useEffect } from 'react'
import ProductHeading from '../Componets/ProductHeading'
import Navbar from './Navbar'
import Footer from '../Componets/Footer'
import Pointerpara from '../Componets/Pointerpara'
import Swingtable from '../Componets/Sweing Thread/Sweingtable.js'
import Imagepara from '../Componets/Sweing Thread/Imagepara.js'
import Pdfbutton from '../Componets/Sweing Thread/Pdfbutton.js'
import { useLocation } from 'react-router-dom'
import Application from '../Componets/Application.js'
import { Quiltapplication } from "../Assests/Data";
import ProductHeading2 from '../Componets/ProductHeading2.js'

const description = "Quilt Pro is a high-tenacity filament Polyester sewing thread, specially developed for a wide range of applications. Designed to meet the most demanding stitching requirements, this filament thread oers exceptional durability and performance."
const Quiltpro = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const openPDF = () => {
    // Replace 'your_pdf_url.pdf' with the actual URL of your PDF file
    window.open("/Images/Sweing/CMC-quilt-pro.pdf", '_blank');
  };
  return (
    <div><div>
      <Navbar />
      <ProductHeading2
        title={"Quilt Pro"}
        img={"/Images/Sweing/108.jpg"}
        description={description}
      />
      {/* <Pointerpara
      title={
        "Features"
      }
      point={true}
      para={true}
      point1={"Strong Tenacity:"}
      para1={"Provides excellent strength and durability for demanding applications."}
      point2={"Bonded Threads:"}
      para2={"Enhanced bonding for increased reliability and performance."}
      point3={"Versatile Yarn Options:"}
      para3={"Available in polyester, nylon 6, and nylon 66 to meet various application requirements"}
    /> */}
      <Pointerpara
        title={
          "Features"
        }
        Quiltpro={true}



      />
      <div
        className="pt-2 pl-10 max-lg:p-10 max-sm:p-3 mt-14"
        style={{ whiteSpace: "pre-line" }}
      >
        <div className="flex flex-col gap-7">
          <h1 className="font-sans  font-semibold text-[40px] max-sm:text-2xl leading-[150%]  max-lg:leading-[100%] tracking-widest max-sm:tracking-[3.2px]">
            Benefits
          </h1>
          <ul className="max-sm:mt-5 max-xl:w-full font-normal text-[20px]  leading-[38px] tracking-wider list-disc px-4">
            <li className='py-2'><span className='font-bold'>Versatile Use:</span><span className='text-gray-500'>Suitable for a wide range of products and applications.</span></li>
            <li className='py-2'><span className='font-bold'>Enhanced Durability:</span><span className='text-gray-500'>Designed for long-lasting performance and reliability.</span></li>
            <li className='py-2'><span className='font-bold'>Easy Handling:</span><span className='text-gray-500'>Provides excellent sewing performance, even in difficult operations.</span></li>


          </ul>
        </div>
      </div>

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
      {/* <Pdfbutton url={"/Images/Sweing/CMC-quilt-pro.pdf"}/> */}
      <Pointerpara
      title={
        "Applications"
      }
    />
    <Application Applicationdata={Quiltapplication}/>
      <div className=' flex justify-center items-center'>
        <div classname=" w-10">
          <button className='bg-black text-white p-5 rounded-md' onClick={openPDF}>Download Brochure</button>
        </div>
      </div>

      <Footer />
    </div>
    </div>
  )
}

export default Quiltpro
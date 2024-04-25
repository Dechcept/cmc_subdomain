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
import { Threadluxeapplication } from '../Assests/Data.js'
import ProductHeading2 from '../Componets/ProductHeading2.js'

const description = "Thread Luxe is a premium sewing thread, featuring fine counts tailored for delicate stitching. Designed to meet the requirements of high-end and luxury applications, Thread Luxe is the ideal choice for craing luxury bags, garments, and other high-quality products."
const Threadluxe = (props) => {
    const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

    const openPDF = () => {
        // Replace 'your_pdf_url.pdf' with the actual URL of your PDF file
        window.open("/Images/Sweing/CMC-thread-luxe.pdf", '_blank');
    };
    return (
        <div><div>
            <Navbar />
            <ProductHeading2
                title={"Thread Luxe"}
                img={"/Images/Sweing/Banner2.jpg"}
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
                    <ul className="max-sm:mt-5 max-xl:w-full font-normal text-[20px]  leading-[38px] tracking-wider list-disc px-4px">
                        <li className='py-2'><span className='font-bold'>Fine Counts:</span><span className='text-gray-500'> Specifically designed for delicate and intricate stitching,enhancing the aesthetic appeal of finished products.</span></li>
                        <li className='py-2'><span className='font-bold'>High-End Quality:</span><span className='text-gray-500'>Tailored for luxury applications, ensuring a sophisticated and elegant finish.</span></li>
                        <li className='py-2'><span className='font-bold'>Versatile Use:</span><span className='text-gray-500'>Suitable for craing small high-end bags, garments, and
                            other luxury items.</span></li>


                    </ul>
                </div>
            </div>
            <div
                className="pt-2 pl-10 max-lg:p-10 max-sm:p-3 mt-14"
                style={{ whiteSpace: "pre-line" }}
            >
                <div className="flex flex-col gap-7">
                    <h1 className="font-sans  font-semibold text-[40px] max-sm:text-2xl leading-[150%]  max-lg:leading-[100%] tracking-widest max-sm:tracking-[3.2px]">
                        Benefits
                    </h1>
                    <ul className="max-sm:mt-5 max-xl:w-full font-normal text-[20px]  leading-[32px] tracking-wider list-disc px-4px">
                        <li className='py-2'><span className='font-bold'>Premium Quality:</span><span className='text-gray-500'>Elevate your projects with the superior quality and
                            elegance of Thread Luxe.</span></li>
                        <li className='py-2'><span className='font-bold'>Enhanced Aesthetics:</span><span className='text-gray-500'> Fine counts for delicate stitching, enhancing the
                            appearance of finished products.</span></li>
                        <li className='py-2'><span className='font-bold'>Versatility:</span><span className='text-gray-500'>Ideal for a range of high-end and luxury applications,
                            providing excellent versatility for craing luxury items</span></li>
                        <li className='py-2'><span className='font-bold'>Experience the Elegance of Thread Luxe - Your Choice for Premium
                            Quality Stitching!</span><span className='text-gray-500'></span></li>


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
            <Pointerpara
                title={
                    "Application"
                }
                /> 
      <Application Applicationdata={Threadluxeapplication}/>
            
            <div className=' flex justify-center items-center'>
                <div classname=" w-10">
                    <button className='bg-black text-white p-5 rounded-md' onClick={openPDF}>Download Brochure</button>
                </div>
            </div>
            
            <Footer />
        </div></div>
    )
}

export default Threadluxe
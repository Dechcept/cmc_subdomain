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
import { Spunstaraplication } from '../Assests/Data.js'
import ProductHeading2 from '../Componets/ProductHeading2.js'

const description = "Spun star is a high-tenacity 100% staple spun Polyester sewing thread. With its low wet shrinkage property, it is perfectly aligned with polyester fabrics, making it resistant to sunlight and chemical degradation. Spun star oers an extensive color range and is a cost-eective alternative for lightweight fabrics."
const Spunstar = (prpos) => {
    const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

    const openPDF = () => {
        // Replace 'your_pdf_url.pdf' with the actual URL of your PDF file
        window.open("/Images/Sweing/CMC-thread-Spun-Star.pdf", '_blank');
    };
    return (
        <div><div>
            <Navbar />
            <ProductHeading2
                title={"Spun Star"}
                img={"/Images/Sweing/2148145934.jpg"}
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
            {/* <Pointerpara
                title={
                    "Features"
                }
                point={true}
                para={true}
                point1={"High-Tenacity Filament Polyester: "}
                para1={"Ensures excellent strength and durability for demanding stitching applications."}
                point2={"Abrasion Resistance: "}
                para2={"Offers good resistance to abrasion, ensuring long-lasting performance."}
                point3={"UV Resistance:"}
                para3={" Provides protection against ultraviolet light, making it suitable for outdoor applications."}
                point4={"Chemical Resistance: "}
                para4={"Resistant to mild acids, enhancing its versatility in various environments."}
                point5={"Special Lubricant: "}
                para5={"The special lubricant applied during manufacturing minimizes the eects of needle heat and abrasion."}
                point6={"This unique feature allows for: "}
                para6={""}
                point7={"Excellent Sewing Performance:  "}
                para7={"Enables sewing at low tension, even in the most challenging operations."}
                point8={"Reduced Friction"}
                para8={"Enhances the thread's smoothness and reduces wear and tear on sewing machines."}

            /> */}
            <div
                className="pt-2 pl-10 max-lg:p-10 max-sm:p-3 mt-14"
                style={{ whiteSpace: "pre-line" }}
            >
                <div className="flex flex-col gap-7">
                    <h1 className="font-sans  font-semibold text-[40px] max-sm:text-2xl leading-[150%]  max-lg:leading-[100%] tracking-widest max-sm:tracking-[3.2px]">
                    Features
                    </h1>
                    <ul className="max-sm:mt-5 max-xl:w-full font-normal text-[20px]  leading-[38px] tracking-wider list-disc px-4">
                        <li className='py-2'><span className='font-bold'>High-Tenacity 100% Staple Spun Polyester:</span><span className='text-gray-500'>Ensures excellent strength and durability for various applications.</span></li>
                        <li className='py-2'><span className='font-bold'>Low Wet Shrinkage:</span><span className='text-gray-500'>Aligned with polyester fabrics, providing consistent and reliable performance.</span></li>
                        <li className='py-2'><span className='font-bold'>Sunlight and Chemical Resistance:</span><span className='text-gray-500'>Offers protection against sunlight and chemical degradation, enhancing the longevity of stitched products.</span></li>
                        <li className='py-2'><span className='font-bold'>Extensive Color Range:</span><span className='text-gray-500'>Available in a wide range of colors to meet various design requirements.</span></li>


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
                    <ul className="max-sm:mt-5 max-xl:w-full font-normal text-[20px]  leading-[38px] tracking-wider list-disc px-4">
                        <li className='py-2'><span className='font-bold'>Cost-Effective Alternative:</span><span className='text-gray-500'>: A very cost-eective choice for lightweight fabrics, oering value without compromising quality.</span></li>
                        <li className='py-2'><span className='font-bold'>High-Speed Machine Compatibility:</span><span className='text-gray-500'>Suitable for high-speed machine operations due to the special lubricant applied to the thread surface.</span></li>
                        <li className='py-2'><span className='font-bold'>Trusted Safety:</span><span className='text-gray-500'>Can be safely used even for babywear, backed by the trusted OEKO-TEX Standard 100 Class I certificate</span></li>


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
      <Application Applicationdata={Spunstaraplication}/>
            <div className=' flex justify-center items-center'>
                <div classname=" w-10">
                    <button className='bg-black text-white p-5 rounded-md' onClick={openPDF}>Download Brochure</button>
                </div>
            </div>
            
            <Footer />
        </div></div>
    )
}

export default Spunstar
import React from 'react'
import { Link } from "react-router-dom";
const Rightbanner = ({ title, Description, url, src }) => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="w-[50%] overflow-hidden">
                    <img className="transition duration-300 ease-in-out hover:scale-105 overflow-hidden" src={src} alt="" />
                </div>
                <div className="w-[50%] flex flex-col items-start  justify-between">
                    <div
                        className="inset-0 h-full "
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <p className="text-[50px] leading-[1.1em] font-sans tracking-widest pl-20  max-lg:pt-20 max-lg:pl-10 max-lg:pr-10 z-50">{title}</p>
                    </div>
                    <div
                        className="inset-0 h-full "
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                    >
                        <p className="text-[18px] font-sans tracking-widest pl-20 pr-20 pt-4 max-lg:pl-10 max-lg:pr-10 z-50">{Description}</p>
                    </div>
                    <div
                        className="flex text-2xl  items-center text-left  justify-between px-20 max-lg:px-10 max-sm:py-5 mt-10 max-sm:mt-5"
                        data-aos="fade-left"
                        data-aos-delay="400"
                        data-aos-duration="1500"
                    >
                        <Link to={url} className="flex gap-2 font-medium">
                            <button>Explore</button> <img src="/Images/icon.png" alt="" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Rightbanner
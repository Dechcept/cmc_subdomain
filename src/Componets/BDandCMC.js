import React from 'react'

const BDandCMC = ({ isShow }) => {
    return (
        <div>
            {isShow ? <div className="flex gap-6 pt-20 mb-10 max-sm:justify-center ">
                <div className="h-[288px] bg-white flex justify-end p-10 w-full  border-r-4 border-[#003F6B] max-sm:w-[250px]  max-sm:h-[150px] max-sm:p-3 max-sm:justify-center ">
                    <img className='pr-8 max-sm:pr-5' src="/Images/cmc_footer_logo.png" alt="#img" />
                </div>
                {/* <div className="h-[50px] bg-white  justify-center m-auto  w-[50px] hidden max-sm:flex">
                    <img src="/Images/new.png" alt="#img" />
                </div> */}
                {/* <div className='w-[10px] h-full border border-[#003F6B]'>

                </div> */}
                <div className="h-[288px] bg-white flex justify-start p-5 w-full   max-sm:w-[250px]  max-sm:h-[150px] max-sm:p-0  max-sm:justify-center ">
                    <img src="/Images/Bekaert-logo-1.png" alt="#img" />
                </div>

            </div> :
                <div className='pt-20'><div className=" bg-white flex justify-center p-10">
                    <img src="/Images/cmc_footer_logo.png" alt="#img" className='w-[230px] h-[230px] ' />
                </div></div>
            }
        </div>
    )
}

export default BDandCMC
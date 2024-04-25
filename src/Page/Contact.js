import React, { useEffect } from "react";
import ContactForm from "../Componets/Contact/ContactForm";
import Map from "../Componets/Contact/Map";
import { useLocation } from "react-router-dom";
import BDandCMC from "../Componets/BDandCMC";
import MainLayout from "../Main";

const Contact = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <MainLayout>
      
    <section className="">
      <div>
        <div className="h-[750px] max-xl:h-fit flex flex-col gap-10 justify-center pl-20 max-lg:pl-0 ">
          <h1 className="text text-left max-sm:text-[48px] max-lg:tracking-[1.4px] max-lg:leading-[120%] mt-36 p-2">
            Let’s connect with us
          </h1>
          <div className="flex max-md:flex-col max-md:gap-10 justify-between p-5 max-sm:p-2">
            <div className="font-sans ">
              <h1 className="list font-normal  border-black border-b-[1px] pb-1 mb-4 w-fit">
                Phone
              </h1>
              <span className="text-4xl max-xl:text-2xl max-sm:text-[20px] font-semibold leading-[150%] tracking-[4px] mt-4 ">
                +91 93743 30553 <br />
                +91 93280 31407 <br />
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="list font-normal  border-black border-b-[1px] pb-1 w-fit mb-5">
                email
              </h1>
              HR:
              <span className="text-4xl max-xl:text-2xl  max-sm:text-[18px] font-semibold leading-[150%] tracking-[4px] max-lg:tracking-[2px] ">
              hrd@cmctextile.com
              </span>
              Team:
              <span className="text-4xl max-xl:text-2xl  max-sm:text-[18px] font-semibold leading-[150%]  tracking-[4px] max-lg:tracking-[2px]  ">
                shikhar.yadav@cmctextile.com
              </span>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
        <div className="mt-20">
          <Map />
        </div>
      </div>
      <BDandCMC isShow={false}/>
    </section>
    </MainLayout>

  );
};

export default Contact;

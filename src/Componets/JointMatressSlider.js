import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Keyboard, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
const JointMatressSlider = ({ heading, title, detail }) => {
  return (
    <section className="  ">
      <div className="bg-black relative">
        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          // autoHeight={true}
          // autoplay={{ delay: 3000 }}
          // modules={[Autoplay]}
          navigation
          keyboard={{
            enabled: true,
          }}
          modules={[Keyboard, Navigation]}
        >
          <SwiperSlide>
            <div className="flex flex-col gap-10 px-10 max-lg:px-3 py-4 max-lg:py-3">
              <div className=" h-full  text-white ">
                <h1 className="text-[80px] max-md:text-[60px]  font-bold max-sm:font-normal opacity-[40%]">
                  Vitalize
                </h1>
                <div className="space-y-4 max-xl:flex max-lg:flex-col justify-center items-center max-xl:gap-10">
                  <img
                    src="/Images/joint/Vitalize.png"
                    alt="#img"
                    className=" hidden max-xl:block"
                  />
                  <p className="w-[90%] max-lg:w-full para ">
                    Vitalize is a high-performance fabric that uses Far Infrared
                    Technology to enhance your sleep quality.
                    <br />
                    Vitalize textiles are polyester-ceramic, permanently linked
                    with ceramic mineral crystals which have the ability to
                    bounce back the body’s Far Infrared Rays. <br />
                    FIR rays boost blood flow in the skin layer, warming up cold
                    hands and feet. <br />
                    Vitalize is a BekaertDeslee brand that offers FIR benefits
                    without extra fees.
                  </p>
                </div>
              </div>
              <div className=" text-white flex max-xl:flex-col-reverse  items-center ">
                <div className="w-[80%] max-lg:w-full">
                  <div>
                    <h1 className="text-xl">RECYCLE YOUR BODY HEAT</h1>
                  </div>{" "}
                  <br />
                  <div className="space-y-4">
                    <p className="w-full para ">
                      About 60% of the energy we consume disappears through body
                      heat. Vitalize turns that body heat into FIR rays which
                      energize your body and wellness. <br />
                    </p>
                    <h1 className="text-xl">SLEEP.RECOVER.PERFORM.</h1>
                    <p className="w-full  para ">
                      Vitalize reflects FIR rays to your body, improving your
                      blood circulation, sleep, and well-being. <br />
                    </p>
                  </div>
                </div>
                <img
                  src="/Images/joint/Vitalize.png"
                  alt="#img"
                  className="h-[400px] w-[500px] max-lg:h-[600px] max-sm:h-[400px] pl-3 max-xl:hidden"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-10 px-10 max-lg:px-3 py-4 max-lg:py-3">
              <div className=" h-full  text-white ">
                <h1 className="text-[80px] max-md:text-[60px]  font-bold max-sm:font-normal opacity-[40%]">
                  Sanitized
                </h1>
                <div className="space-y-4 max-xl:flex max-lg:flex-col justify-center items-center max-xl:gap-10">
                  <img
                    src="/Images/joint/hygiene.png"
                    alt="#img"
                    className="  hidden max-xl:block"
                  />

                  <p className="w-[90%] max-lg:w-full para ">
                    <h1 className="text-xl max-xl:mb-3">
                      PROTECTION <br />
                      CLEAN IS NOT ENOUGH. SANITIZED® PROTECTS MORE.
                    </h1>
                    The Sanitized® hygiene function stops molds, bacteria and
                    fungi from growing and causing spots, odours and dust mites.
                    The finished mattress fabrics keep their original look, feel
                    and functions.
                  </p>
                </div>
              </div>
              <div className=" text-white flex  ">
                <div className="w-[80%] max-xl:w-full">
                  <div>
                    <h1 className="text-xl">
                      COMFORT <br />
                      RELAX WITH SANITIZED® TREATED ITEMS.{" "}
                    </h1>
                  </div>{" "}
                  <br />
                  <div className="space-y-4">
                    <p className="w-full para ">
                      The waste of the dust mite is a common cause of allergies.
                      Our homes are warm, humid and well insulated - perfect for
                      dust mites and molds to grow. Mattresses and duvets are
                      easy targets for dust mites and molds. The Sanitized®
                      hygiene function, built into the mattress fabrics, blocks
                      bacteria, dust mites and fungi. Asthma sufferers can
                      breathe and rest better.
                      <br />
                    </p>
                    <h1 className="text-xl">
                      {" "}
                      FRESHNESS <br />
                      ENJOY THE FRESHNESS OF SANITIZED® TREATED MATTRESS FABRICS
                    </h1>
                    <p className="w-full  para ">
                      Odours are gone thanks to the Sanitized® hygiene function
                      in the textiles. Sanitized® works like a deodorant and
                      keeps your sleeping area fresh and protected. Whether you
                      are asleep or awake.
                      <br />
                    </p>
                  </div>
                </div>
                <img
                  src="/Images/joint/hygiene.png"
                  alt="#img"
                  className="h-[400px] w-[500px] max-lg:h-[600px] max-sm:h-[400px] pl-3 max-xl:hidden"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-10 px-10 max-lg:px-3 py-4 max-lg:py-3">
              <div className=" h-full  text-white ">
                <h1 className="text-[80px] max-md:text-[60px]  font-bold max-sm:font-normal opacity-[40%]">
                  Aegis
                </h1>
                <div className="space-y-4 max-xl:flex max-lg:flex-col justify-center items-center max-xl:gap-10">
                  <img
                    src="/Images/joint/aegis.png"
                    alt="#img"
                    className=" hidden max-xl:block"
                  />
                  <p className="w-[90%] max-lg:w-full para ">
                    Aegis eliminates odour-causing bacteria for a clean and
                    healthy sleep environment. <br />
                    <br /> AEGIS® is based on an antimicrobial technology that
                    has been proved to be a safe and effective way to eliminate
                    odor-causing bacteria for more than 30 years. AEGIS® is
                    effective in reducing odor-causing bacteria for more than 40
                    washes.
                  </p>
                </div>
              </div>
              <div className=" text-white flex items-center ">
                <div className="w-[80%] max-xl:w-full">
                  <div>
                    <h1 className="text-xl">HOW DOES IT WORK? </h1>
                  </div>{" "}
                  <br />
                  <div className="space-y-4">
                    <p className="w-full para ">
                      The active ingredient in AEGIS® forms a colorless,
                      odorless, positively charged polymer that molecularly
                      bonds to the treated surface. This positive charge
                      attracts bacteria to the treated fabric, where AEGIS®
                      makes the bacteria -and its odors and stains- a thing of
                      the past.
                      <br />
                    </p>
                  </div>
                </div>
                <img
                  src="/Images/joint/aegis.png"
                  alt="#img"
                  className="h-[400px] w-[500px] max-lg:h-[400px] pl-3 max-xl:hidden"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-10 px-10 max-lg:px-3 py-4 max-lg:py-3">
              <div className=" h-full  text-white ">
                <h1 className="text-[80px] max-md:text-[60px]  font-bold max-sm:font-normal opacity-[40%]">
                  Purotex
                </h1>
                <div className="space-y-4 max-xl:flex max-lg:flex-col justify-center items-center max-xl:gap-10">
                  <img
                    src="/Images/joint/purotex.png"
                    alt="#img"
                    className="  hidden max-xl:block"
                  />
                  <p className="w-[90%] max-lg:w-full para ">
                    A 100% bio based technology that uses probiotics to lower
                    allergens. Allergies are very common, affecting about 40% of
                    people worldwide.
                    <br />
                    In the US, most bedrooms have many allergens and some have
                    high levels. Every pillows and mattresses have allergens
                    after 6 months.
                  </p>
                </div>
              </div>
              <div className=" text-white flex file:items-start ">
                <div className="w-[80%] max-xl:w-full">
                  <div>
                    <h1 className="text-xl">HOW DOES IT WORK? </h1>
                  </div>{" "}
                  <br />
                  <div className="space-y-4">
                    <p className="w-full para ">
                      1. Probiotic Colonization: <br />
                      Synbiotics (= probiotics + prebiotic 'lunchbox') in
                      natural matrix applied to the textile <br />
                      <br />
                      2. Enzyme Production: <br />
                      Blend of probiotics produces a wide range of enzymes.{" "}
                      <br />
                      <br />
                      3. Allergen removal: <br />
                      These enzymes "digest" a large variety of inanimate
                      allergens (= organic protein molecules)
                      <br /> <br />
                    </p>
                  </div>
                </div>
                <img
                  src="/Images/joint/purotex.png"
                  alt="#img"
                  className="h-[400px] w-[500px] max-lg:h-[600px] max-sm:h-[400px] pl-3 max-xl:hidden"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-5 px-10 max-lg:px-3 py-4 max-lg:py-3">
              <div className=" h-full  text-white ">
                <h1 className="text-[80px] max-md:text-[60px]  font-bold max-sm:font-normal opacity-[40%]">
                  Skin+
                </h1>
                <div className="space-y-4 max-xl:flex max-lg:flex-col justify-center items-center max-xl:gap-10">
                  <img
                    src="/Images/joint/skincare.png"
                    alt="#img"
                    className="hidden max-xl:block"
                  />
                  <p className="w-[90%] max-lg:w-full para ">
                    <br />
                    <h1 className="text-xl">
                      {" "}
                      SKIN PROTECTION AND BEAUTY <br />
                      <br />
                    </h1>
                    Carotenoids are anti-oxidants that shield our skin from UV
                    light and aging. They renew skin cells and improve skin
                    moisture, softness and smoothness.
                    <br />
                  </p>
                </div>
              </div>
              <div className=" text-white flex  ">
                <div className="w-[80%] max-xl:w-full">
                  <p className="para">
                    <h1 className="text-xl my-3"> SKIN CARE WHILE YOU SLEEP</h1>{" "}
                    SKIN+ is a new skin care technology, a unique probiotic
                    treatment for mattress fabrics. <br />
                    Forget about applying lotions and creams. Just sleep and let
                    your mattress do the work.
                  </p>
                  <br />
                  <div>
                    <h1 className="text-xl">HOW DOES IT WORK? </h1>
                  </div>{" "}
                  <br />
                  <div className="space-y-4">
                    <p className="w-full para ">
                      The mattress fabrics have probiotics in tiny bulbs. The
                      bulbs stick to the fibres and last for 20 washes. When we
                      touch the mattress, the bulbs break and the probiotics
                      work. <br />
                      The Skin+ probiotics make carotenoids, natural colours in
                      fruits and vegetables. The carotenoids reach your skin
                      through sheets and nightdresses.
                    </p>
                  </div>
                </div>
                <img
                  src="/Images/joint/skincare.png"
                  alt="#img"
                  className="h-[400px] w-[500px] max-lg:h-[600px] max-sm:h-[400px] pl-3 max-xl:hidden"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-10 max-sm:gap-5 max-lg:gap-5 px-10 max-lg:px-3 py-4 max-lg:py-3">
              <div className=" h-full  text-white ">
                <h1 className="text-[80px] max-md:text-[60px]  font-bold max-sm:font-normal opacity-[40%]">
                  Recycled
                </h1>
                <div className="space-y-4 max-xl:flex max-lg:flex-col justify-center items-center max-xl:gap-10">
                  <img
                    src="/Images/joint/recycled.png"
                    alt="#img"
                    className=" hidden max-xl:block"
                  />
                  <p className="w-[90%] max-lg:w-full para ">
                    <br />
                    Circular textile industry BekaertDeslee makes mattresses
                    more sustainable. We use recycled polyester from our own
                    waste for inlay yarn. This waste comes from our plants and
                    becomes high-quality black inlay yarn.
                    <br /> <br />
                    Less textile waste Textile waste is a global issue. Only 15%
                    of textiles are recycled. The rest are burned or dumped.
                    BekaertDeslee does better, using recycled polyester from our
                    own waste for inlay yarn.
                  </p>
                </div>
              </div>
              <div className=" text-white flex items-center  ">
                <div className="w-[80%] max-xl:w-full">
                  <p className="para">
                    Black inlay yarn we offer black inlay yarn with recycled
                    polyester from textile waste and PET bottles. We want to
                    stop using PET bottles. We think textile to textile
                    recycling is best. <br />
                  </p>

                  <br />
                  <div className="space-y-4">
                    <p className="w-full para ">
                      Recycled polyester from our waste benefits: <br />
                      <br />- Circular textile economy <br />- Less carbon
                      emissions <br /> - No landfill or burning <br />- OEKOTEX
                      and GRS yarn
                    </p>
                  </div>
                </div>
                <img
                  src="/Images/joint/recycled.png"
                  alt="#img"
                  className="h-[400px] w-[500px] max-lg:h-[600px] max-sm:h-[400px] pl-3 max-xl:hidden"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default JointMatressSlider;

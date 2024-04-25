import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Add this line if you need Swiper navigation styles
import 'swiper/css/pagination'; // Add this line if you need Swiper pagination styles
// Other Swiper styles you might need




const Blogslider = () => {
  return (
    <div className=' '>
      <p className='text-8xl text-left p-10  max-md:text-6xl max-sm:text-4xl'>News & Blogs</p>
      <div className='flex justify-center gap-5 p-10 '>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}

          breakpoints={{
            220: {
              slidesPerView: 1
            },
            746: {
              slidesPerView: 2,
            },
            1730: {
              slidesPerView: 3,
            }
          }}


          loop={true}
          keyboard={true}


          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>

            <div className='flex m-auto  shadow-xl w-fit max-lg:flex-wrap'>

              <img className='w-50% max-xl:w-[200px] max-lg:w-full h-[350px]' src='./Images/Blog1.png' alt='' />


              <div className='flex text-left flex-col gap-10  p-10 '>
                <p className='font-semibold max-md:text-xl'>Lorem ipsum dolor sit amet, consectetur</p>
                <p className=' text-[#757575] max-md:text-sm'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et</p>
                <button className='w-fit font-semibold max-md:text-xl'>LEARN MORE</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex m-auto shadow-xl w-fit max-md:flex-wrap max-lg:flex-wrap'>

              <img className='w-50% max-xl:w-[200px] max-lg:w-full h-[350px]' src='./Images/Blog2.png' alt='' />


              <div className='flex text-left flex-col gap-10  p-10 '>
                <p className='font-semibold max-md:text-xl'>Lorem ipsum dolor sit amet, consectetur</p>
                <p className=' text-[#757575] max-md:text-sm'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et</p>
                <button className='w-fit font-semibold max-md:text-xl'>LEARN MORE</button>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex m-auto shadow-xl w-fit max-md:flex-wrap max-lg:flex-wrap'>

              <img className='w-50% max-xl:w-[200px] max-lg:w-full h-[350px]' src='./Images/Blog1.png' alt='' />


              <div className='flex text-left flex-col gap-10  p-10 '>
                <p className='font-semibold max-md:text-xl'>Lorem ipsum dolor sit amet, consectetur</p>
                <p className=' text-[#757575] max-md:text-sm'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et</p>
                <button className='w-fit font-semibold max-md:text-xl'>LEARN MORE</button>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex m-auto shadow-xl w-fit max-md:flex-wrap max-lg:flex-wrap'>

              <img className='w-50% max-xl:w-[200px] max-lg:w-full h-[350px]' src='./Images/Blog2.png' alt='' />


              {/* <div className='flex text-left flex-col gap-10  p-10'>
                <p className='font-semibold text-2xl max-md:text-xl'>Lorem ipsum dolor sit amet, consectetur</p>
                <p className=' text-[#757575] text-xl max-md:text-sm'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et</p>
                <button className='w-fit font-semibold text-2xl max-md:xl'>LEARN MORE</button>
              </div> */}
              <div className='flex text-left flex-col gap-10  p-10 '>
                <p className='font-semibold max-md:text-xl'>Lorem ipsum dolor sit amet, consectetur</p>
                <p className=' text-[#757575] max-md:text-sm'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et</p>
                <button className='w-fit font-semibold max-md:text-xl'>LEARN MORE</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex m-auto shadow-xl w-fit max-md:flex-wrap max-lg:flex-wrap'>

              <img className='w-50% max-xl:w-[200px] max-lg:w-full h-[350px]' src='./Images/Blog2.png' alt='' />


              {/* <div className='flex text-left flex-col gap-10  p-10'>
                <p className='font-semibold text-2xl max-md:text-xl'>Lorem ipsum dolor sit amet, consectetur</p>
                <p className=' text-[#757575] text-xl max-md:text-sm'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et</p>
                <button className='w-fit font-semibold text-2xl max-md:xl'>LEARN MORE</button>
              </div> */}
              <div className='flex text-left flex-col gap-10  p-10 '>
                <p className='font-semibold max-md:text-xl'>Lorem ipsum dolor sit amet, consectetur</p>
                <p className=' text-[#757575] max-md:text-sm'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et</p>
                <button className='w-fit font-semibold max-md:text-xl'>LEARN MORE</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex m-auto shadow-xl w-fit max-md:flex-wrap max-lg:flex-wrap'>

              <img className='w-50% max-xl:w-[200px] max-lg:w-full h-[350px]' src='./Images/Blog2.png' alt='' />


              {/* <div className='flex text-left flex-col gap-10  p-10'>
                <p className='font-semibold text-2xl max-md:text-xl'>Lorem ipsum dolor sit amet, consectetur</p>
                <p className=' text-[#757575] text-xl max-md:text-sm'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et</p>
                <button className='w-fit font-semibold text-2xl max-md:xl'>LEARN MORE</button>
              </div> */}
              <div className='flex text-left flex-col gap-10  p-10 '>
                <p className='font-semibold max-md:text-xl'>Lorem ipsum dolor sit amet, consectetur</p>
                <p className=' text-[#757575] max-md:text-sm'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et</p>
                <button className='w-fit font-semibold max-md:text-xl'>LEARN MORE</button>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default Blogslider
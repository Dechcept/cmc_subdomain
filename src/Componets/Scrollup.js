import React from 'react'
import { useEffect,useState } from "react";
import { FaArrowUp } from 'react-icons/fa';
const Scrollup = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
  
      setIsVisible(scrollTop > 300);
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div>
        <button
      className={`${
        isVisible ? 'opacity-70 scale-100' : 'opacity-0 scale-0'
      } fixed bottom-72 right-4 z-50 h-10 w-10 flex justify-center items-center text-white rounded-full bg-black transition-transform duration-300 ease-in-out transform focus:outline-none`}
      onClick={scrollToTop}
    >
      <FaArrowUp  className=" h-5 w-10  rounded-md" />
    </button>
    </div>
  )
}

export default Scrollup
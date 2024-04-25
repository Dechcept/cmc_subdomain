import React, { useState,useEffect } from 'react'
import { RxCross1 } from 'react-icons/rx';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Delay state change by 2 seconds after component mounts
    setTimeout(() => {
      setIsOpen(true);
    }, 3000);
  }, []);
  // Set initial state to true to open the popup

  const handleClose = () => {
    
    setIsOpen(false);
  };
  return (
    <div> {isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-4 max-w-lg rounded-lg shadow-md">
          <button className="absolute top-0 right-0 m-4 text-black" onClick={handleClose}>
          <RxCross1 className="text-4xl " />
          </button>
          <img src="/Images/exibution/exibution2.jpeg" alt="Popup Image" className="mb-4 rounded-lg" />
          <p className="text-gray-800"></p>
        </div>
      </div>
    )}</div>
  )
}

export default Popup
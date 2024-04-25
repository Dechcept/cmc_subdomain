import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

const AdminSidebar = () => {
  const options = [
    {
      title: "Job Posts",
      link: "/admin/Career/jobs",
    },
    {
      title: "job application",
      link: "/admin/Career/jobapplication",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const [activeIndex, setActiveIndex] = useState("");
  const [openDrop, setopenDrop] = useState(false);
  return (
    <div className="h-[100vh] bg-[#001529] ">
      <div className="flex flex-col gap-1 p-1 ">
        <h1 className="text-white text-2xl 4font-bold tracking-[2px] text-center p-1">
          CMC{" "}
        </h1>

        <Link
          to="/admin/Dashboard"
          className={` transition-all ease-in-out duration-300  hover:text-white hover:bg-blue-500 text-[#a6adb4]  flex items-center gap-3 rounded-xl p-2`}
        >
          <AiOutlineAppstoreAdd className={` text-2xl`} />
          <div className="tracking-widest p-2 font-normal text-base ">
            Dashboard
          </div>
        </Link>
        <Link
          to="/admin/Blog"
          className={` transition-all ease-in-out duration-300 hover:bg-blue-500 hover:text-white text-[#a6adb4]  flex items-center gap-3 rounded-xl p-2`}
        >
          <AiOutlineAppstoreAdd className={` text-2xl`} />
          <div className="tracking-widest p-2 font-normal text-base ">Blog</div>
        </Link>
        <button
          onClick={toggleDropdown}
          className={` transition-all ease-in-out duration-300  hover:text-white hover:bg-blue-500 text-[#a6adb4]  flex items-center gap-3 rounded-xl p-2`}
        >
          <AiOutlineAppstoreAdd className={` text-2xl`} />
          <div className="tracking-widest p-2 w-52 font-normal text-left text-base ">
            Career {selectedOption ? selectedOption.label : "Select an option"}
          </div>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } origin-top-right  mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity ease-in-out duration-300`}
        >
          <div className="py-1">
            {options.map((option) => (
              <Link
                key={option.value}
                to={option.link}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {option.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;

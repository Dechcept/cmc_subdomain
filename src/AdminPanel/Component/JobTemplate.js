import React from "react";
import { CiEdit } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import toast from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { useDispatch } from "react-redux";
import { EditOpen } from "../../Redux/AdminCareerSlice";
const JobTemplate = ({ item, getData, index }) => {
  const jobDataDelete = async (PID) => {
    console.log(PID);
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/detail/delete-data/${PID}`
      );
      console.log(res);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div className="flex text-lg p-2 py-5 bg-white border-b-[1px] ">
          <div className=" w-[10%]">
            <ul className="flex justify-between ">
              <li>{1 + index}</li>
            </ul>
          </div>
          <ul className="flex justify-between  w-[90%]">
            <li className="w-1/4 text-left">{item.jobTitle}</li>
            <li className="w-1/4">{item.jobType}</li>
            <li className="w-1/4"> {item.jobLocation}</li>
            <li className="flex gap-2 w-1/6">
              <div
                className="bg-blue-600 h-fit p-1 rounded-lg"
                onClick={() => {
                  dispatch(EditOpen(item._id));
                }}
              >
                <CiEdit className="text-white" />
              </div>
              <div className="bg-blue-600 h-fit p-1 rounded-lg">
                <IoMdEye className="text-white" />
              </div>
              <div
                className="bg-red-600 h-fit p-1 rounded-lg"
                onClick={() => {
                  jobDataDelete(item._id);
                }}
              >
                <AiFillDelete className="text-white" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobTemplate;

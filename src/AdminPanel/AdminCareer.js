import React, { useEffect, useState } from "react";
import AdminMain from "./AdminMain";
import { IoIosRefresh, IoMdEye, IoMdEyeOff } from "react-icons/io";
import CareerForm from "./Component/CareerForm";
import { useDispatch, useSelector } from "react-redux";
import { EditOpen, addData } from "../Redux/AdminCareerSlice";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditForm from "./Component/EditForm";
import { CiEdit } from "react-icons/ci";
import { format } from "date-fns";
import { animate } from "framer-motion";

const AdminCareer = (props) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.Admincareer.IsOpen);
  const isEdit = useSelector((state) => state.Admincareer.IsEdit);
  const [JobData, setJobData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/detail/getJobdetail`
      );
      setJobData(data.jobdetails);
      setLoading(false);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleRefresh = () => {
    setLoading(!loading);
    getData();
  };
  const jobDataDelete = async (PID) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/detail/delete-data/${PID}`
      );

      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminMain>
      <div className="  bg-[#f5f5f5] p-3 relative h-full">
        {isOpen ? <CareerForm getData={getData} /> : ""}
        {isEdit ? <EditForm getData={getData} /> : ""}
        <div className="m-5  bg-white h-fit rounded-lg  hover:shadow-xl transition-all ease-in-out duration-150">
          <div className="bg-[#001529] flex justify-between p-2 rounded-t-lg ">
            <div className="text-white text-lg">Job Posts Information</div>
            <div
              className="border-[1px] p-1 bg-white rounded-lg cursor-pointer"
              onClick={() => {
                dispatch(addData());
                console.log(isOpen);
              }}
            >
              <span className="font-bold">Add New</span>
            </div>
          </div>

          <div className="p-2 bg-white space-y-4  rounded-lg h-[300px] ">
            <div className="flex gap-3 border-b-[1px] pb-2 border-gray-100 mt-2">
              <div
                className="bg-[#06b4d2] w-fit p-2 rounded-lg border-2 "
                onClick={handleRefresh}
              >
                <IoIosRefresh
                  className={`text-white text-2xl ${
                    loading ? "animate-spin" : ""
                  } `}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search..."
                  value={search}
                  className="pr-16 placeholder:text-gray-400 placeholder:text-xl outline-none placeholder:font-light border-[1px] p-2 rounded-lg"
                  onChange={(e) => {
                    const searchnew = e.target.value;
                    setSearch(searchnew);
                  }}
                />
              </div>
            </div>
            <div className="">
              <div className=" overflow-x-auto pb-10">
                <table className="w-full">
                  <thead>
                    <tr className=" border-y-[1px] bg-[#f5f5f5]">
                      <th className="admintable text-center  ">
                        <h1 className="w-14 ">NO</h1>
                      </th>
                      <th className="admintable  ">
                        <h1 className="w-[300px] text-center">Title</h1>
                      </th>
                      <th className="admintable ">
                        <h1 className="w-[200px]">Type</h1>
                      </th>
                      <th className="admintable ">
                        <h1 className="w-[200px]">Location</h1>
                      </th>
                      <th className="admintable ">
                        <h1 className="w-[200px]">Added On</h1>
                      </th>
                      <th className="admintable ">
                        <h1 className="w-[200px]">Updated On</h1>
                      </th>
                      <th className="admintable ">
                        <h1 className="w-[200px]">Action</h1>
                      </th>
                    </tr>
                  </thead>
                  {JobData.filter((item) =>
                    item.jobTitle.toLowerCase().includes(search.toLowerCase())
                  ).map((item, index) => {
                    return (
                      <tr className=" border-[1px]">
                        <td className="admintable ">
                          <h1 className="w-14">{1 + index}</h1>
                        </td>
                        <td className="admintable2  ">
                          <h1 className="w-[300px]"> {item.jobTitle}</h1>
                        </td>
                        <td className=" admintable">
                          <h1 className="w-[200px]"></h1>
                          {item.jobType}
                        </td>
                        <td className=" admintable">
                          <h1 className="w-[200px]"></h1>
                          {item.jobLocation}
                        </td>
                        <td className="admintable">
                          {" "}
                          <h1 className="w-[230px]">
                            {" "}
                            {format(
                              new Date(item.createdAt),
                              " dd MMMM , yyyy "
                            )}
                          </h1>
                        </td>
                        <td className="admintable">
                          {" "}
                          <h1 className="w-[230px]">
                            {format(
                              new Date(item.updatedAt),
                              " dd MMMM , yyyy "
                            )}
                          </h1>
                        </td>
                        <td className="admintable">
                          <div className="w-[200px]">
                            <div className="flex justify-center gap-3">
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
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminMain>
  );
};

export default AdminCareer;

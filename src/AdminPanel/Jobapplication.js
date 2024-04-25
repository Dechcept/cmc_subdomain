import React, { useEffect, useState } from "react";
import AdminMain from "./AdminMain";
import { IoIosRefresh, IoMdEye } from "react-icons/io";
import { useDispatch } from "react-redux";
import axios from "axios";
import { format } from "date-fns";
import { CiEdit } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";

const Jobapplication = (props) => {
  const dispatch = useDispatch();
  // const isOpen = useSelector((state) => state.Admincareer.IsOpen);
  // const isEdit = useSelector((state) => state.Admincareer.IsEdit);
  const [JobData, setJobData] = useState([]);
  const [search, setSearch] = useState("");
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/job-application`
      );
      setJobData(data.jobApplications);
    } catch (error) {
      console.log(error);
    }
  };
  const openFileInNewTab = (fileUrl) => {
    window.open(fileUrl, "_blank");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AdminMain>
      <div className="  bg-[#f5f5f5] p-3 relative h-full ">
        {/* {isOpen ? <CareerForm getData={getData} /> : ""} */}
        {/* {isEdit ? <EditForm getData={getData} /> : ""} */}
        <div className="m-5  bg-white h-fit rounded-lg  hover:shadow-xl transition-all ease-in-out duration-150">
          <div className="bg-[#001529] flex justify-between p-2 rounded-t-lg ">
            <div className="text-white text-lg">
              Job Application Information
            </div>
          </div>

          <div className=" bg-white space-y-4 h-[300px] ">
            <div className=" p-2 flex gap-3 border-b-[1px]  border-gray-100 mt-2">
              <div className="bg-[#06b4d2] w-fit p-2 rounded-lg border-2">
                <IoIosRefresh className="text-white text-2xl" />
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
            <div>
              <div className="overflow-x-scroll pb-10">
                <table className="w-full ">
                  <thead>
                    <tr className="border-y-[1px] bg-[#f5f5f5]  ">
                      <th className="admintable">
                        {" "}
                        <h1 className=" w-[200px]">Name</h1>
                      </th>
                      <th className="admintable ">
                        {" "}
                        <h1 className=" w-[300px]">Name</h1>
                      </th>
                      <th className="admintable ">
                        <h1 className=" w-[180px]">Mobile</h1>
                      </th>
                      <th className="admintable ">
                        <h1 className=" w-[180px]">Job Title</h1>
                      </th>
                      <th className="admintable ">
                        <h1 className=" w-[100px]">Attachment</h1>
                      </th>
                      <th className="admintable ">
                        <h1 className=" w-[200px]"> Application Received on</h1>
                      </th>
                      <th className="admintable ">
                        <h1 className=" w-full">Action</h1>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {JobData.filter((item) =>
                      item.email.toLowerCase().includes(search.toLowerCase())
                    ).map((item, index) => {
                      return (
                        <tr className="border" key={index}>
                          <td className="admintable w-[200px]">{item.name}</td>
                          <td className="admintable w-[300px]">{item.email}</td>
                          <td className="admintable w-[180px]">
                            {item.mobile}
                          </td>
                          <td className="admintable w-[180px]">DM</td>
                          <td className="admintable  w-[100px] flex justify-center border-none">
                            <div
                              className=" w-fit  bg-zinc-600 text-white px-2"
                              onClick={() => {
                                const fileUrl = `${process.env.REACT_APP_API}/uploads/${item.file}`;
                                openFileInNewTab(fileUrl);
                              }}
                            >
                              PDF
                            </div>
                          </td>
                          <td className="admintable w-[200px]">
                            {format(
                              new Date(item.createdAt),
                              " dd MMMM , yyyy "
                            )}
                          </td>
                          <td className=" ">
                            <div className="w-[200px]">
                              <div className="flex justify-center gap-3">
                                <div className="bg-blue-600 h-fit p-1 rounded-lg">
                                  <IoMdEye className="text-white" />
                                </div>
                                <div
                                  className="bg-red-600 h-fit p-1 rounded-lg"
                                  // onClick={() => {
                                  //   jobDataDelete(item._id);
                                  // }}
                                >
                                  <AiFillDelete className="text-white" />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminMain>
  );
};

export default Jobapplication;

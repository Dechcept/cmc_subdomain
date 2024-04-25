import React, { useEffect, useState } from "react";
import AdminMain from "./AdminMain";
import { IoIosRefresh, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import BlogCreateForm from "./Component/blog/BlogCreateForm";
import EditBlog from "./Component/blog/EditBlog";
import { addBlogData, blogEditOpen } from "../Redux/AdminBlogSlice";
import { format } from "date-fns";

const Blog = (props) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.AdminBlog.IsOpen);
  const isEdit = useSelector((state) => state.AdminBlog.IsEdit);
  const [blogData, setblogData] = useState([]);
  const [search, setSearch] = useState("");
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v2/blog/getBlogData`
      );
      setblogData(data.blogdata);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const blogDataDelete = async (PID) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API}/api/v2/blog/blogdelete/${PID}`
      );
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminMain>
      <div className="  bg-[#f5f5f5] p-3 relative h-full">
        {isOpen ? <BlogCreateForm getData={getData} /> : ""}
        {isEdit ? <EditBlog getData={getData} /> : ""}
        <div className="m-5  bg-white h-fit rounded-lg  hover:shadow-xl transition-all ease-in-out duration-150">
          <div className="bg-[#001529] flex justify-between p-2 rounded-t-lg ">
            <div className="text-white text-lg">Blog Information</div>
            <div
              className="border-[1px] p-1 bg-white rounded-lg cursor-pointer"
              onClick={() => {
                dispatch(addBlogData());
                console.log(isOpen);
              }}
            >
              <span className="font-bold">Add New</span>
            </div>
          </div>

          <div className="p-2 bg-white space-y-4  ">
            <div className="flex gap-3 border-b-[1px] pb-2 border-gray-100 mt-2">
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
                    {/* sr no date title heading by action */}
                    <tr className="border-y-[1px] bg-[#f5f5f5]  ">
                      <th className="py-2 admintable px-4 border">No</th>
                      <th className="py-2 admintable px-4 border">Date</th>
                      <th className="py-2 px-4 admintable border">Title</th>
                      {/* <th className="py-2 px-4 border">Heading</th> */}
                      <th className="py-2 px-4 admintable border">Postby</th>
                      <th className="py-2 px-4  admintable border">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogData
                      .filter((item) =>
                        item.title.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((item, index) => {
                        return (
                          <tr className="border" key={index}>
                            <td className="admintable ">{1 + index}</td>
                            <td className="admintable py-2 px-4 ">
                              {format(
                                new Date(item.createdAt),
                                " dd MMMM , yyyy " 
                              )}
                            </td>
                            <td className="admintable py-2 px-4 ">
                              {item.title}
                            </td>

                            <td className="admintable py-2 px-4 ">Admin</td>
                            <td className=" ">
                              <div className="w-full">
                                <div className="flex justify-center gap-3">
                                  <div
                                    className="bg-blue-600 h-fit p-1 rounded-lg"
                                    onClick={() => {
                                      dispatch(blogEditOpen(item._id));
                                    }}
                                  >
                                    <IoMdEye className="text-white" />
                                  </div>
                                  <div
                                    className="bg-red-600 h-fit p-1 rounded-lg"
                                    onClick={() => {
                                      blogDataDelete(item._id);
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

export default Blog;

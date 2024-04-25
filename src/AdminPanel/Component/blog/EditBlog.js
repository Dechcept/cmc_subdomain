import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { addBlogData, blogEditOpen } from "../../../Redux/AdminBlogSlice";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";

const EditBlog = ({ getData }) => {
  const editId = useSelector((state) => state.AdminBlog.EditID);
  const getSingleData = async () => {
    let res = await axios.get(
      `${process.env.REACT_APP_API}/api/v2/blog/get-single-blog/${editId}`
    );
    const { blogdata } = res.data;
    setFormData({
      title: blogdata.title,
      introducation: blogdata.introducation,
      file: blogdata.file,
    });
    setContent(blogdata.content);
    setImageFile(blogdata.file);
  };

  useEffect(() => {
    getSingleData();
  }, []);
  const [formData, setFormData] = useState({
    title: "",
    introducation: "",
    file: null,
  });

  console.log(formData);
  const editor = useRef(null);
  const fileInputRef = useRef(null);
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: file,
    }));
  };

  const dispatch = useDispatch();
  // State to manage form errors
  const [formErrors, setFormErrors] = useState({});

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const errors = validateForm(formData);
    setFormErrors(errors);

    // If there are no errors, you can submit the form
    if (Object.keys(errors).length === 0) {
      // Perform form submission logic here

      try {
        const formDataToSend = new FormData();
        formDataToSend.append("title", formData.title);
        formDataToSend.append("introducation", formData.introducation);
        formDataToSend.append("file", formData.file);
        formDataToSend.append("content", content);
        let res = await axios.put(
          `${process.env.REACT_APP_API}/api/v1/blog/update-blog/${editId}`,
          formDataToSend
        );
        if (res.data.success) {
          toast.success(res.data.message);
          dispatch(blogEditOpen());
        }
        getData();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  // Function to validate the form
  const validateForm = (data) => {
    const errors = {};

    if (!data.title.trim()) {
      errors.title = " title is required";
    }

    if (!data.introducation.trim()) {
      errors.introducation = "introducation is required";
    }
    if (!data.file) {
      errors.file = "Image is required";
    }
    return errors;
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto ">
        <div className="bg-white rounded-lg p-5 overflow-y-scroll w-2/3 mt-10">
          <div className="flex justify-end my-3 cursor-pointer">
            <RxCross2
              className="text-xl"
              onClick={() => {
                dispatch(blogEditOpen());
              }}
            />
          </div>
          <form>
            <div className="flex justify-center gap-10">
              <div className="hover:shadow-2xl border-[1px] rounded-xl w-2/3">
                <div className="flex flex-col gap-3 my-5 p-10">
                  <div className="flex flex-col w-full text-left gap-1">
                    <label htmlFor="title">
                      <span className="text-red-500">*</span> Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className={`border-[1px] border-gray-400 p-2 outline-none rounded-md ${
                        formErrors.title ? "border-red-500" : ""
                      }`}
                    />
                    {formErrors.title && (
                      <p className="text-red-600 text-xs">{formErrors.title}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1 w-full text-left">
                    <label htmlFor="introducation">Introducation</label>
                    <input
                      type="text"
                      id="introducation"
                      name="introducation"
                      value={formData.introducation}
                      onChange={handleInputChange}
                      className={`border-[1px] border-gray-400 p-4 outline-none rounded-md ${
                        formErrors.introducation ? "border-red-500" : ""
                      }`}
                    />
                    {formErrors.introducation && (
                      <p className="text-red-600 text-xs">
                        {formErrors.introducation}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1 w-full text-left">
                    <label htmlFor="file">Upload Image</label>
                    <input
                      type="file"
                      id="file"
                      ref={fileInputRef}
                      name="file"
                      onChange={handleImageUpload}
                      className={`border-[1px] border-gray-400 p-4 outline-none rounded-md ${
                        formErrors.file ? "border-red-500" : ""
                      }`}
                    />
                    {formErrors.file && (
                      <p className="text-red-600 text-xs">{formErrors.file}</p>
                    )}
                  </div>

                  <div className="p-2 w-full">
                    <JoditEditor
                      ref={editor}
                      value={content || "Your placeholder here..."}
                      tabIndex={1}
                      onBlur={(newContent) => setContent(newContent)}
                      onChange={(newContent) => {}}
                    />
                  </div>
                </div>
              </div>
            </div>

            <br />

            <div className="flex justify-end gap-5">
              <button
                type="button"
                className="bg-white text-gray-400 border-[1px] hover:border-gray-600 hover:text-black duration-300 p-1 px-3 rounded-lg"
                onClick={() => {
                  dispatch(blogEditOpen());
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-blue-500 hover:bg-gray-600 duration-700 p-1 px-3 rounded-lg text-white"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;

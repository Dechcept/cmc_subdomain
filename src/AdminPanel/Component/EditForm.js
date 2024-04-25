import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditOpen, addData } from "../../Redux/AdminCareerSlice";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";

const EditForm = ({ getData }) => {
  const editId = useSelector((state) => state.Admincareer.EditID);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const getSelectedData = async () => {
    var res = await axios.get(
      `${process.env.REACT_APP_API}/api/v1/detail/get-single-data/${editId}`
    );
    const { jobdetails } = res.data;
    setFormData({
      jobType: jobdetails.jobType,
      jobTitle: jobdetails.jobTitle,
      jobLocation: jobdetails.jobLocation,
      jobDescription: jobdetails.jobDescription,
    });
    setContent(jobdetails.content);
  };
  useEffect(() => {
    getSelectedData();
  }, []);

  const [formData, setFormData] = useState({
    jobType: "",
    jobTitle: "",
    jobLocation: "",
    jobDescription: "",
  });

  // const [work, setwork] = useState("");
  // const [work1, setwork1] = useState("");
  // const [List, setList] = useState([]);
  // const [List1, setList1] = useState([]);

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
        const res = await axios.put(
          `${process.env.REACT_APP_API}/api/v1/detail/update-job/${editId}`,
          { formData, content }
        );
        getData();
        dispatch(EditOpen());
        toast.success("Data Updated");

        // alert("suceessFully");
      } catch (error) {
        console.log(error);
      }
      setFormData({
        jobType: "",
        jobTitle: "",
        jobLocation: "",
        jobDescription: "",
      });
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  // Function to validate the form
  const validateForm = (data) => {
    const errors = {};

    // Example validation rules (you can customize these)
    if (!data.jobType.trim()) {
      errors.jobType = "Job Type is required";
    }

    if (!data.jobTitle.trim()) {
      errors.jobTitle = "Job Title is required";
    }

    if (!data.jobLocation.trim()) {
      errors.jobLocation = "Job Location is required";
    }

    if (!data.jobDescription.trim()) {
      errors.jobDescription = "Job Description is required";
    }

    return errors;
  };
  return (
    <div>
      <div className=" fixed inset-0 transition-all duration-500 z-30">
        <div className="bg-black  h-full w-full inset-0 bg-opacity-50 ">
          <main className="h-full w-full flex flex-col justify-center  items-center">
            <div className="bg-white rounded-lg m-auto  p-4 overflow-scroll">
              <div className="flex justify-end my-3">
                <RxCross2
                  className="text-xl"
                  onClick={() => {
                    dispatch(EditOpen());
                  }}
                />
              </div>
              <title className="text-xl text-left my-3 pl-2 font-semibold">
                Edit Form
              </title>
              <form>
                <div className="flex ">
                  <div className="hover:shadow-2xl rounded-xl ">
                    <h1 className="bg-[#5f6caf] w-1/2 text-white p-2 rounded-t-xl  ">
                      Basic Information
                    </h1>
                    <div className="flex flex-col gap-3 my-5 p-3 ">
                      <div className="flex flex-col gap-1 w-1/2 text-left">
                        <label htmlFor="">
                          {" "}
                          <span className="text-red-500">*</span>Job Type
                        </label>
                        <input
                          type="text"
                          required
                          text-left
                          name="jobType"
                          value={formData.jobType}
                          onChange={handleInputChange}
                          className={`border-2 p-2 outline-none rounded-md ${
                            formErrors.jobType ? "border-red-500" : ""
                          }`}
                        />
                        {formErrors.jobType ? (
                          <pb className="text-red-600 text-xs">
                            {formErrors.jobType}
                          </pb>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="flex flex-col gap-1 w-1/2 text-left">
                        <label htmlFor="">Job title</label>
                        <input
                          type="text"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          className={`border-2 p-2 outline-none rounded-md ${
                            formErrors.jobTitle ? "border-red-500" : ""
                          }`}
                        />
                        {formErrors.jobTitle ? (
                          <p className="text-red-600 text-xs">
                            {formErrors.jobTitle}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="flex flex-col gap-1 w-1/2 text-left">
                        <label htmlFor="">Job Location</label>
                        <input
                          type="text"
                          name="jobLocation"
                          value={formData.jobLocation}
                          onChange={handleInputChange}
                          className={`border-2 p-2 outline-none rounded-md ${
                            formErrors.jobLocation ? "border-red-500" : ""
                          }`}
                        />

                        {formErrors.jobTitle ? (
                          <p className="text-red-600 text-xs ">
                            {formErrors.jobLocation}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="flex flex-col gap-1 w-1/2 text-left">
                        <label htmlFor="">Job Description</label>
                        <textarea
                          name="jobDescription"
                          cols="10"
                          value={formData.jobDescription}
                          onChange={handleInputChange}
                          className={`border-2 p-2 outline-none rounded-md ${
                            formErrors.jobDescription ? "border-red-500" : ""
                          }`}
                        ></textarea>
                        {formErrors.jobDescription ? (
                          <p className="text-red-600 text-xs">
                            {formErrors.jobDescription}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="p-2  w-[1000px] ">
                      <JoditEditor
                        ref={editor}
                        value={content}
                        // config={config}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                        onChange={(newContent) => {}}
                      />
                    </div>
                  </div>
                </div>

                <br />
                <div className="flex justify-end gap-5">
                  <button
                    className="bg-white text-gray-400 border-[1px] hover:border-gray-600   hover:text-black duration-300 p-1 px-3 rounded-lg "
                    onClick={() => {
                      dispatch(EditOpen());
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-gray-600 duration-700 p-1 px-3 rounded-lg text-white "
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
            {formErrors.jobType && (
              <p className="text-red-500 text-xs">{formErrors.jobType}</p>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default EditForm;

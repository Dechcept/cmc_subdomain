import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import JoditEditor from "jodit-react";
import { addData } from "../../Redux/AdminCareerSlice";

const CareerForm = ({ getData }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [formData, setFormData] = useState({
    jobType: "",
    jobTitle: "",
    jobLocation: "",
    jobDescription: "",
  });

  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        let res = await axios.post(
          `${process.env.REACT_APP_API}/api/v1/detail/job`,
          { formData, content }
        );
        alert("Successfully submitted!");
        getData();
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

  const validateForm = (data) => {
    const errors = {};

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
    <div className="fixed inset-0 transition-all duration-500 z-30">
      <div className="bg-black h-full w-full inset-0 bg-opacity-50 flex items-center justify-center">
        <main className="h-full w-full flex flex-col justify-center items-center">
          <div className="bg-white rounded-lg m-auto p-4 overflow-y-scroll max-w-4xl w-full">
            <div className="flex justify-end my-3 cursor-pointer">
              <RxCross2
                className="text-xl"
                onClick={() => {
                  dispatch(addData());
                }}
              />
            </div>
            <form>
              <div className="flex">
                <div className="hover:shadow-2xl rounded-xl w-full">
                  <h1 className="bg-[#5f6caf] text-white p-2 rounded-t-xl">
                    Basic Information
                  </h1>
                  <div className="flex flex-col gap-3 my-5 p-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="text-left">
                        <label htmlFor="jobType">
                          {" "}
                          <span className="text-red-500">*</span>Job Type
                        </label>
                        <input
                          type="text"
                          required
                          id="jobType"
                          name="jobType"
                          value={formData.jobType}
                          onChange={handleInputChange}
                          className={`border-2 p-2 outline-none rounded-md w-full ${
                            formErrors.jobType ? "border-red-500" : ""
                          }`}
                        />
                        {formErrors.jobType && (
                          <p className="text-red-600 text-xs">
                            {formErrors.jobType}
                          </p>
                        )}
                      </div>
                      <div className="text-left">
                        <label htmlFor="jobTitle">Job Title</label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          className={`border-2 p-2 outline-none rounded-md w-full ${
                            formErrors.jobTitle ? "border-red-500" : ""
                          }`}
                        />
                        {formErrors.jobTitle && (
                          <p className="text-red-600 text-xs">
                            {formErrors.jobTitle}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="text-left">
                        <label htmlFor="jobLocation">Job Location</label>
                        <input
                          type="text"
                          id="jobLocation"
                          name="jobLocation"
                          value={formData.jobLocation}
                          onChange={handleInputChange}
                          className={`border-2 p-2 outline-none rounded-md w-full ${
                            formErrors.jobLocation ? "border-red-500" : ""
                          }`}
                        />
                        {formErrors.jobLocation && (
                          <p className="text-red-600 text-xs">
                            {formErrors.jobLocation}
                          </p>
                        )}
                      </div>
                      <div className="text-left">
                        <label htmlFor="jobDescription">Job Description</label>
                        <textarea
                          id="jobDescription"
                          name="jobDescription"
                          cols="10"
                          value={formData.jobDescription}
                          onChange={handleInputChange}
                          className={`border-2 p-2 outline-none rounded-md w-full ${
                            formErrors.jobDescription ? "border-red-500" : ""
                          }`}
                        ></textarea>
                        {formErrors.jobDescription && (
                          <p className="text-red-600 text-xs">
                            {formErrors.jobDescription}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="p-2 w-full">
                      <JoditEditor
                        ref={editor}
                        value={content}
                        tabIndex={1}
                        onBlur={(newContent) => setContent(newContent)}
                        onChange={(newContent) => {}}
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-5">
                <button
                  className="bg-white text-gray-400 border-[1px] hover:border-gray-600 hover:text-black duration-300 p-1 px-3 rounded-lg"
                  onClick={() => {
                    dispatch(addData());
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
        </main>
      </div>
    </div>
  );
};

export default CareerForm;

import React, { useState } from "react";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCircleNotch } from "react-icons/fa";
const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    PortfolioUrl: "",
    Nationality: "",
    Experience: "",
    policy: false,
    file: null,
  });

  console.log(formData);
  const [errors, setErrors] = useState({});
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: file,
    }));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".pdf",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }

    // Validate Contact Number
    const phoneRegex = /^[0-9]+$/;
    if (!formData.mobile.trim() || !phoneRegex.test(formData.mobile)) {
      newErrors.mobile = "Valid contact number is required";
      isValid = false;
    }

    // Validate Nationality
    if (!formData.Nationality.trim()) {
      newErrors.Nationality = "Nationality is required";
      isValid = false;
    }

    // Validate Experience
    if (!formData.Experience.trim()) {
      newErrors.Experience = "Experience is required";
      isValid = false;
    }

    // Validate File
    if (!formData.file) {
      newErrors.file = "Resume is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    if (validateForm()) {
      try {
        const formDataSend = new FormData();
        formDataSend.append("name", formData.name);
        formDataSend.append("email", formData.email);
        formDataSend.append("mobile", formData.mobile);
        formDataSend.append("PortfolioUrl", formData.PortfolioUrl);
        formDataSend.append("Nationality", formData.Nationality);
        formDataSend.append("Experience", formData.Experience);
        formDataSend.append("policy", formData.policy);
        formDataSend.append("file", formData.file);

        // Using axios to send the form data
        const { data } = await axios.post(
          `${process.env.REACT_APP_API}/api/v1/auth/request-for-job`,
          formDataSend
        );

        if (data && data.success) {
          alert("Form Submitted");
          setloading(false);

          setFormData({
            name: "",
            email: "",
            mobile: "",
            PortfolioUrl: "",
            Nationality: "",
            Experience: "",
            policy: false,
            file: null,
          });
        } else {
          alert(data.message);
          setloading(false);
        }
      } catch (error) {
        setloading(false);
        alert(error);
        console.error(error);
      }
    } else {
      alert("Form is invalid. Please fix the errors.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const [loading, setloading] = useState(false);
  return (
    <div className="mt-28 max-md:mt-10  bg-black text-white py-10 w-auto">
      <ToastContainer />
      <div className="flex flex-col md:items-center  gap-16 p-3  ">
        <div className="flex flex-col gap-6 ">
          <p className="text_40 max-sm:text-[28px] text-center max-sm:text-left w-[960px] text-white max-lg:w-full mt-5 ">
            Please enter required information, We will contact you soon
          </p>
        </div>
        <div className="">
          <form
            className="grid grid-cols-2 gap-12 max-lg:grid-cols-1 w-full"
            method="post"
            encType="multipart/form-data"
          >
            <div className="">
              <input
                type="text"
                name="name"
                id="name"
                className={`formInput bg-black border-white placeholder:text-white ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className={`formInput  bg-black  border-white placeholder:text-white ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                className={`formInput  bg-black border-white  placeholder:text-white ${
                  errors.mobile ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Phone *"
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="PortfolioUrl"
                value={formData.PortfolioUrl}
                onChange={handleChange}
                id="PortfolioUrl"
                className={`formInput   bg-black border-white placeholder:text-white ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Portfolio Url"
              />
              {errors.PortfolioUrl && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.PortfolioUrl}
                </p>
              )}
            </div>
            <div className=" mb-5 ">
              <input
                name="Nationality"
                id="Nationality"
                value={formData.Nationality}
                onChange={handleChange}
                className={`formInput    bg-black border-white placeholder:text-white  `}
                placeholder="Nationality *"
              />
              {errors.Nationality && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.Nationality}
                </p>
              )}
            </div>
            <div className=" mb-5 ">
              <input
                name="Experience"
                id="Experience"
                value={formData.Experience}
                onChange={handleChange}
                className={`formInput  bg-black border-white placeholder:text-white  `}
                placeholder="Experience *"
              />
              {errors.Experience && (
                <p className="text-red-500 text-xs mt-1">{errors.Experience}</p>
              )}
            </div>

            <div className="col-span-2 max-lg:col-span-1">
              <div
                {...getRootProps()}
                className={`bg-[#EFEFEF] border-[4px] border-dashed p-10 text-center flex justify-center items-center gap-3 w-full xl:w-[955px]  px-10 py-10 y ${
                  (isDragActive ? "border-green-500" : "border-gray-300",
                  formData.file ? "border-green-500 " : "")
                } `}
              >
                <input {...getInputProps()} />

                {isDragActive ? (
                  <h1
                    className={`text-base text-[#afafaf] ${
                      isDragActive ? "border-green-500" : "border-gray-300"
                    } font-sans font-bold leading-[100%] tracking-[2px] text-green-500`}
                  >
                    DROP TO UPLOAD YOUR RESUME{" "}
                    <span className="text-base   font-sans font-bold leading-[100%] tracking-[2px] text-black ">
                      {" "}
                      OR BROWSE
                    </span>
                  </h1>
                ) : (
                  <h1
                    className={`text-base text-[#afafaf] ${
                      isDragActive ? "border-green-500" : "border-gray-300"
                    } font-sans font-bold leading-[100%] tracking-[2px]`}
                  >
                    DROP TO UPLOAD YOUR RESUME{" "}
                    <span className="text-base  font-sans font-bold leading-[100%] tracking-[2px] text-black ">
                      {" "}
                      OR BROWSE
                    </span>
                  </h1>
                )}
              </div>
              <div className="flex items-center gap-4 mt-2">
                <input
                  name="policy"
                  type="checkbox"
                  onChange={handleChange}
                  checked={formData.policy}
                />
                <span className="text-base">
                  I agree to all terms and condition and privacy policy of CMC
                </span>
              </div>{" "}
            </div>
            <div className="bg-white px-5 max-sm:px-3 py-2  flex flex-col items-center w-fit h-fit rounded-sm">
              <button
                type="button"
                onClick={handleSubmit}
                className="flex gap-2 items-center justify-center group"
              >
                <h1 className="text-black font-semibold font-sans para max-sm:text-base  ">
                  {loading ? "Submitting..." : "Submit"}
                </h1>
                {!loading ? (
                  <img
                    src="/Images/Yarn/ButtonAngle.png"
                    className="text-black  "
                  />
                ) : (
                  <div className="animate-spin text-black">
                    <FaCircleNotch />
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;

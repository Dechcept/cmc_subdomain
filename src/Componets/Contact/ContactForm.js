import React, { useState } from "react";
import Button from "../Button";
import { AiOutlineRight } from "react-icons/ai";
import { Form } from "react-router-dom";
import Aos from "aos";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [mainData, setMainData] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "phone is required";
    if (!formData.subject) newErrors.subject = "Subject is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const [name, setname] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      UserRegister();
    }
  };

  const [loading, setloading] = useState(false);
  const UserRegister = async () => {
    try {
      setloading(true);
      let res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        formData
      );
      const { data } = res;
      if (data && data.success) {
        toast.success("Request successful");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.message);
        setloading(false);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setloading(false);
    }
  };
  return (
    <div className="max-md:mt-10 bg-black text-white py-10">
      {/* <ToastContainer /> */}
      <div className="flex flex-col md:items-center  gap-16 p-3">
        <div className="flex flex-col gap-6">
          <p className="text_40 max-sm:text-[28px] text-center max-sm:text-left w-[960px] text-white max-lg:w-full mt-5">
            Please enter required information, We will contact you soon
          </p>
        </div>
        <div className=" ">
          <form className="grid grid-cols-2 max-lg:grid-cols-1 items-center  gap-12 w-full">
            {" "}
            <div>
              <input
                type="text"
                name="name"
                id="name"
                className={`formInput bg-black border-white placeholder:text-white ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
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
                className={`formInput  bg-black border-white placeholder:text-white ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                id="phone"
                className={`formInput  bg-black border-white placeholder:text-white ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                id="subject"
                className={`formInput   bg-black border-white placeholder:text-white ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Subject"
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
              )}
            </div>
            <div className="col-span-2 max-lg:col-span-1 mb-5 ">
              <textarea
                name="message"
                id="Message"
                value={formData.message}
                onChange={handleChange}
                className={`formInput w-full max-lg:col-span-1  bg-black border-white placeholder:text-white  `}
                placeholder="message"
              ></textarea>
            </div>
            <div
              className="bg-white px-6 max-sm:px-3 py-2  flex flex-col items-center w-fit text-black hover:border-[1px] border-white hover:bg-black hover:text-white  transition-all ease-in-out duration-500  h-fit"
              onClick={handleSubmit}
            >
              {loading ? (
                <div>
                  <p>Sending...</p>
                  {/* You can replace this with your custom loading animation or message */}
                  <div className="loading-spinner"></div>
                </div>
              ) : (
                <button
                  type="button"
                  className="flex gap-2 items-center  justify-center"
                >
                  <h1 className=" font-semibold font-sans para max-sm:text-base ">
                    Send
                  </h1>
                  <AiOutlineRight className="text-xl font-bold" />
                </button>
              )}
            </div>
          </form>
        </div>
        {/* {isFormSubmitted && (
          <p className="mt-4 text-green-500 text-3xl">
            Form submitted successfully!
          </p>
        )} */}
      </div>
    </div>
  );
};

export default ContactForm;

import React, { useState } from "react";
import Button from "../Button";

const InqueryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

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
    if (!formData.mobile) newErrors.mobile = "Mobile is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      setIsFormSubmitted(true);
    }
  };

  return (
    <div className="mt-36 max-md:mt-10">
      <div className="flex flex-col md:items-center  gap-16 p-3">
        <div className="flex flex-col gap-6">
          <h1 className="text max-lg:text-[40px] max-md:leading-[100%]  max-sm:text-[28px] text-center max-sm:text-left">
            Send us a message
          </h1>
          {/* <p className="para text-center tracking-[1px]  max-sm:text-left w-[960px] text-[#4D4D4D] max-lg:w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor Lorem ipsum dolor sit amet,
          </p> */}
        </div>
        <div className=" ">
          <form
            onSubmit={handleSubmit}
            className=" grid grid-cols-2 max-lg:grid-cols-1 items-center  gap-12 w-full"
          >
            {" "}
            <div>
              <input
                type="text"
                name="name"
                id="name"
                className={`formInput ${
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
                className={`formInput ${
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
                name="mobile"
                id="mobile"
                className={`formInput ${
                  errors.mobile ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                id="subject"
                className={`formInput ${
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
                id="message"
                className={`formInput w-full max-lg:col-span-1  `}
                placeholder="Message"
              ></textarea>
            </div>
            <Button BtnName={"Send Inquiry"} type="submit" />
          </form>
          {isFormSubmitted && (
            <p className="mt-4 text-green-500">Form submitted successfully!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InqueryForm;

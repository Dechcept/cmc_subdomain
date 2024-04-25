const jobModel = require("../models/jobModel.js");

exports.createjobDetailsController = async (req, res) => {
  try {
    const { formData, content } = req.body;

    console.log(formData);
    // validation
    if (!formData.jobType) {
      return res.send({ message: "jobType is Required" });
    } else if (!formData.jobTitle) {
      return res.send({ message: "jobTitle is Required" });
    } else if (!formData.jobLocation) {
      return res.send({ message: "jobLocation is Required" });
    } else if (!formData.jobDescription) {
      return res.send({ message: "jobDescription is Required" });
    } else if (!content) {
      return res.send({ message: "content is Required" });
    }

    // save data
    const jobinfo = await new jobModel({
      jobType: formData.jobType,
      jobTitle: formData.jobTitle,
      jobLocation: formData.jobLocation,
      jobDescription: formData.jobDescription,
      content,
    }).save();

    res.status(200).send({
      success: true,
      message: "Data Successfully Added",
      jobinfo,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: error,
    });
  }
};

//update job details
exports.jobDetailsUpdateController = async (req, res) => {
  try {
    const { formData, content } = req.body;
    const { id } = req.params;
    const job = await jobModel.findByIdAndUpdate(
      id,
      {
        jobType: formData.jobType,
        jobTitle: formData.jobTitle,
        jobLocation: formData.jobLocation,
        jobDescription: formData.jobDescription,
        content,
      },
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "Successfully updated data",
      job,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While Updating Job Details",
    });
  }
};

//  get all data
exports.jobDetailsController = async (req, res) => {
  try {
    // const {id} = req.param;
    const jobdetails = await jobModel.find();

    res.status(200).send({
      success: true,
      message: "Data get Successfully",
      jobdetails,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Get Data",
    });
  }
};

//get Single Data
exports.SingleDetailsController = async (req, res) => {
  try {
    const { id } = req.params;
    const jobdetails = await jobModel.findById(id);
    res.status(200).send({
      success: true,
      message: "Data get Successfully",
      jobdetails,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Get Data",
    });
  }
};

// deleteDetailsController

exports.deleteDetailsController = async (req, res) => {
  try {
    const { id } = req.params;
    await jobModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Data delete Successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Delete Data",
    });
  }
};

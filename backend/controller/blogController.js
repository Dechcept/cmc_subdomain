const { blogModel } = require("../models/blogModel.js");
const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const { promises: fsPromises } = require("fs");


const generateUniqueFilename = (originalFilename) => {
  const fileExtension = originalFilename.split(".").pop();
  const uniqueFileName = `${uuidv4()}.${fileExtension}`;
  return uniqueFileName;
};
exports.blogDataSend = async (req, res) => {
  AWS.config.update({
    accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
    region: "ap-south-1",
  });
  try {
    console.log("Request Body:", req.body);
    console.log("Request Headers:", req.headers);
    const { title, introducation, content } = req.body;
    // Validation
    if (!title) return res.send({ message: "Title is required" });
    if (!introducation)
      return res.send({ message: "Introduction is required" });
    if (!content) return res.send({ message: "Content is required" });

    // Assuming you're using multer for handling file uploads
    if (!req.file)
      return res.send({
        message: "Image is required, please upload an image file.",
      });

    // Generate a unique filename
    const uniqueFileName = generateUniqueFilename(req.file.originalname);
    const fileContent = req.file.buffer;

    // Setting up S3 upload parameters
    const s3Params = {
      Bucket: "shubhalakshmi",
      Key: `blog/${uniqueFileName}`, // Use 'blog' folder in the bucket
      Body: fileContent,
      ContentType: req.file.mimetype, // Set the ContentType header
    };
    // Upload to S3
    const s3UploadResponse = await new AWS.S3().upload(s3Params).promise();

    // Creating and saving the document in MongoDB
    let blog = await blogModel.create({
      title,
      introducation,
      file: `blog/${uniqueFileName}`, // Save the path in MongoDB
      content,
    });

    res.status(200).send({
      success: true,
      message: "Data successfully added",
      blog,
      s3Response: s3UploadResponse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
    });
  }
};
exports.blogDataGetController = async (req, res) => {
  try {
    // const {id} = req.param;
    const blogdata = await blogModel.find();
    res.status(200).send({
      success: true,
      message: "Data get Successfully",
      blogdata,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Get Data",
    });
  }
};

exports.blogSingleDataController = async (req, res) => {
  try {
    const { id } = req.params;
    const blogdata = await blogModel.findById(id);

    res.status(200).send({
      success: true,
      message: "success data get",
      blogdata,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "failed",
    });
  }
};

exports.blogDeleteController = async (req, res) => {
  try {
    const { id } = req.params;
    await blogModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Data delete Successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error,
    });
  }
};

// exports.blogdataUpdater = async (req, res) => {
//   try {
//     const {
//       date,
//       heading,
//       title,
//       postby,
//       introducation,
//       heading1,
//       heading1_description,
//       heading2,
//       heading2_description,
//       heading3,
//       heading3_description,
//       heading4,
//       heading4_description,
//     } = req.body;
//     const { id } = req.params;
//     const updatedBlog = await blogModel.findByIdAndUpdate(
//       id,
//       {
//         date: date,
//         heading: heading,
//         title: title,
//         postby: postby,
//         introducation: introducation,
//         heading1: heading1,
//         heading1_description: heading1_description,
//         heading2: heading2,
//         heading2_description: heading2_description,
//         heading3: heading3,
//         heading3_description: heading3_description,
//         heading4: heading4,
//         heading4_description: heading4_description,
//       },
//       { new: true }
//     );
//     res.status(200).send({
//       success: true,
//       message: "Data updated Successfully",
//       updatedBlog,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({
//       success: false,
//       message: "Failed to update data",
//       error: error.message, // Include the actual error message for debugging
//     });
//   }
// };

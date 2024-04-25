const nodemailer = require("nodemailer");
const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel.js");
const { admin } = require("../models/adminModel.js");
const jobFormModel = require("../models/jobFormModel.js");
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const { promises: fsPromises } = require("fs");
const { extname } = require("path");


const generateUniqueFilename = (originalFilename) => {
  const fileExtension = originalFilename.split(".").pop();
  const uniqueFileName = `${uuidv4()}.${fileExtension}`;
  return uniqueFileName;
};
// User Registration Controller
exports.registerController = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !phone || !subject || !message) {
      return res.send({ message: "All fields are required" });
    }

    // Check for existing user
    const existingUser = await userModel.findOne({ email });

    // Existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already registered.",
      });
    }

    // Register user in MongoDB
    const user = await userModel.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    // Send email to admin and user asynchronously
    sendEmails(name, email, subject, message);

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(501).send({
      success: false,
      message: "Error in registration",
    });
  }
};

// Send Emails Function
async function sendEmails(name, email, subject, message) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    const messageCommon = {
      from: process.env.SMTP_MAIL,
      subject: "New Contact Inquiry ✔",
      text: `Hello Admin,\n\nA new inquiry has been received from ${name} (${email}).\n\nMessage:\n${message}\n\nPlease respond to the inquiry promptly.`,
      html: `<h1>Hello Admin!</h1>
             <p>A new inquiry has been received from ${name} (${email}).</p>
             <p><strong>Message:</strong><br>${message}</p>
             <p>Please respond to the inquiry promptly.</p>
      `,
    };
    const messageCommonUser = {
      from: process.env.SMTP_MAIL,
      subject: "Thank You for Contacting Us",
      text: `Hello ${name},\n\nThank you for reaching out to us! We have received your message and will get back to you as soon as possible.`,
      html: `<h1>Hello ${name}!</h1>
             <p>Thank you for reaching out to us! We have received your message and will get back to you as soon as possible.</p>`,
    };

    // Send email to admin
    const messageAdmin = {
      ...messageCommon,
      to: "vaishnavbaldev007@gmail.com",
      text: `New registration: ${name} (${email}) - ${subject}: ${message}`,
    };
    await transporter.sendMail(messageAdmin);

    // Send email to user
    const messageUser = {
      ...messageCommonUser,
      to: email,
      text: "Thank you for registering!",
    };
    await transporter.sendMail(messageUser);

    console.log("Emails sent successfully");
  } catch (error) {
    console.error("Error sending emails:", error);
  }
}

// Job Application Controller
exports.jobInQueryController = async (req, res) => {
  try {
    console.log("Incoming Headers:", req.headers);

    // Update the configuration with the correct access key ID and secret access key
    // Configure AWS SDK
    // AWS.config.update({
    //   accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
    //   secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
    //   region: "ap-south-1",
    // });

    const {
      name,
      email,
      mobile,
      PortfolioUrl,
      Nationality,
      Experience,
      policy,
    } = req.body;

    // Validation
    if (
      !name ||
      !email ||
      !mobile ||
      !PortfolioUrl ||
      !Nationality ||
      !Experience ||
      !policy ||
      !req.file
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user with the provided email already exists
    const existingRequest = await jobFormModel.findOne({ email });

    if (existingRequest) {
      return res.status(200).json({
        success: false,
        message: "User already requested",
      });
    }

    // Generate a unique filename
    const uniqueFileName = generateUniqueFilename(req.file.originalname);
    const fileContent = req.file.buffer;

    // // Setting up S3 upload parameters
    // const s3Params = {
    //   Bucket: "shubhalakshmi",
    //   Key: uniqueFileName,
    //   Body: fileContent,
    //   ContentDisposition: "inline",
    //   ContentType: "application/pdf", // Set this header to indicate inline content
    // };

    // const s3UploadResponse = await new AWS.S3().upload(s3Params).promise();

    // Create a new request in MongoDB with the unique filename
    const user = await jobFormModel.create({
      name,
      email,
      mobile,
      PortfolioUrl,
      Nationality,
      Experience,
      policy,
      file: uniqueFileName, // Store the unique filename in MongoDB
    });

    // Send email asynchronously with attachment from S3
    // await sendJobApplicationEmail(name, email, s3Params.Key);

    res.status(201).json({
      success: true,
      message: "User Register Successful",
      user,
      // s3Response: s3UploadResponse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

// Send Job Application Email Function
async function sendJobApplicationEmail(name, userEmail, attachment) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const messageCommon = {
      from: process.env.SMTP_MAIL,
      subject: "Job Application",
      text: `Hello, ${name}! Your job application has been received.`,
      html: `<h1>Hello, ${name}!</h1>
             <p>Your job application has been received.</p>
      `,
      // attachments: [
      //   {
      //     filename: "Resume.pdf", // Customize the filename as needed
      //     path: attachment, // Assuming 'file' is the path to the resume file
      //   },
      // ],
    };

    // Send email to admin
    const messageAdmin = {
      ...messageCommon,
      to: "vaishnavbaldev007@gmail.com",
    };
    await transporter.sendMail(messageAdmin);

    // Send email to user
    const messageUser = {
      ...messageCommon,
      to: userEmail,
    };
    await transporter.sendMail(messageUser);

    console.log("Job application emails sent successfully");
  } catch (error) {
    console.error("Error sending job application emails:", error);
  }
}

// Get All Job Applications Controller
exports.jobApplicationController = async (req, res) => {
  try {
    const jobApplications = await jobFormModel.find();

    res.status(200).send({
      success: true,
      message: "Data get Successfully",
      jobApplications,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Get Data",
    });
  }
};

// User Login Controller
exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(201).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check user
    const user = await admin.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }

    const isPasswordMatch = user.password === password;

    if (!isPasswordMatch) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    // Generate token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "Login successful",
      user: {
        _id: user._id,
        email: user.email,
        password: user.password,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
    });
  }
};

// Test Controller
exports.testController = (req, res) => {
  try {
    res.send("Protected Route");
  } catch (error) {
    console.error(error);
  }
};

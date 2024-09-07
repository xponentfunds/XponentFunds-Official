const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const querystring = require("querystring");

const app = express();
const port = process.env.PORT || 5000;

const key = process.env.KEY;
const salt = process.env.SALT;
const secret = process.env.JWT_SECRET;
const baseUrl = process.env.BASE_URL;
const frontendUrl = process.env.FRONTEND_URL;

// Middleware
// app.use(cors({
//   origin: 'http://localhost:5173',
// }));

app.use(cors());

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Define a schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  profession: String,
  experience: String,
  createdAt: {
    type: String,
    default: () => {
      // Get current time
      const now = new Date();

      // Convert UTC time to IST by adding the appropriate offset (5 hours and 30 minutes)
      const ISTTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );

      // Format the time to 12-hour format
      let hours = ISTTime.getHours();
      const minutes = ISTTime.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // hour '0' should be '12'
      const minutesStr = minutes < 10 ? "0" + minutes : minutes;

      // Format the date to DD/MM/YYYY
      const day = ISTTime.getDate();
      const month = ISTTime.getMonth() + 1; // Months are zero-indexed in JavaScript
      const year = ISTTime.getFullYear();

      return `${hours}:${minutesStr} ${ampm}, ${day}/${month}/${year}`; // Return formatted time and date
    },
  },
});

// Define a model
const Contact = mongoose.model("Contact", contactSchema);

// const quickformSchema = new mongoose.Schema({
//   name: String,
//   phone: String,
// });
const quickformSchema = new mongoose.Schema({
  name: String,
  phone: String,
  createdAt: {
    type: String,
    default: () => {
      // Get current time
      const now = new Date();

      // Convert UTC time to IST by adding the appropriate offset (5 hours and 30 minutes)
      const ISTTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );

      // Format the time to 12-hour format
      let hours = ISTTime.getHours();
      const minutes = ISTTime.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // hour '0' should be '12'
      const minutesStr = minutes < 10 ? "0" + minutes : minutes;

      // Format the date to DD/MM/YYYY
      const day = ISTTime.getDate();
      const month = ISTTime.getMonth() + 1; // Months are zero-indexed in JavaScript
      const year = ISTTime.getFullYear();

      return `${hours}:${minutesStr} ${ampm}, ${day}/${month}/${year}`; // Return formatted time and date
    },
  },
});

const QuickForm = mongoose.model("QuickForm", quickformSchema);
// API endpoint to handle form submission

const webinarPaymentSchema = new mongoose.Schema({
  txnid: { type: String, required: true },
  amount: { type: Number, required: true },
  productinfo: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: {
    type: String,
    default: () => {
      // Get current time
      const now = new Date();

      // Convert UTC time to IST by adding the appropriate offset (5 hours and 30 minutes)
      const ISTTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );

      // Format the time to 12-hour format
      let hours = ISTTime.getHours();
      const minutes = ISTTime.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // hour '0' should be '12'
      const minutesStr = minutes < 10 ? "0" + minutes : minutes;

      // Format the date to DD/MM/YYYY
      const day = ISTTime.getDate();
      const month = ISTTime.getMonth() + 1; // Months are zero-indexed in JavaScript
      const year = ISTTime.getFullYear();

      return `${hours}:${minutesStr} ${ampm}, ${day}/${month}/${year}`; // Return formatted time and date
    },
  },
});

const WebinarPayment = mongoose.model("WebinarPayment", webinarPaymentSchema);

const coursePaymentSchema = new mongoose.Schema({
  txnid: { type: String, required: true },
  amount: { type: Number, required: true },
  productinfo: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: {
    type: String,
    default: () => {
      // Get current time
      const now = new Date();

      // Convert UTC time to IST by adding the appropriate offset (5 hours and 30 minutes)
      const ISTTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );

      // Format the time to 12-hour format
      let hours = ISTTime.getHours();
      const minutes = ISTTime.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // hour '0' should be '12'
      const minutesStr = minutes < 10 ? "0" + minutes : minutes;

      // Format the date to DD/MM/YYYY
      const day = ISTTime.getDate();
      const month = ISTTime.getMonth() + 1; // Months are zero-indexed in JavaScript
      const year = ISTTime.getFullYear();

      return `${hours}:${minutesStr} ${ampm}, ${day}/${month}/${year}`; // Return formatted time and date
    },
  },
});

const CoursePayment = mongoose.model("CoursePayment", coursePaymentSchema);

const webinarFailedPaymentSchema = new mongoose.Schema({
  txnid: { type: String, required: true },
  amount: { type: Number, required: true },
  productinfo: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: {
    type: String,
    default: () => {
      // Get current time
      const now = new Date();

      // Convert UTC time to IST by adding the appropriate offset (5 hours and 30 minutes)
      const ISTTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );

      // Format the time to 12-hour format
      let hours = ISTTime.getHours();
      const minutes = ISTTime.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // hour '0' should be '12'
      const minutesStr = minutes < 10 ? "0" + minutes : minutes;

      // Format the date to DD/MM/YYYY
      const day = ISTTime.getDate();
      const month = ISTTime.getMonth() + 1; // Months are zero-indexed in JavaScript
      const year = ISTTime.getFullYear();

      return `${hours}:${minutesStr} ${ampm}, ${day}/${month}/${year}`; // Return formatted time and date
    },
  },
});

const WebinarFailedPayment = mongoose.model(
  "WebinarFailedPayment",
  webinarFailedPaymentSchema
);

const courseFailedPaymentSchema = new mongoose.Schema({
  txnid: { type: String, required: true },
  amount: { type: Number, required: true },
  productinfo: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: {
    type: String,
    default: () => {
      // Get current time
      const now = new Date();

      // Convert UTC time to IST by adding the appropriate offset (5 hours and 30 minutes)
      const ISTTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );

      // Format the time to 12-hour format
      let hours = ISTTime.getHours();
      const minutes = ISTTime.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // hour '0' should be '12'
      const minutesStr = minutes < 10 ? "0" + minutes : minutes;

      // Format the date to DD/MM/YYYY
      const day = ISTTime.getDate();
      const month = ISTTime.getMonth() + 1; // Months are zero-indexed in JavaScript
      const year = ISTTime.getFullYear();

      return `${hours}:${minutesStr} ${ampm}, ${day}/${month}/${year}`; // Return formatted time and date
    },
  },
});

const CourseFailedPayment = mongoose.model(
  "CourseFailedPayment",
  courseFailedPaymentSchema
);

const courseDataSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  productinfo: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  createdAt: {
    type: String,
    default: () => {
      // Get current time
      const now = new Date();

      // Convert UTC time to IST by adding the appropriate offset (5 hours and 30 minutes)
      const ISTTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );

      // Format the time to 12-hour format
      let hours = ISTTime.getHours();
      const minutes = ISTTime.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // hour '0' should be '12'
      const minutesStr = minutes < 10 ? "0" + minutes : minutes;

      // Format the date to DD/MM/YYYY
      const day = ISTTime.getDate();
      const month = ISTTime.getMonth() + 1; // Months are zero-indexed in JavaScript
      const year = ISTTime.getFullYear();

      return `${hours}:${minutesStr} ${ampm}, ${day}/${month}/${year}`; // Return formatted time and date
    },
  },
});

// Create the model from the schema
const CourseData = mongoose.model("CourseData", courseDataSchema);


const WebinarDataSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  productinfo: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  createdAt: {
    type: String,
    default: () => {
      const now = new Date();
      // Convert UTC time to IST by adding the appropriate offset (5 hours and 30 minutes)
      const ISTTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );

      // Format the time to 12-hour format
      let hours = ISTTime.getHours();
      const minutes = ISTTime.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // hour '0' should be '12'
      const minutesStr = minutes < 10 ? "0" + minutes : minutes;

      // Format the date to DD/MM/YYYY
      const day = ISTTime.getDate();
      const month = ISTTime.getMonth() + 1; // Months are zero-indexed in JavaScript
      const year = ISTTime.getFullYear();

      return `${hours}:${minutesStr} ${ampm}, ${day}/${month}/${year}`; // Return formatted time and date
    },
  },
});

// Create the model from the schema
const WebinarData = mongoose.model("WebinarData", WebinarDataSchema);


const generateHash = (txnid, amount, productinfo, firstname, email) => {
  const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
  return crypto.createHash("sha512").update(hashString).digest("hex");
};

//Routes for Courses
app.post("/payu", (req, res) => {
  const { amount, productinfo, firstname, lastname, email, phone } = req.body;

  const txnid = Math.random().toString(36).substr(2, 9);
  const hash = generateHash(txnid, amount, productinfo, firstname, email);
  console.log(hash);
  console.log(txnid);
  // console.log(
  //   key,
  //   txnid,
  //   amount,
  //   productinfo,
  //   firstname,
  //   lastname,
  //   email,
  //   phone,
  //   hash,
  //   surl,
  //   furl
  // );
  const newCourseData = new CourseData({
    amount,
    productinfo,
    firstname,
    lastname,
    email,
    phone
  });

  // Save the document to MongoDB
  newCourseData.save()

  res.json({
    key,
    txnid,
    amount,
    productinfo,
    firstname,
    lastname,
    email,
    phone,
    hash,
    surl: `${baseUrl}/successcourses`,
    furl: `${baseUrl}/failed`,
  });
});

//Route For Webinar Payment
app.post("/payu/webinar", (req, res) => {
  const { amount, productinfo, firstname, lastname, email, phone } = req.body;

  const txnid = Math.random().toString(36).substr(2, 9);
  const hash = generateHash(txnid, amount, productinfo, firstname, email);

  const newWebinarData = new WebinarData({
    amount,
    productinfo,
    firstname,
    lastname,
    email,
    phone
  });

  // Save the document to MongoDB
  newWebinarData.save()

  res.json({
    key,
    txnid,
    amount,
    productinfo,
    firstname,
    lastname,
    email,
    phone,
    hash,
    surl: `${baseUrl}/success`,
    furl: `${baseUrl}/failure`,
  });
});

app.use(express.urlencoded({ extended: true }));

//Success Route For Webinar Payment
app.post("/success", async (req, res) => {
  console.log("Request Body:", req.body); // Log the entire request body

  const {
    txnid,
    status,
    amount,
    productinfo,
    firstname,
    lastname,
    email,
    phone,
  } = req.body;

  // const { txnid, status } = req.body;
  console.log("Transaction ID:", txnid);
  console.log("Status:", status);
  console.log("Success");

  if (status === "success") {
    try {
      const payment = new WebinarPayment({
        txnid,
        amount,
        productinfo,
        firstname,
        lastname,
        email,
        phone,
        status,
      });
      await payment.save();

      // Generate a JWT token
      const token = jwt.sign({ txnid }, secret, { expiresIn: "1h" });

      // Redirect to the success page with the token
      res.redirect(`${frontendUrl}/success?token=${token}`);
    } catch (err) {
      console.error("Error saving payment data:", err);
      res.redirect(`${frontendUrl}/webinar`);
    }
  } else {
    res.redirect(`${frontendUrl}/webinar`);
  }
});

//Failure Route For Webinar Payment
app.post("/failure", async (req, res) => {
  console.log("Raw Body:", req.body);

  const {
    txnid,
    status,
    amount,
    productinfo,
    firstname,
    lastname,
    email,
    phone,
  } = req.body;

  try {
    const failedPayment = new WebinarFailedPayment({
      txnid,
      amount,
      productinfo,
      firstname,
      lastname,
      email,
      phone,
      status,
    });
    await failedPayment.save();

    console.log("Failed Transaction ID:", txnid);
    console.log("Failed Status:", status);

    // Redirect to a failure page on your frontend
    res.redirect(`${frontendUrl}/webinar`);
  } catch (err) {
    console.error("Error saving failed payment data:", err);
    res.redirect(`${frontendUrl}/webinar`);
  }
});

//Failed Route for Courses Payment
app.post("/failed", async (req, res) => {
  console.log("Raw Body:", req.body);

  const {
    txnid,
    status,
    amount,
    productinfo,
    firstname,
    lastname,
    email,
    phone,
  } = req.body;

  try {
    const failedPayment = new CourseFailedPayment({
      txnid,
      amount,
      productinfo,
      firstname,
      lastname,
      email,
      phone,
      status,
    });
    await failedPayment.save();

    console.log("Failed Transaction ID:", txnid);
    console.log("Failed Status:", status);

    // Redirect to a failure page on your frontend
    res.redirect(`${frontendUrl}/course`);
  } catch (err) {
    console.error("Error saving failed payment data:", err);
    res.redirect(`${frontendUrl}/course`);
  }
});

// Verify Token Route for Webinar Payment
app.get("/verify-token", (req, res) => {
  const token = req.query.token;
  if (!token) {
    return res.status(400).json({ message: "Token is missing" });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    res.json({ message: "Authorized", txnid: decoded.txnid });
  });
});

// Success Route for Courses
app.post("/successcourses", async (req, res) => {
  console.log("Request Body:", req.body); // Log the entire request body

  const {
    txnid,
    status,
    amount,
    productinfo,
    firstname,
    lastname,
    email,
    phone,
  } = req.body;

  console.log("Transaction ID:", txnid);
  console.log("Status:", status);
  console.log("Success");

  if (status === "success") {
    // Save payment data to MongoDB using CoursePayment model
    try {
      const coursePayment = new CoursePayment({
        txnid,
        amount,
        productinfo,
        firstname,
        lastname,
        email,
        phone,
        status,
      });
      await coursePayment.save();
      res.redirect(`${frontendUrl}/course`);
    } catch (err) {
      console.error("Error saving payment data:", err);
      res.redirect(`${frontendUrl}/course`);
    }
  } else {
    res.redirect(`${frontendUrl}/course`);
  }
});
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, profession, experience } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      profession,
      experience,
    });

    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save contact" });
  }
});

app.post("/api/quickform", async (req, res) => {
  try {
    const newForm = new QuickForm(req.body);
    await newForm.save();
    res.status(200).json({ message: "Contact saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to save contact" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transport configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'amancodeservir@gmail.com', // replace with your email
    pass: 'Aman@1234',  // replace with your email password or app-specific password
  },
});

app.post("/register", (req, res) => {
  const { email, userId } = req.body;

  const mailOptions = {
    from: 'amancodeservir@gmail.com', // sender address
    to: email, // receiver's email
    subject: 'Welcome to Pragati Coaching Classes',
    text: `Thank you for registering. Your user ID is ${userId}.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent successfully");
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

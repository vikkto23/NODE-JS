// email-sender.js
const nodemailer = require("nodemailer");

// Create a transporter object
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // your email
    pass: "your-password", // your password
  },
});

// Set up email data
let mailOptions = {
  from: "your-email@gmail.com", // sender address
  to: "recipient@example.com", // list of receivers
  subject: "Test Email", // Subject line
  text: "Hello from Node.js", // plain text body
  html: "<b>Hello from Node.js</b>", // html body
};

// Send email
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error("Error occurred:", err);
  } else {
    console.log("Email sent:", info.response);
  }
});

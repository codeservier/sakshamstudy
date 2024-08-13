import React, { useState } from "react";
import mission from "../assets/complete-the-mission.svg";
import SingleBanner from "../components/banner/SingleBanner";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));

    // Basic validation logic for empty fields
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: value ? "" : `${id} is required`,
    }));
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;

    // Allow only numeric input and limit length to 10 digits
    if (/^\d*$/.test(value) && value.length <= 10) {
      handleInputChange(e);
    }
  };

  const handleOnSubmit = async () => {
    const { fullName, email, phoneNumber, message } = formData;

    // Validation checks
    const newErrors = {};
    if (!fullName) newErrors.fullName = "Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        newErrors.email = "Please enter a valid Email";
      }
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    }
    if (!message) newErrors.message = "Message is required";

    setErrors(newErrors);

    // Stop submission if there are errors
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // If no errors, submit the form data to Firestore
    try {
      await addDoc(collection(db, "contactUs"), {
        name: fullName,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
      });
      console.log("Contact submitted successfully");
      alert("Message sent sucessfully!")
      sendMail(fullName,phoneNumber,email,message);
        setFormData({
        fullName:"",
        email: "",
        phoneNumber: "",
        message:""
      });

    } catch (error) {
      console.log("Something went wrong", error);
    }
  };
  
  const sendMail = (name, phoneNumber, email, message) => {
    const templateParams = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      message: message,
    };

    emailjs.send('service_ygalqv5', 'template_05yibf4', templateParams, 'Dk2TOoxhuANj8nFcB')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
        setStatus('Failed to send message.');
      });
  };
  return (
    <>
      <section className="bg-[#f5f5dc] min-h-screen">
        <div className="container mx-auto p-4 ">
          <h1 className="text-4xl text-center font-medium text-[#800020] text-400 mb-8">
            Contact Us
          </h1>
          <div className="max-w-screen-xl mx-auto px-6 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 ">
              <div className="p-8">
                <div className="mb-6">
                  <p className="text-gray-800 mb-2 text-xl">
                    For any queries, please reach out to us. Our support team
                    will get back to you within 24 hours.
                  </p>
                  <p className="text-blue-600 mb-2">
                    <a href="mailto:pccbeniganj@gmail.com">
                      pccbeniganj@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-800">
                    <a href="tel:+916361388292">+91 9876543210</a>
                  </p>
                </div>
                <SingleBanner image={mission} />
              </div>
              <div>
                <div className="flex justify-center items-center">
                  <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex justify-between mb-6 border-b">
                      <button className="text-[#800020] font-semibold py-2 px-4 border-orange-500 border-b-2">
                        Course Enquiry
                      </button>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="fullName"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                      <span id="nameError" className="text-red-600">{errors.fullName}</span>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                      <span id="emailError" className="text-red-600">{errors.email}</span>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="phoneNumber"
                      >
                        Phone Number *
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-orange-500">
                        <span className="px-3 py-2 text-gray-500">IN</span>
                        <span className="px-1 py-2 text-gray-500">+91</span>
                        <input
                          id="phoneNumber"
                          type="text"
                          placeholder="| Enter your phone number"
                          value={formData.phoneNumber}
                          onChange={handlePhoneNumberChange}
                          maxLength="10" // Limit the input length to 10 characters
                          className="w-full px-3 py-2 focus:outline-none"
                        />
                      </div>
                      <span id="phoneError" className="text-red-600">{errors.phoneNumber}</span>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="message"
                      >
                        Your message *
                      </label>
                      <textarea
                        id="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-24"
                      ></textarea>
                      <span id="messageError" className="text-red-600">{errors.message}</span>
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={handleOnSubmit}
                        className="px-6 py-2 bg-[#800020] text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

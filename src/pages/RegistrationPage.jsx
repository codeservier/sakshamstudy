import React, { useState } from "react";
import logo from "../assets/logo.png";
import ImageSlider from "../components/banner/ImageSlider";
import { db, auth } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { SiAxios } from "react-icons/si";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    // Basic validation for empty fields
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: value ? "" : `${id} is required`,
    }));
  };
  const handlePhoneNumberChange = (e) => {
    const { id, value } = e.target;

    // Allow only numeric input and limit length to 10 digits
    if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: value ? "" : "Phone number is required",
      }));
    }
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phoneNumber, password, confirmPassword } = formData;

    // Validation checks
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
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
    } else if (phoneNumber.length !== 10) {
      newErrors.phoneNumber = "Phone number must be exactly 10 digits";
    }
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    // Stop submission if there are errors
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed up:", user);
      if (user) {
        await addDoc(collection(db, "registrations"), {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
          userId: user.uid,
        });
        console.log("Registration successful");
        alert("Registration completed sucessfully!");
       
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        console.log("Registration failed");
        alert("Registration failed");
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already in use. Please use a different email.");
      } else {
        console.error("Error signing up:", error);
        alert(`Error signing up: ${error.message}`);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="justify-center items-center bg-blue-50">
        <ImageSlider />
      </div>
      <div>
        <div className="mb-4 md:mb-8">
          <img src={logo} alt="Logo" className="w-24 mx-auto" />
        </div>
        <h2 className="text-2xl font-bold mb-4 md:mb-8 text-center">
          Registration here
        </h2>
        <form className="px-14" onSubmit={handleOnSubmit}>
          <div className="grid grid-cols-1 gap-0 sm:gap-6 mb-6">
            <div className="flex flex-col mb-6 sm:mb-0">
              <label className="mb-1 font-semibold text-gray-400">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Please enter your name"
                value={formData.name}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#F68B33]"
              />
              <span className="text-red-600">{errors.name}</span>
            </div>
            <div className="md:flex flex-row gap-4">
              <div className="flex flex-col mb-6 sm:mb-0 flex-1">
                <label className="mb-1 font-semibold text-gray-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Please enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#F68B33]"
                />
                <span className="text-red-600">{errors.email}</span>
              </div>
              <div className="flex flex-col mb-6 sm:mb-0 flex-1">
                <label className="mb-1 font-semibold text-gray-400">
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="int"
                  placeholder="Phone"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#F68B33]"
                />
                <span className="text-red-600">{errors.phoneNumber}</span>
              </div>
            </div>
            <div className="md:flex flex-row gap-4">
              <div className="flex flex-col mb-6 sm:mb-0 flex-1">
                <label className="mb-1 font-semibold text-gray-400">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  maxLength={10}
                  placeholder="Please enter your new password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#F68B33]"
                />
                <span className="text-red-600">{errors.password}</span>
              </div>
              <div className="flex flex-col mb-6 sm:mb-0 flex-1">
                <label className="mb-1 font-semibold text-gray-400">
                  Confirm New Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Please confirm your new password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#F68B33]"
                />
                <span className="text-red-600">{errors.confirmPassword}</span>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#F68B33] hover:bg-[#800020]-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#800020] focus:ring-opacity-50"
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center text-sm md:text-base">
          <p>
            Don't have an Account?{" "}
            <a href="/login" className="text-[#F68B33] hover:underline">
              Log In
            </a>
          </p>
          <p>
            By clicking Register, you agree to our{" "}
            <a href="/terms" className="text-[#F68B33] hover:underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-[#F68B33] hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;

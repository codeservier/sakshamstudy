import React, { useState } from "react";
import logo from "../assets/logo.png";
import ImageSlider from "../components/banner/ImageSlider";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigation = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: value ? "" : `${id} is required`,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
      alert("Login successful!");
      navigation('/');
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Something Went Wrong!");
    }
  };

  return (
    <div className="min-h-screen sm:flex flex-col md:flex-row">
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-blue-50">
        <ImageSlider />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center p-8">
        <div className="mb-4 md:mb-8">
          <img src={logo} alt="Logo" className="w-24 mx-auto" />
        </div>
        <h2 className="text-2xl font-bold mb-4 md:mb-8 text-center">
          Login here
        </h2>
        <form className="px-8" onSubmit={handleOnSubmit}>
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-gray-400">Email</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Please enter your registered email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <span className="text-red-600">{errors.email}</span>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-gray-400">Password</label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Please enter your password"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <span className="text-red-600">{errors.password}</span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#F68B33] hover:bg-[#800020]-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#800020] focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center text-sm md:text-base">
          <p>
            Don't have an Account?{" "}
            <a href="/register" className="text-[#F68B33] hover:underline">
              Register
            </a>
          </p>
          <p>
            By clicking Login, you agree to our{" "}
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

export default Login;

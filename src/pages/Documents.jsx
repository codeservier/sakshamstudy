import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db, auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import CustomInput from "../components/customInput/CustomInput.jsx";
import Logo from "../assets/logo/Logo";

const Documents = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Parse URL params and set initial state
    const initialData = {};
    const queryParams = new URLSearchParams(location.search);
    queryParams.forEach((value, key) => {
      initialData[key] = value;
    });
    setFormData((prevData) => ({ ...prevData, ...initialData }));
  }, [location.search]);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: value ? "" : `${id} is required`,
    }));
  };

  const getCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear.toString().slice(-2); // Get the last two digits of the year
  };

  const generateSequentialId = (lastId) => {
    const year = getCurrentYear();
    const prefix = `SKM${year}`;
    const sequencePart = lastId.slice(prefix.length);
    const sequence = parseInt(sequencePart) + 1; // Increment by 1
    const newSequence = sequence.toString().padStart(5, "0");
    return `${prefix}${newSequence}`;
  };

  const handleRegister = async () => {
    const { email, password, confirmPassword } = formData;

    const newErrors = {};
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.agreedToTerms) {
      newErrors.terms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Show errors in a pop-up
      const errorMessages = Object.values(newErrors).join("\n");
      alert(errorMessages);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Get the latest user ID from Firestore
      const usersCollectionRef = collection(db, "registration");
      const q = query(
        usersCollectionRef,
        orderBy("userId", "desc"),
        limit(1)
      );
      const querySnapshot = await getDocs(q);

      let newUserId;
      if (!querySnapshot.empty) {
        const lastUserDoc = querySnapshot.docs[0];
        const lastUserId = lastUserDoc.data().userId;

        // Generate new user ID
        newUserId = generateSequentialId(lastUserId);
      } else {
        // If no users exist, start with SKM{year}00001
        newUserId = `SKM${getCurrentYear()}00001`;
      }

      // Save the new user data to Firestore
      await setDoc(doc(db, "registration", user.uid), {
        userId: newUserId,
        ...formData, // Save all form data
      });

      // Show success message and redirect to homepage
      alert("Congratulations!");
      navigate("/");  // Redirect to homepage
  
    } catch (error) {
      console.error("Error signing up:", error);
      const errorMessage = error.message.includes("email") ? 
        `Error signing up: ${error.message}` : `Error signing up: ${error.message}`;
      
      if (window.confirm(errorMessage)) {
        navigate("/register"); // Replace with the actual route to your email page
      }
    }
  };
  

  return (
    <div className="flex max-w-screen-xl mx-auto justify-center items-center p-4">
      <div className="bg-white p-8 rounded-lg w-full flex flex-col">
        <div className="flex justify-center mb-4">
          <Logo width="50" height="50" fill="#FF5733" />
        </div>

        <h1 className="text-2xl font-bold text-center">Registration Here</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Password</h2>
          <div className="space-y-4">
            <div className="md:flex md:gap-4">
              <CustomInput
                id="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                error={errors.password}
                label="Password"
              />
              <CustomInput
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                error={errors.confirmPassword}
                label="Confirm Password"
              />
            </div>
            <div className="flex items-center">
              <input
                id="agreedToTerms"
                type="checkbox"
                checked={formData.agreedToTerms}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="agreedToTerms" className="text-gray-600">
                I agree to the{" "}
                <a href="/terms-and-conditions" >
                  terms and conditions
                </a>
              </label>
              <br />
              <span className="text-red-600 block mt-1">{errors.terms}</span>
            </div>
          </div>
          <br />
          <button
            type="button" // Changed from submit to button
            onClick={handleRegister}
            className="w-full py-3 text-white bg-[#42c4e2] rounded-full hover:bg-secondary"
          >
            Register
          </button>
        </section>
      </div>
    </div>
  );
};

export default Documents;

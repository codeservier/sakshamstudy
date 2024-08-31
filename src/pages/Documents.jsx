import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db, auth, storage } from "../../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  doc,
  setDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import CustomInput from "../components/customInput/CustomInput.jsx";
import Logo from "../assets/logo/Logo";

const Documents = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    shortdescription: "",
    longdescription:"",
    agreedToTerms: false,
    libraryLogo: "",
    domain: "",
  });
  const [errors, setErrors] = useState({});
  const [logoFile, setLogoFile] = useState(null); // To store the selected file
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const handleOptionChange = (section, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // Create a URL for the image
    } else {
      setLogoFile(null);
      setPreviewUrl("");
    }
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
    const { email, longdescription, password, shortdescription, confirmPassword, libraryLogo, domain } = formData;

    const newErrors = {};
    if (!password) newErrors.password = "Password is required";
    if (!longdescription) newErrors.longdescription = "You Must enter Long Description ";
    if (!shortdescription) newErrors.shortdescription = "You Must enter Short Description ";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.agreedToTerms)
      newErrors.terms = "You must agree to the terms and conditions";

    if (!libraryLogo) {
      newErrors.libraryLogo = "Please select if you have a library logo";
    } else if (libraryLogo === "yes" && !logoFile) {
      newErrors.libraryLogo = "Please upload a logo image";
    }

    if (!domain) {
      newErrors.domain = "Please select if you have a domain";
    } else if (domain === "yes" && !formData.domain) {
      newErrors.domain = "Please write your domain";
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
      const q = query(usersCollectionRef, orderBy("userId", "desc"), limit(1));
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

      // Handle logo file upload if necessary
      let logoUrl = "";
      if (libraryLogo === "yes" && logoFile) {
        const storageRef = ref(storage, `logos/${user.uid}/${logoFile.name}`);
        await uploadBytes(storageRef, logoFile);
        logoUrl = await getDownloadURL(storageRef);
      }

      // Save the new user data to Firestore
      await setDoc(doc(db, "registration", user.uid), {
        userId: newUserId,
        ...formData, // Save all form data
        libraryLogoUrl: logoUrl, // Save the logo URL
      });

      // Show success message and redirect to homepage
      alert("Congratulations!");
      navigate("/"); // Redirect to homepage
    } catch (error) {
      console.error("Error signing up:", error);
      const errorMessage = error.message.includes("email")
        ? `Error signing up: ${error.message}`
        : `Error signing up: ${error.message}`;

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

        <h1 className="text-2xl font-bold text-center">Register Your Library </h1>
        {/* logo start */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Uploads</h2>
          <h3 className="text-xl font-semibold mb-3">Logo :-</h3>
          <div className="flex items-center space-x-4 mb-4">
            <p className="mr-4 text-gray-400">Do you have Library logo?</p>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="libraryLogo"
                value="yes"
                checked={formData.libraryLogo === "yes"}
                onChange={() => handleOptionChange("libraryLogo", "yes")}
                className="mr-2"
              />
              Yes
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="libraryLogo"
                value="no"
                checked={formData.libraryLogo === "no"}
                onChange={() => handleOptionChange("libraryLogo", "no")}
                className="mr-2"
              />
              No
            </label>
          </div>
          {formData.libraryLogo === "yes" && (
            <div className="flex flex-col items-start space-y-4">
              <div className="w-full border rounded flex">
                <label className="flex items-center p-4 w-1/3">
                  <input 
                    id="fileInput"
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange} 
                    className="hidden"
                  />
                  <button 
                    type="button" 
                    className="bg-primary text-white px-4 py-2 rounded"
                    onClick={() => document.getElementById('fileInput').click()} // Trigger file input click
                  >
                    Choose Image
                  </button>
                </label>
                <div className="w-px bg-gray-300 h-auto mx-4"></div> {/* Vertical divider */}
                {previewUrl && (
                  <div className="relative flex-1 p-4 items-center">
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      className="w-40 h-40 object-cover border rounded"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
          <span className="text-red-600 block mt-1">{errors.libraryLogo}</span>
        </section>
        {/* logo ended */}

        {/* domain section start */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Domain :-</h2>
          <div className="flex items-center space-x-4 mb-4">
            <p className="mr-4 text-gray-400">Do you have Domain?</p>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="domain"
                value="yes"
                checked={formData.domain === "yes"}
                onChange={() => handleOptionChange("domain", "yes")}
                className="mr-2"
              />
              Yes
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="domain"
                value="no"
                checked={formData.domain === "no"}
                onChange={() => handleOptionChange("domain", "no")}
                className="mr-2"
              />
              No
            </label>
          </div>
          {formData.domain === "yes" && (
            <div className="space-y-4">
            <CustomInput
                id="domain"
                type="text"
                placeholder="domain"
              />
            </div>
          )}
          <span className="text-red-600 block mt-1">{errors.domain}</span>
        </section>
        {/* domain section end */}


           {/* decription started */}
           <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Short Description :-</h2>
          <div className="space-y-4">
            <div className="md:flex md:gap-4">
              <CustomInput
                id="shortdescription"
                type="text"
                placeholder="Short Description"
                value={formData.shortdescription}
                onChange={handleInputChange}
                error={errors.shortdescription}
                label="Short Description"
              />
              <CustomInput
                id="longdescription"
                type="text"
                placeholder="Long Description"
                value={formData.longdescription}
                onChange={handleInputChange}
                error={errors.longdescription}
                label="Long Description"
              />
            </div>
          </div>
        </section>
           {/* description ended */}


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
                <a href="/terms-and-conditions">terms and conditions</a>
              </label>
              <br />
              <span className="text-red-600 block mt-1">{errors.terms}</span>
            </div>
          </div>
        </section>

        <br />
        <button
          type="button"
          onClick={handleRegister}
          className="w-full py-3 text-white bg-[#42c4e2] rounded-full hover:bg-secondary"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Documents;

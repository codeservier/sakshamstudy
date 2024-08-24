import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo/Logo";
import CustomInput from "../components/customInput/CustomInput.jsx";

const RegistrationPage = () => {
  const courses = ["Hall - 1", "Hall - 2", "Hall - 3", "Hall - 4", "Hall - 5"];
  const slots = ["10", "20", "30", "40", "50", "60", "70", "80", "90"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    course: "",
    address: "",
    pinCode: "",
    district: "",
    state: "",
    selectedHall: [],
    selectedSlots: [],
  });

  const [errors, setErrors] = useState({});
  const [courseError, setCourseError] = useState("");
  const [slotError, setSlotError] = useState("");

  const navigate = useNavigate();

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

  const handlePhoneNumberChange = (e) => {
    const { id, value } = e.target;
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

  const handleCourseChange = (e) => {
    const selectedHall = e.target.value;
    if (selectedHall && !formData.selectedHall.includes(selectedHall)) {
      setFormData((prevData) => ({
        ...prevData,
        selectedHall: [...prevData.selectedHall, selectedHall],
      }));
      setCourseError("");
    }
  };

  const removeCourse = (courseToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedHall: prevData.selectedHall.filter(
        (course) => course !== courseToRemove
      ),
    }));
  };

  const handleSlotChange = (e) => {
    const selectedSlot = e.target.value;
    if (selectedSlot && !formData.selectedSlots.includes(selectedSlot)) {
      setFormData((prevData) => ({
        ...prevData,
        selectedSlots: [...prevData.selectedSlots, selectedSlot],
      }));
      setSlotError("");
    }
  };

  const removeSlot = (slotToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedSlots: prevData.selectedSlots.filter(
        (slot) => slot !== slotToRemove
      ),
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phoneNumber,
      address,
      pinCode,
      district,
      state,
      selectedHall,
      selectedSlots,
    } = formData;

    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        newErrors.email = "Please enter a valid email";
      }
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (phoneNumber.length !== 10) {
      newErrors.phoneNumber = "Phone number must be exactly 10 digits";
    }
    if (selectedHall.length === 0) {
      setCourseError("Please select at least one course");
    } else {
      setCourseError("");
    }
    if (selectedSlots.length === 0) {
      setSlotError("Please select at least one slot");
    } else {
      setSlotError("");
    }
    if (!address) newErrors.address = "Address is required";
    if (!pinCode) newErrors.pinCode = "Pin code is required";
    if (!district) newErrors.district = "Please enter District";
    if (!state) newErrors.state = "Please enter State";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Construct query params
    const queryParams = new URLSearchParams({
      ...formData,
      selectedHall: formData.selectedHall.join(','),
      selectedSlots: formData.selectedSlots.join(','),
    }).toString();

    navigate(`/document?${queryParams}`);
  };

  return (
    <div className="flex max-w-screen-xl mx-auto justify-center items-center p-4">
      <div className="bg-white p-8 rounded-lg w-full flex flex-col">
        <div className="flex justify-center mb-4">
          <Logo width="50" height="50" fill="#FF5733" />
        </div>

        <h1 className="text-2xl font-bold text-center">Registration Here</h1>

        <form onSubmit={handleOnSubmit}>
          {/* Basic Details */}
          <h2 className="text-xl font-semibold text-left mb-4">
            Basic Details
          </h2>
          <section className="mb-6">
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:gap-4">
              <div className="flex-1">
                <CustomInput
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={errors.name}
                  label="Name"
                />
              </div>
              <div className="flex-1">
                <CustomInput
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                  label="Email"
                />
              </div>
              <div className="flex-1">
                <CustomInput
                  id="phoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handlePhoneNumberChange}
                  error={errors.phoneNumber}
                  label="Phone Number"
                />
              </div>
            </div>
          </section>

          {/* Library Related Details */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">
              Library Related Details
            </h2>
            <div className="space-y-4 md:space-y-0 md:flex md:gap-4">
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-semibold text-gray-400">
                  Hall Name
                </label>
                <select
                  id="course"
                  value={formData.course}
                  onChange={handleCourseChange}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#42c4e2]"
                >
                  <option value="">Select Hall</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
                <div className="mt-2 flex flex-wrap gap-4">
                  {formData.selectedHall.map((course, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-[#42c4e2] text-white rounded-full py-1 px-4 border-b border-gray-200 mb-2"
                    >
                      <span className="mr-2">{course}</span>
                      <button
                        type="button"
                        onClick={() => removeCourse(course)}
                        className="text-white text-xl"
                      >
                        &#10005;
                      </button>
                    </div>
                  ))}
                  <span className="text-red-600">{courseError}</span>
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <label className="mb-1 font-semibold text-gray-400">
                  Select Chair
                </label>
                <select
                  id="slot"
                  value={formData.slot}
                  onChange={handleSlotChange}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#42c4e2]"
                >
                  <option value="">Number of Chairs</option>
                  {slots.map((slot, index) => (
                    <option key={index} value={slot}>
                      Chair - {slot}
                    </option>
                  ))}
                </select>
                <div className="mt-2 flex flex-wrap gap-4">
                  {formData.selectedSlots.map((slot, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-[#42c4e2] text-white rounded-full px-4 py-2"
                    >
                      <span className="mr-2">Slot {slot}</span>
                      <button
                        type="button"
                        onClick={() => removeSlot(slot)}
                        className="text-white text-xl"
                      >
                        &#10005;
                      </button>
                    </div>
                  ))}
                  <span className="text-red-600">{slotError}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Address Details */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Address Details</h2>
            <div className="space-y-4">
              <div className="md:flex md:gap-4">
                <CustomInput
                  id="district"
                  type="text"
                  placeholder="District"
                  value={formData.district}
                  onChange={handleInputChange}
                  error={errors.district}
                  label="District"
                />
                <CustomInput
                  id="state"
                  type="text"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  error={errors.state}
                  label="State"
                />
                <CustomInput
                  id="pinCode"
                  type="text"
                  placeholder="Pin Code"
                  value={formData.pinCode}
                  onChange={handleInputChange}
                  error={errors.pinCode}
                  label="Pin Code"
                />
              </div>
              <CustomInput
                id="address"
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                error={errors.address}
                label="Address"
              />
            </div>
          </section>

          <button
            type="submit"
            className="w-full py-3 text-white bg-[#42c4e2] rounded-full hover:bg-secondary"
          >
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;

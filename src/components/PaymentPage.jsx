import React, { useState } from "react";
import { db } from "../../firebase"; // Import Firebase configuration
import { collection, addDoc } from "firebase/firestore";

const PaymentPage = () => {
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: name,
    email: "",
    phoneNumber: "",
    address: "",
    pinCode: "",
    district: "",
    state: "",
  });

  const handlePayment = async (e) => {
    e.preventDefault();
    // Simulate payment processing
    alert("Payment Successful");
    
    // Mark payment as complete
    setIsPaymentComplete(true);
    
    // After payment is complete, save data to Firebase Firestore
    try {
      await addDoc(collection(db, "registrations"), {
        ...formData,
        timestamp: new Date(),
      });
      alert("Data successfully saved to Firebase!");
      // Optionally redirect to a thank you page or back to the registration page
      // window.location.href = "/thank-you";
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to save data. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Payment
        </h2>

        {/* Payment Form */}
        <form onSubmit={handlePayment}>
          <div className="mb-4">
            <label className="block text-gray-700">Cardholder Name</label>
            <input
              type="text"
              id="name" // Add ID to track input change
              value={formData.name}
              onChange={handleInputChange}
              className="mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Card Number</label>
            <input
              type="text"
              id="cardNumber" // Add ID to track input change
              className="mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="1234 5678 9101 1121"
              required
            />
          </div>

          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Expiration Date</label>
              <input
                type="text"
                id="expirationDate" // Add ID to track input change
                className="mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">CVV</label>
              <input
                type="text"
                id="cvv" // Add ID to track input change
                className="mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="123"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;

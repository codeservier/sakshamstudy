import React from "react";
const dummyImage = "https://via.placeholder.com/600x400.png?text=Library+Poster";
// Define the functional component
const PopUpPages = ({
  onClose,
  libraryName = "Default Library Name",
  email = "default@example.com",
  mobileNumber = "+1234567890",
  posterImageUrl = "https://via.placeholder.com/600x400.png?text=Library+Poster",
  locationUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3351674452745!2d-122.419415084681!3d37.774929279759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c8a8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1627420951131!5m2!1sen!2sus"
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3 relative">
       
        <div className="mb-4">
          <img
            src={posterImageUrl || dummyImage}
            alt="Library Poster"
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{libraryName}</h2>
          <p className="text-gray-700 mb-2">Email: {email}</p>
          <p className="text-gray-700 mb-4">Mobile: {mobileNumber}</p>
        </div>
        <div className="mb-4">
          <iframe
            title="Library Location"
            src={locationUrl}
            width="100%"
            height="200"
            className="border-0 rounded-lg"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => window.open(locationUrl, "_blank")}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            View on Map
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpPages;

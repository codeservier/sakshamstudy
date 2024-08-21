// src/components/card/TopInstructorCard.jsx
import React from "react";

const TopInstructorCard = ({ title, description, image }) => {
  return (
    <div className=" p-4 mr-5 hover:scale-95  duration-300 transition-all bg-white border rounded-lg  mx-auto flex flex-col items-center text-center">
      <img src={image} alt={title} className="w-32 h-32 object-cover rounded-full mb-4" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TopInstructorCard;

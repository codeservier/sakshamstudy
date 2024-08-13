import React from "react";

const TopInstructorCard = ({ title, description, image }) => {
  return (
    <div className="flex items-center space-x-4 bg-[#EFCF9F] rounded-lg p-3">
      <div className="flex-shrink-0 w-1/5  ">
        <img
          src={image}
          alt={title}
          className="h-[64px] w-[64px] rounded-[30px] object-cover shadow-md"
        />
      </div>

      <div className="flex-grow p-4">
        <h3 className="text-lg   text-[#800020]">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TopInstructorCard;

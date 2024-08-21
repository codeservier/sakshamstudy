import React from "react";

const TopInstructorCard = ({ title, description, image }) => {
  return (
    <div className="p-4 m-4 shadow-lg hover:shadow-xl duration-300 transition-shadow hover:bg-secondary/10 bg-white rounded-lg mx-auto flex flex-col items-center text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full mb-4"
      />
      <h2 className="text-lg sm:text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </div>
  );
};

export default TopInstructorCard;

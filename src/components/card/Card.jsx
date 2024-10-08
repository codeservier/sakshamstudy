import React from "react";
const dummyImage = "https://via.placeholder.com/600x400.png?text=Library+Poster"


const Card = ({ title, description, image, onClick, button }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg group cursor-pointer hover:scale-95 hover:bg-white transition-all duration-300 overflow-hidden"
      onClick={onClick}
    >
      <img src={image||dummyImage} alt={title} className="w-full h-48 object-cover" /> 
      <div className="p-4">
        <h3 className="text-lg font-medium text-primary">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-myblack transition-all duration-300">{description}</p>
          {button}
        </div>
      </div>
    </div>
  );
};

export default Card;

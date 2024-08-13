// CourseCard.js
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const CourseCard = ({
  title,
  description,
  image,
  instructor,
  rating,
  reviews,
  price,
}) => {
  const renderRating = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg ">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <p className="text-gray-700 mt-2">
          <strong>Instructor:</strong> {instructor}
        </p>
        <div className="flex items-center mt-2">
          {renderRating()}
          <span className="ml-2 text-gray-700">
            {rating.toFixed(1)} ({reviews})
          </span>
        </div>
        <p className="text-gray-700 mt-2">
          <strong>Current price:</strong> {price}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;

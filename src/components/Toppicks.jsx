import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/Crs.png";
import image2 from "../assets/TC.png";
import Card from "../components/card/Card";

const   Toppicks = () => {
  const navigate = useNavigate();

  const handleShowMoreClick = (courseType) => {
    navigate(`/mylearning`, { state: { courseType } });
  };

  const cardsData = [
    {
      title: "Academic Courses",
      description: "By Best Teaching faculty",
      image: image1,
      button: (
        <button
          className="py-2 px-4 text-[#800020]"
          onClick={() => handleShowMoreClick("ourCourses")}
        >
          Show More...
        </button>
      ),
    },
    {
      title: "Tech Courses",
      description: "By Tech Faculty",
      image: image2,
      button: (
        <button
          className="py-2 px-4 text-[#800020]"
          onClick={() => handleShowMoreClick("techCourses")}
        >
          Show More...
        </button>
      ),
    },
  ];

  return (
    <div className="container mx-auto p-4 my-4">
      <h1 className="text-2xl font-medium text-[#800020] mb-4">Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            button={card.button}
          />
        ))}
      </div>
    </div>
  );
};

export default Toppicks;

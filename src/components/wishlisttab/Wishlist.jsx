import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/c1.jpg";
import image2 from "../../assets/c2.jpg";
import image3 from "../../assets/c3.jpg";
import image4 from "../../assets/c4.jpg";
import Loader from "../loader/Loader";
const Wishlist = ({ hedding }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const cardsData = [
    {
      id: 1,
      title: "NEET",
      description:
        "This Batch is for NDA aspirants Targeting the NDA 1, 2025 Exam",
      image: image1,
    },
    {
      id: 2,
      title: "IIT JEE",
      description: "1000+ Hours of live Classes will be live on the PW app",
      image: image2,
    },
    {
      id: 3,
      title: "School Preparation",
      description: "Chapterwise/Topicwise Weekly & Monthly Test On Sunday.",
      image: image3,
    },
    {
      id: 4,
      title: "Govt Job Exams",
      description:
        "This Batch is for NDA aspirants Targeting the NDA 1, 2025 Exam",
      image: image4,
    },
  ];
  const handleCardClick = (id) => {
    navigate(`/coursedetail`);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="min-h-[80vh] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="container mx-auto p-4 my-4">
          <h1 className="text-2xl font-medium text-[#800020] text-400  mb-4">
            {hedding}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                onClick={() => handleCardClick()}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Wishlist;

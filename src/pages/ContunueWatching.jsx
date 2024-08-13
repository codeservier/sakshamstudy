import React from "react";
import image1 from "../assets/3.1.png";
import image2 from "../assets/bp.png";
import image3 from "../assets/a.png";
import image4 from "../assets/3.2.png";
import image5 from "../assets/3.3.png";
import image6 from "../assets/3.4.png";
import Card from "../components/card/Card";
import { useNavigate, useParams } from "react-router-dom";

const ContinueWatching = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cardsData = [
    {
      id: 1,
      title: "SSC CGL",
      description:
        "Focused training for SSC CGL, including Quantitative Aptitude, Reasoning, English, and General Awareness.",
      image: image1,
    },
    {
      id: 2,
      title: "Bank PO",
      description: "Preparation for Bank PO exams with focus on Quant, Reasoning, English, and General Awareness.",
      image: image2,
    },
    {
      id: 3,
      title: "NDA/CDS",
      description: "Coaching for Defence Services exams, covering Maths, General Ability, and English.",
      image: image3,
    },
    {
      id: 4,
      title: "TET",
      description:
        "Preparation for Teacher Eligibility Test, focusing on pedagogy, languages, and subject-specific content.",
      image: image4,
    },
    {
      id: 5,
      title: "RBI Grade B",
      description: "Focused preparation for RBI Grade B, covering Economics, Finance, and general aptitude.",
      image: image5,
    },
    {
      id: 6,
      title: "RRB NTPC ",
      description: "Training for RRB NTPC with emphasis on General Awareness, Arithmetic, and Reasoning.",
      image: image6,
    },
  ];
  const handleCardClick = (id) => {
    navigate(`/coursedetail`);
  };
  return (
    <div className="container mx-auto p-4 my-4">
      <h1 className="text-2xl font-medium text-[#800020] text-400  mb-4">
        Popular Courses
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
  );
};

export default ContinueWatching;

import React from "react";
import image1 from "../assets/libraries/1.png";
import image2 from "../assets/libraries/2.png";
import image3 from "../assets/libraries/3.png";
import image4 from "../assets/libraries/4.png";
import image5 from "../assets/libraries/5.png";
import image6 from "../assets/libraries/6.png";

import Card from "../components/card/Card";
import { useNavigate, useParams } from "react-router-dom";

const ContinueWatching = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cardsData =  [
    {
      id: 1,
      title: "Pratham Library",
      description:
        "Focused collection of resources for SSC CGL, including Quantitative Aptitude, Reasoning, English, and General Awareness.",
      image: image1,
    },
    {
      id: 2,
      title: "Rishi Library",
      description: 
        "Comprehensive collection for Bank PO exam preparation with a focus on Quant, Reasoning, English, and General Awareness.",
      image: image2,
    },
    {
      id: 3,
      title: "Anchal Library",
      description: 
        "Extensive resources for Defence Services exams like NDA/CDS, covering Maths, General Ability, and English.",
      image: image3,
    },
    {
      id: 4,
      title: "Aman Library",
      description:
        "Dedicated collection for Teacher Eligibility Test preparation, focusing on pedagogy, languages, and subject-specific content.",
      image: image4,
    },
    {
      id: 5,
      title: "CodeServir Library",
      description: 
        "Specialized resources for RBI Grade B exam preparation, covering Economics, Finance, and general aptitude.",
      image: image5,
    },
    {
      id: 6,
      title: "Arpit Library",
      description: 
        "Curated resources for RRB NTPC exam preparation with emphasis on General Awareness, Arithmetic, and Reasoning.",
      image: image6,
    },
  ];
  
  const handleCardClick = (id) => {
    navigate(`/coursedetail`);
  };
  return (
    <div className="container mx-auto p-4 my-4">
      <h1 className="text-2xl font-medium text-myblack text-400  mb-4">
        Popular Library
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
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

import React from "react";
import Slider from "react-slick";
import image1 from "../assets/c1.jpg";
import image2 from "../assets/c2.jpg";
import image3 from "../assets/c3.jpg";
import image4 from "../assets/c4.jpg";
import image5 from "../assets/c5.jpg";
import image6 from "../assets/c6.jpg";
import Card from "./card/Card";
import { useNavigate } from "react-router-dom";

function MultiScrollBanner() {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
    {
      id: 5,
      title: "Defence",
      description: "1000+ Hours of live Classes will be live on the PW app",
      image: image5,
    },
    {
      id: 6,
      title: "CA",
      description: "Chapterwise/Topicwise Weekly & Monthly Test On Sunday.",
      image: image6,
    },
  ];
  const handleCardClick = (cardId) => {
    navigate("/coursedetail");
    // console.log(`Card with ID ${cardId} clicked.`);
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <div className="p-2" key={index}>
            <Card
              title={card.title}
              description={card.description}
              image={card.image}
              onClick={() => handleCardClick()}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultiScrollBanner;

import React from "react";
import Slider from "react-slick";
import image1 from "../assets/sk.png";
import image2 from "../assets/ak.png";
import image3 from "../assets/vk.png";
import image4 from "../assets/image.png";
import image5 from "../assets/d.png";
import image6 from "../assets/v.png";
import TopInstructorCard from "./card/TopInstructorCard";

// Sample data
const libraryData = [
  {
    title: "Central Library",
    description: "The main branch of our library with extensive collections, study rooms, and community events.",
    image: image4,
  },
  {
    title: "Northside Branch",
    description: "A popular branch known for its children’s section and educational programs for kids.",
    image: image4,
  },
  {
    title: "West End Library",
    description: "A branch with a focus on digital resources and technology workshops for all ages.",
    image: image4,
  },
  {
    title: "Eastside Library",
    description: "Features a wide range of fiction and non-fiction books, plus a cozy reading area.",
    image: image4,
  },
  {
    title: "Southgate Library",
    description: "Known for its vast collection of historical and research materials.",
    image: image4,
  },
  {
    title: "Downtown Library",
    description: "The downtown location offers a quiet study space and hosts various cultural events.",
    image: image4,
  },
];

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: '20px', // Adjust padding for responsiveness
};

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-medium mb-8 text-center">
        Testimonials
      </h1>
      <Slider {...sliderSettings} className="relative">
        {libraryData.map((card, index) => (
          <div key={index} className="flex justify-center px-2">
            <TopInstructorCard
              title={card.title}
              description={card.description}
              image={card.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;

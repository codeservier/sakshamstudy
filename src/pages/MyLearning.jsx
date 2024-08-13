import React, { useEffect, useState, useRef } from "react";
import Card from "../components/card/Card";
import image1 from "../assets/3.1.png";
import image2 from "../assets/3.2.png";
import image3 from "../assets/3.3.png";
import image4 from "../assets/3.4.png";
import image5 from "../assets/c5.jpg";
import image6 from "../assets/c6.jpg";
import Loader from "../components/loader/Loader";
import { useNavigate, useLocation } from "react-router-dom";

const MyLearning = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const coursesRef = useRef(null);
  const techCoursesRef = useRef(null);

  const coursesData = [
    {
      title: "IIT JEE",
      description: "1000+ Hours of live Classes will be live on the PW app",
      image: image2,
    },
    {
      title: "School Preparation",
      description: "Chapterwise/Topicwise Weekly & Monthly Test On Sunday.",
      image: image3,
    },
    {
      title: "NEET",
      description:
        "This Batch is for NDA aspirants Targeting the NDA 1, 2025 Exam",
      image: image4,
    },
  ];

  const techCoursesData = [
    {
      title: "Defence",
      description: "1000+ Hours of live Classes will be live on the PW app",
      image: image5,
    },
    {
      title: "Govt Job Exams",
      description:
        "This Batch is for NDA aspirants Targeting the NDA 1, 2025 Exam",
      image: image6,
    },
    {
      title: "CA",
      description: "Chapterwise/Topicwise Weekly & Monthly Test On Sunday.",
      image: image1,
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (location.state?.courseType === "ourCourses" && coursesRef.current) {
        const top = coursesRef.current.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: top - 150, behavior: "smooth" });
      } else if (location.state?.courseType === "techCourses" && techCoursesRef.current) {
        const top = techCoursesRef.current.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: top - 150, behavior: "smooth" });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  const handleCardClick = (id) => {
    navigate(`/coursedetail`);
  };

  return (
    <>
      {false ? (
        <div className="min-h-[80vh] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="max-w-screen-xl mx-auto p-2">
          <div className="container mx-auto p-4 my-4">
            <h1
              ref={coursesRef}
              className="text-2xl font-medium text-[#800020] mb-4"
            >
              Our Courses
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {coursesData.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  onClick={() => handleCardClick()}
                />
              ))}
            </div>

            <h1
              ref={techCoursesRef}
              className="text-2xl font-medium text-[#800020] mt-8 mb-4"
            >
              Tech Courses
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techCoursesData.map((card, index) => (
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
        </div>
      )}
    </>
  );
};

export default MyLearning;

import React, { useEffect, useState } from "react";
import image1 from "../../assets/c2.jpg";
import image2 from "../../assets/c5.jpg";
import image3 from "../../assets/c6.jpg";
import Loader from "../loader/Loader";
import CourseCard from "../card/CourseCard";

const PublicProfile = () => {
  const [loading, setLoading] = useState(true);

  const cardsData = [
    {
      title: "How to speak fearless",
      description: "Learn how to speak confidently and fearlessly.",
      image: image1,
      instructor: "Ricardo Mendoza",
      rating: 4.4,
      reviews: "14,767",
      price: "Free",
    },
    {
      title: "Course 2",
      description: "Description for Course 2",
      image: image2,
      instructor: "John Doe",
      rating: 4.0,
      reviews: "10,000",
      price: "$49.99",
    },
    {
      title: "Course 3",
      description: "Description for Course 3",
      image: image3,
      instructor: "Jane Smith",
      rating: 4.7,
      reviews: "12,000",
      price: "$29.99",
    },
    {
      title: "Course 2",
      description: "Description for Course 2",
      image: image2,
      instructor: "John Doe",
      rating: 4.0,
      reviews: "10,000",
      price: "$49.99",
    },
  ];

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
        <>
          <div className="bg-[#2d2f31]">
            <div className="max-w-screen-xl mx-auto px-8 ">
              <div className="text-white p-10 text-5xl">David Miller</div>
            </div>
          </div>
          <div className="p-2">
            <div className="bg-gray-300 rounded-full w-32 h-32 flex items-center justify-center text-5xl text-white font-bold mx-auto">
              VR
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto px-8 py-12">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Courses you're enrolled in
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {cardsData.map((card, index) => (
                <CourseCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  instructor={card.instructor}
                  rating={card.rating}
                  reviews={card.reviews}
                  price={card.price}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PublicProfile;

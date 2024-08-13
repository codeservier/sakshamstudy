import React, { useEffect, useState } from "react";
import SingleBanner from "../components/banner/SingleBanner";
import image from "../assets/concept8.png";
import image1 from "../assets/c2.jpg";
import image2 from "../assets/c5.jpg";
import image3 from "../assets/c6.jpg";
import mission from "../assets/complete-the-mission.svg";
import TopInstructorCard from "../components/card/TopInstructorCard";
import Loader from "../components/loader/Loader";

const AboutPage = () => {
  const [loading, setLoading] = useState(true);
  const cardsData = [
    {
      title: "Fred Louis",
      description: "To aim for Equity and inclusivity in Education",
      image: image1,
    },
    {
      title: "Fred Louis",
      description: "To reach learners in every corner of the country",
      image: image2,
    },
    {
      title: "Fred Louis",
      description: "To build a business sustainability",
      image: image3,
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
          <section className="bg-[#f5f5dc] mb-8">
            <div className="max-w-screen-xl mx-auto px-6 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 ">
                <div className="py-12 pr-8">
                  <h1 className="text-4xl mb-5 font-sans">
                    About Pragati Coaching Classes
                  </h1>
                  <p className="text-[#000] font-normal text-xl ">
                    Pragati Coaching Classes is dedicated to empowering students
                    to achieve academic excellence and personal growth. With a
                    team of experienced educators and a student-centric
                    approach, we provide comprehensive coaching that covers
                    every aspect of learning. Our goal is to help students build
                    a strong foundation, excel in their studies, and develop the
                    skills needed for lifelong success. At Pragati, we believe
                    in nurturing potential and guiding each student on their
                    path to success.
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <SingleBanner image={image} />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#f5f5dc] py-10 mb-8">
            <div className="container pl-10">
              <h1 className="text-4xl mb-5 font-sans">Our Mission</h1>
              <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 ">
                  <div className="py-0 pr-8">
                    <ul className="text-[#000] font-normal text-xl list-disc pl-5">
                      <li>
                        <span className="text-[#000] font-bold">
                          {" "}
                          Foster Academic Excellence:{" "}
                        </span>{" "}
                        Provide high-quality education that enables students to
                        achieve their full academic potential.
                      </li>
                      <br />
                      <li>
                        {" "}
                        <span className="text-[#000] font-bold">
                          Inspire Lifelong Learning:
                        </span>{" "}
                        Cultivate a love for learning that encourages students
                        to continually grow and evolve in their educational
                        journey.
                      </li>
                      <br />
                      <li>
                        {" "}
                        <span className="text-[#000] font-bold">
                          Empower Students:{" "}
                        </span>
                        Equip students with the skills, confidence, and
                        knowledge needed to succeed in their academic and
                        professional lives.
                      </li>
                      <br />
                      <li>
                        <span className="text-[#000] font-bold">
                          Promote Holistic Development:
                        </span>{" "}
                        Focus on the overall development of students by
                        nurturing their intellectual, emotional, and social
                        growth.
                      </li>
                      <br />
                      <li>
                        {" "}
                        <span className="text-[#000] font-bold">
                          {" "}
                          Support and Guide:{" "}
                        </span>
                        Offer personalized guidance and support to help each
                        student overcome challenges and reach their goals.
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center items-center">
                    <SingleBanner image={mission} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#f5f5dc] mb-8">
            <div className="max-w-screen-xl mx-auto px-6 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 ">
                <div className="py-12 pr-8">
                  <h1 className="text-4xl mb-5 font-sans">
                  Our Vision
                  </h1>
                  <p className="text-[#000] font-normal text-xl ">
                  Pragati Coaching Classes is to be a leading educational institution that transforms lives through quality education. We aspire to create a nurturing environment where every student is inspired to achieve academic excellence, develop a passion for lifelong learning, and become a confident, responsible, and successful individual. We aim to empower our students to not only excel in their studies but also to contribute positively to society, shaping a brighter future for themselves and the world.
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <SingleBanner image={image} />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AboutPage;

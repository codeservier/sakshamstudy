import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import courseVideo from "../assets/v1.mp4"; // Replace this with your actual video path
import courseImage from "../assets/c1.jpg";
import DescriptiionTab from "../components/DescriptiionTab";
import MultiScrollBanner from "../components/MultiScrollBanner";
const CourseDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <div className="container  mx-auto p-4 my-4  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-2">
          <div className=" ">
            <img
              src={courseImage}
              alt="Course"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="pl-0 lg:pl-4 my-0 sm:my-0 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                How to speak to anyone & be fearless - in less than 55 min
              </h1>
              <p className="text-gray-700 mb-4">
                Learn to quickly connect with crowds of strangers, be better on
                dates or ace that job interview.
              </p>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-xl mr-2">★ 4.4</span>
                <span className="text-gray-700">14,716 ratings</span>
              </div>
              <div className="text-gray-700 mb-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. It
                is a long established fact that a reader will be distracted by
                is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </div>
              <div className="text-gray-700 mb-4">
                Created by{" "}
                <span className="font-semibold text-[#F68B33]">
                  Ricardo Mendoza
                </span>
              </div>
            </div>
            <button
              onClick={() => navigate("/lecture")}
              className="bg-[#F68B33] w-full text-white px-4 py-2 rounded-lg"
            >
              Go to course
            </button>
          </div>
        </div>
        <div>
          <DescriptiionTab />
        </div>
        <div className="my-3">
          <h1 className="text-3xl font-bold mb-2">
            Get more with paid Communication Skills courses
          </h1>
          <p className="text-gray-700 mb-4">
            Enroll in our in-depth courses from top-rated instructors
          </p>

          <MultiScrollBanner />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;

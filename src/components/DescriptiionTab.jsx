import React, { useState } from "react";
import ReviewSection from "./ReviewSection";
const DescriptiionTab = () => {
  const [activeTab, setActiveTab] = useState("learn");
  const feedbackData = [
    { stars: 5, percentage: 34 },
    { stars: 4, percentage: 37 },
    { stars: 3, percentage: 16 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 1 },
  ];
  return (
    <div className="mt-8">
      <div className="border-b">
        <nav className="flex space-x-4 overflow-x-auto whitespace-nowrap">
          <button
            className={`py-2 px-4 text-sm sm:text-lg font-medium ${
              activeTab === "learn"
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("learn")}
          >
            What you'll learn
          </button>
          <button
            className={`py-2 px-4 text-sm sm:text-lg font-medium ${
              activeTab === "content"
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("content")}
          >
            Course content
          </button>
          <button
            className={`py-2 px-4 text-sm sm:text-lg font-medium ${
              activeTab === "reviews"
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
          <button
            className={`py-2 px-4 text-sm sm:text-lg font-medium ${
              activeTab === "instructors"
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("instructors")}
          >
            Instructors
          </button>
        </nav>
      </div>
      <div className="mt-4">
        {activeTab === "learn" && (
          <div>
            <h2 className="text-2xl font-bold mb-2">What you'll learn</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Learn better techniques</li>
              <li>Speak fearlessly to a crowd (or face to face)</li>
              <li>Communicate more effectively</li>
              <li>Learn better techniques</li>
              <li>Speak fearlessly to a crowd (or face to face)</li>
              <li>Communicate more effectively</li>

              <li>Speak fearlessly to a crowd (or face to face)</li>
              <li>Communicate more effectively</li>
              <li>Learn better techniques</li>
            </ul>
          </div>
        )}
        {activeTab === "content" && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Course content</h2>
          </div>
        )}
        {activeTab === "reviews" && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Reviews</h2>
            <ReviewSection rating={4.4} feedback={feedbackData} />,
          </div>
        )}
        {activeTab === "instructors" && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Instructors</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Speak fearlessly to a crowd (or face to face)</li>
              <li>Communicate more effectively</li>
              <li>Learn better techniques</li>
              <li>Speak fearlessly to a crowd (or face to face)</li>
              <li>Communicate more effectively</li>
              <li>Learn better techniques</li>
              <li>Speak fearlessly to a crowd (or face to face)</li>
              <li>Communicate more effectively</li>
              <li>Learn better techniques</li>
              <li>Speak fearlessly to a crowd (or face to face)</li>
              <li>Communicate more effectively</li>
              <li>Learn better techniques</li>
              <li>Speak fearlessly to a crowd (or face to face)</li>
              <li>Communicate more effectively</li>
              <li>Learn better techniques</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptiionTab;

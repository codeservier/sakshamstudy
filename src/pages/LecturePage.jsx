import React, { useState } from "react";
import videoFile1 from "../assets/v2.mp4";
import videoFile2 from "../assets/v1.mp4";
import videoFile3 from "../assets/v3.mp4";
import videoFile4 from "../assets/v4.mp4";
import videoFile5 from "../assets/v5.mp4";
import videoFile6 from "../assets/v6.mp4";
import ReviewSection from "../components/ReviewSection";
import PlayList from "../components/PlayList";

const LecturePage = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoFile1);
  const [watchedVideos, setWatchedVideos] = useState([]);
  const [activeTab, setActiveTab] = useState("learn");
  const feedbackData = [
    { stars: 5, percentage: 34 },
    { stars: 4, percentage: 37 },
    { stars: 3, percentage: 16 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 1 },
  ];
  const videos = [
    {
      id: 1,
      title: "Video 1",
      url: videoFile1,
      description: "Learning a little each day adds up.",
    },
    {
      id: 2,
      title: "Video 2",
      url: videoFile2,
      description: "Learning a little each day adds up.",
    },
    {
      id: 3,
      title: "Video 3",
      url: videoFile3,
      description: "Learning a little each day adds up.",
    },
    {
      id: 4,
      title: "Video 4",
      url: videoFile4,
      description: "Learning a little each day adds up.",
    },
    {
      id: 5,
      title: "Video 5",
      url: videoFile5,
      description: "Learning a little each day adds up.",
    },
    {
      id: 6,
      title: "Video 6",
      url: videoFile6,
      description: "Learning a little each day adds up.",
    },
    {
      id: 1,
      title: "Video 1",
      url: videoFile1,
      description: "Learning a little each day adds up.",
    },
    {
      id: 2,
      title: "Video 2",
      url: videoFile2,
      description: "Learning a little each day adds up.",
    },
    {
      id: 3,
      title: "Video 3",
      url: videoFile3,
      description: "Learning a little each day adds up.",
    },
    {
      id: 4,
      title: "Video 4",
      url: videoFile4,
      description: "Learning a little each day adds up.",
    },
    {
      id: 5,
      title: "Video 5",
      url: videoFile5,
      description: "Learning a little each day adds up.",
    },
    {
      id: 6,
      title: "Video 6",
      url: videoFile6,
      description: "Learning a little each day adds up.",
    },
  ];

  const handleVideoSelect = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const handleCheckboxChange = (videoId) => {
    setWatchedVideos((prev) =>
      prev.includes(videoId)
        ? prev.filter((id) => id !== videoId)
        : [...prev, videoId]
    );
  };

  return (
    <div>
      <div className="grid grid-cols-4 md:grid-cols-6 px-3">
        <div className="col-span-4">
          <div className="overflow-y-auto h-screen">
            <div className="bg-gray-800 w-full h-[60vh] md:h-[70vh] lg:h-[80vh] mb-4">
              <video className="w-full h-full" controls>
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="text-gray-700 p-4">
              <div className="mt-0">
                <div className="border-b">
                  <nav className="flex space-x-4 overflow-x-auto whitespace-nowrap">
                    <button
                      className={`py-2 pr-4 text-sm sm:text-lg font-medium ${
                        activeTab === "content"
                          ? "border-b-2 border-indigo-600 text-indigo-600"
                          : "text-gray-600"
                      } block md:hidden`}
                      onClick={() => setActiveTab("content")}
                    >
                      Course content
                    </button>
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
                  {activeTab === "content" && (
                    <div className="block md:hidden">
                      <h2 className="text-xl font-semibold mb-4">
                        Course Content
                      </h2>
                      <PlayList
                        videos={videos}
                        handleCheckboxChange={handleCheckboxChange}
                        handleVideoSelect={handleVideoSelect}
                        watchedVideos={watchedVideos}
                      />
                    </div>
                  )}
                  {activeTab === "learn" && (
                    <div>
                      <h2 className="text-2xl font-bold mb-2">
                        What you'll learn
                      </h2>
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
                  {activeTab === "reviews" && (
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Reviews</h2>
                      <ReviewSection rating={4.4} feedback={feedbackData} />
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
            </div>
          </div>
        </div>
        <div className="bg-gray-100 col-span-2 p-4 overflow-y-auto h-screen hidden md:block">
          <h2 className="text-xl font-semibold mb-4">Course Content</h2>
          <PlayList
            videos={videos}
            handleCheckboxChange={handleCheckboxChange}
            handleVideoSelect={handleVideoSelect}
            watchedVideos={watchedVideos}
          />
        </div>
      </div>
    </div>
  );
};

export default LecturePage;

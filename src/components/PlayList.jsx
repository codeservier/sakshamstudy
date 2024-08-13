import React from "react";

const PlayList = ({
  videos,
  handleVideoSelect,
  handleCheckboxChange,
  watchedVideos,
}) => {
  return (
    <div>
      {videos.map((video) => (
        <div>
          <div key={video.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={watchedVideos.includes(video.id)}
              onChange={() => handleCheckboxChange(video.id)}
              className="mr-2"
            />
            <button
              onClick={() => handleVideoSelect(video.url)}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              <h4>{video.title}</h4>
            </button>
          </div>
          <div>
            <p className="pl-6">{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayList;

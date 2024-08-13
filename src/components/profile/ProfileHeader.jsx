import React from "react";

const ProfileHeader = ({ title, description }) => {
  return (
    <div>
      <div className="text-center border-b p-5  border-gray-300">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600  ">{description}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;

import React from "react";
import data from "../../assets/3.png";
const SingleBanner = ({ image }) => {
  return (
    <div className="px-4">
      <img
        src={image || data}
        alt="single-banner"
        height="2000"
        width="2000"
        className="w-full md:h-[400px] min-h-[200px] object-contain"
      />
    </div>
  );
};

export default SingleBanner;

import React from "react";

const ReviewCard = () => {
  return (
    <div className="TrustedPlatformCards_parent__2TMLv lg:h-[265px] lg:w-[265px] md:w-[230px] md:h-[200px] h-[158px] w-[158px] md:rounded-[16px] rounded-[4px] flex flex-col items-center lg:justify-start justify-center overflow-hidden bg-[#FFF3E3]">
      <div className="TrustedPlatformCards_child__lsjpg duration-300 flex flex-col items-center justify-center">
        <div className="lg:text-[40px] md:text-[38px] text-2xl flex flex-row items-center justify-center font-[700]">
          <div className="flex flex-row">
            <div
              className="relative overflow-y-hidden"
              style={{ height: "55px", width: "26px" }}
            ></div>
          </div>
          15 Million+
        </div>
        <div className="md:text-lg text-[#3D3D3D] text-sm font-[500]">
          Happy Students
        </div>
      </div>
      <div
        className="TrustedPlatformCards_child__lsjpg mt-[3px] transform hover:translate-y-0 opacity-50 w-full h-[110px] bg-center bg-contain bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://static.pw.live/5b09189f7285894d9130ccd0/fa94a64a-7f6c-49c7-99be-dbf5b4cf440f.webp')",
        }}
      ></div>
    </div>
  );
};

export default ReviewCard;

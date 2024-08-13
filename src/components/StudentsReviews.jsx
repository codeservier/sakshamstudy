import React from "react";
import ReviewCard from "./card/ReviewCard";

const StudentsReviews = () => {
  return (
    <>
      <div className="undefined mt-6 md:mt-10 mx-auto lg:max-w-6xl xl:px-0 px-4 w-full flex flex-col items-center justify-center">
        <div>
          <h2 className="md:text-[32px] text-[20px] md:leading-[48px] leading-[30px] font-[700] my-[8px] text-center">
            A Platform Trusted by Students Worldwide
          </h2>
        </div>
        <div>
          <div className="md:text-[18px] text-[14px] text-[#3D3D3D] md:leading-[24px] text-center leading-[20px] font-[500]">
            Don't Just Take Our Word for It. Delve into the Numbers and Witness
            the Excellence for Yourself!
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="TransitionWrapper_wrapper__8W2Z3 animate-in TransitionWrapper_transition__8QkqS">
            <div className="grid xl:grid-cols-4 grid-cols-2 gap-3 md:my-[32px] my-[20px]">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsReviews;

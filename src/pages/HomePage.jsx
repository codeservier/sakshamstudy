import React, { useEffect, useState } from "react";
import SingleBanner from "../components/banner/SingleBanner";
// import { BannerSlider } from "../components/banner/BannerSlider";
import ContunueWatching from "./ContunueWatching";
import { Upcoming } from "../components/banner/Upcoming";
import StudentsReviews from "../components/StudentsReviews";
import TopInstructor from "../components/TopInstructor";
import Toppicks from "../components/Toppicks";
import Banner from "../components/banner/Banner";
import Loader from "../components/loader/Loader";
export const HomePage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {false ? (
        <div className="min-h-[80vh] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="max-w-screen-xl mx-auto px-6  " >
            <Banner />
          </div>
          <div className="max-w-screen-xl mx-auto px-2 ">
            <ContunueWatching />
          </div>
          <div className="max-w-screen-xl mx-auto px-6">
            <SingleBanner  />
          </div>
          <div className="max-w-screen-xl mx-auto px-6 ">
            <Upcoming />
          </div>
          <div className="max-w-screen-xl mx-auto px-2 ">
            <Toppicks />
          </div>
          <div className="max-w-screen-xl mx-auto px-2 ">
            <TopInstructor />
          </div>
        </>
      )}
    </>
  );
};

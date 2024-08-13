import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../loader/Loader";
import MyLearning from "../../pages/MyLearning";
import Wishlist from "./Wishlist";

const tabs = ["All Course", "My Lists", "WishList"];

const PublicProfile = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All Course");
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
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
          <div className="bg-[#2d2f31]">
            <div className="max-w-screen-xl mx-auto px-8 ">
              <div className="text-white p-10 text-5xl">David Miller</div>
              <div>
                <nav className="mt-6 flex flex-row  ">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => handleTabClick(tab)}
                      className={`px-3 py-2 font-bold text-left ${
                        activeTab === tab
                          ? "  bg-[#f68b33]  pl-2"
                          : "text-white hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <div className="">
            {activeTab === "All Course" && <MyLearning />}
            {activeTab === "My Lists" && <Wishlist hedding="Wish List" />}
            {activeTab === "WishList" && <Wishlist hedding="My List" />}
          </div>
        </>
      )}
    </>
  );
};

export default PublicProfile;

import React, { useState } from "react";
import UpdateProfile from "./UpdateProfile";
import ImageProfile from "./ImageProfile";
import SecurityManagement from "./SecurityManagement";
import Subscription from "./Subscription";
import { useNavigate } from "react-router-dom";
import PaymentMethod from "./PaymentMethod";
import Privacy from "./Privacy";
import Notifications from "./Notifications";
import CloseAccount from "./CloseAccount";
import PublicProfile from "./PublicProfile";

const tabs = [
  "View public profile",
  "Profile",
  "Photo",
  "Account Security",
  "Subscriptions",
  "Payment methods",
  "Privacy",
  "Notifications",

  "Close account",
];

const Myprofile = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Subscriptions") {
      navigate("/profile/subscription");
    }
    if (tab === "Payment methods") {
      navigate("/profile/paymentMethods");
    }
    if (tab === "View public profile") {
      navigate("/profile/publicProfile");
    }
  };
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-5 md:px-24 py-4">
        <div className=" grid grid-cols-1 md:grid-cols-4  container border border-width: 1px mx-auto     min-h-screen">
          <div className="col-span-1  border  border-width: 1px   ">
            <div className="p-2">
              <div className="bg-gray-300 rounded-full w-32 h-32 flex items-center justify-center text-5xl text-white font-bold mx-auto">
                DM
              </div>
              <h1 className="text-2xl font-bold text-center mt-4">
                David Miller
              </h1>
            </div>

            <nav className="mt-6 flex flex-col  ">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`px-3 py-2 font-bold text-left ${
                    activeTab === tab
                      ? "  bg-[#f68b33]  pl-2"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
          <div className="col-span-3 border border-width: 1px  ">
            {activeTab === "View public profile" && <PublicProfile />}
            {activeTab === "Profile" && <UpdateProfile />}
            {activeTab === "Photo" && <ImageProfile />}
            {activeTab === "Account Security" && <SecurityManagement />}
            {activeTab === "Subscriptions" && <Subscription />}
            {activeTab === "Payment methods" && <PaymentMethod />}

            {activeTab === "Privacy" && <Privacy />}
            {activeTab === "Notifications" && <Notifications />}

            {activeTab === "Close account" && <CloseAccount />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;

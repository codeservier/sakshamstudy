import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import MultiScrollBanner from "../components/MultiScrollBanner";
import ReviewSection from "../components/detailsTab/ReviewSection";
import LibraryFeature from "../components/detailsTab/LibraryFeature";
import SeatsAvailability from "../components/detailsTab/SeatsAvailability";
import { ManagementTab } from "../components/detailsTab/ManagementTab";
import PopUpPages from "../pages/PopUpPages.jsx";
const dummyImage = "https://via.placeholder.com/600x400.png?text=Library+Poster"


const LibraryDetailPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = state;

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("learn");
  const [showPopUp, setShowPopUp] = useState(false);

  if (!id) {
    return <div>No data available</div>;
  }

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "registration", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = {
            id: docSnap.id,
            ...docSnap.data(),
          };
          setUserData(data);
          console.log("Fetched Data: ", data);
        } else {
          console.log("No such document!");
          setUserData(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCardData();
  }, [id]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleOnClickGetstarted = () => {
    if(userData && userData?.domain === "yes" && userData?.domainurl){
      window.open(`https://${userData?.domainurl}`, "_blank");
    }
    else
    {
      setShowPopUp(true);
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <div className="container mx-auto p-4 my-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-2">
          <div>
            <img
              src={userData?.libraryLogoUrl || dummyImage}
              alt="Course"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="pl-0 lg:pl-4 my-0 sm:my-0 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-   2">
                {userData?.libraryname || "Course Title"}
              </h1>
              <p className="text-gray-700 mb-4">
                {userData?.shortdescription || "Course Description"}
              </p>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-xl mr-2">
                  ★ {userData?.rating || "N/A"}
                </span>
                <span className="text-gray-700">
                  {userData?.reviewsCount || "N/A"} ratings
                </span>
              </div>
              <div className="text-gray-700 mb-4">
                {userData?.longdescription || "Course Details"}
              </div>
              <div className="text-gray-700 mb-4">
               Library owner name : 
                <span className="font-semibold text-[#F68B33]">
                  {userData?.name || "Instructor"}
                </span>
              </div>
            </div>
            <button
              onClick={handleOnClickGetstarted} // Toggle pop-up visibility
              className="hidden md:block text-center  bg-primary hover:bg-secondary 
              hover:cursor-pointer transition-all duration-200 rounded-[20px] p-2.5 px-8
               text-white hover:no-underline hover:scale-100 hover:translate-x-3 shadow-lg "
            >
              Get start with us
            </button>
          </div>
        </div>
        <div>
          <div className="mt-8">
            <div className="border-b">
              <nav className="flex space-x-4 overflow-x-auto whitespace-nowrap">
                <button
                  className={`py-2 px-4 text-sm sm:text-lg font-medium ${
                    activeTab === "features"
                      ? "border-b-2 border-indigo-600 text-indigo-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab("features")}
                >
                  Our Features
                </button>
                <button
                  className={`py-2 px-4 text-sm sm:text-lg font-medium ${
                    activeTab === "seat"
                      ? "border-b-2 border-indigo-600 text-indigo-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab("seat")}
                >
                  Seat Availability
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
                    activeTab === "management"
                      ? "border-b-2 border-indigo-600 text-indigo-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab("management")}
                >
                  Management
                </button>
              </nav>
            </div>
            <div className="mt-4">
              {activeTab === "features" && <LibraryFeature />}
              {activeTab === "seat" && (
                <SeatsAvailability userData={userData} />
              )}
              {activeTab === "reviews" && (
                <ReviewSection rating={userData?.rating || 0} />
              )}
              {activeTab === "management" && <ManagementTab />}
            </div>
          </div>
        </div>
        <div className="my-3">
          <h1 className="text-3xl font-bold mb-2">
            Here is some other library in your location
          </h1>
          <p className="text-gray-700 mb-4">
            Enroll in our in-depth courses from top-rated instructors
          </p>
          <MultiScrollBanner />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-2">
        {showPopUp && (
          <PopUpPages
            onClose={() => setShowPopUp(false)}
            posterImageUrl={userData?.libraryLogoUrl || dummyImage}
            libraryName={userData?.name}
            email={userData?.email}
            mobileNumber={userData?.phoneNumber}
          />
        )}
      </div>
    </div>
  );
};

export default LibraryDetailPage;

import React, { useEffect, useState } from "react";
import courseImage from "../assets/c1.jpg";
import MultiScrollBanner from "../components/MultiScrollBanner";
import { useLocation, useNavigate } from "react-router-dom";
import ReviewSection from "../components/detailsTab/ReviewSection";
import LibraryFeature from "../components/detailsTab/LibraryFeature";
import SeatsAvailability from "../components/detailsTab/SeatsAvailability";
import { ManagementTab } from "../components/detailsTab/ManagementTab";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const CourseDetailPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = state;
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allDocuments, setAllDocuments] = useState([]);
  if (!id) {
    return <div>No data available</div>;
  }

  console.log("Cardsdata pritam", id);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        setLoading(true);
        const collectionRef = collection(db, "registration");
        const querySnapshot = await getDocs(collectionRef);
        const allDocuments = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllDocuments(allDocuments);
        console.log(allDocuments);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchCardData();
  }, []);


  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
       
  //       const colRef = collection(db, "registration");
  //       const q = query(colRef, where("id", "==", id));

  //       const querySnapshot = await getDocs(q);
  //       console.log('PPPP :',querySnapshot.docs[0]);
  //       if (!querySnapshot.empty) {
  //         const docSnap = querySnapshot.docs[0];
  //         setUserData(docSnap.data());
  //         console.log("User data:", docSnap.data());
  //       } else {
  //         console.log("No such document!");
  //         setUserData(null);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (id) {
  //     fetchUserData(id);
  //   } else {
  //     setUserData(null);
  //     setLoading(false);
  //   }

   
  // }, [id]);



  const [activeTab, setActiveTab] = useState("learn");
  const feedbackData = [
    { stars: 5, percentage: 34 },
    { stars: 4, percentage: 37 },
    { stars: 3, percentage: 16 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 1 },
  ];
  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <div className="container  mx-auto p-4 my-4  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-2">
          <div className=" ">
            <img
              // src={card.libraryLogoUrl}
              alt="Course"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="pl-0 lg:pl-4 my-0 sm:my-0 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">dfgdfsgds</h1>
              <p className="text-gray-700 mb-4">
                Learn to quickly connect with crowds of strangers, be better on
                dates or ace that job interview.
              </p>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-xl mr-2">★ 4.4</span>
                <span className="text-gray-700">14,716 ratings</span>
              </div>
              <div className="text-gray-700 mb-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. It
                is a long established fact that a reader will be distracted by
                is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </div>
              <div className="text-gray-700 mb-4">
                Created by
                <span className="font-semibold text-[#F68B33]">
                  Ricardo Mendoza
                </span>
              </div>
            </div>
            <button
              onClick={() => navigate("/lecture")}
              className="bg-[#F68B33] w-full text-white px-4 py-2 rounded-lg"
            >
              Go to course
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
                  Our Fetures
                </button>
                <button
                  className={`py-2 px-4 text-sm sm:text-lg font-medium ${
                    activeTab === "seat"
                      ? "border-b-2 border-indigo-600 text-indigo-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab("seat")}
                >
                  Seat Avalability
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
                    activeTab === "mangement"
                      ? "border-b-2 border-indigo-600 text-indigo-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab("mangement")}
                >
                  Mangement
                </button>
              </nav>
            </div>
            <div className="mt-4">
              {activeTab === "features" && <LibraryFeature />}
              {activeTab === "seat" && <SeatsAvailability card={card} />}
              {activeTab === "reviews" && (
                <ReviewSection rating={4.4} feedback={feedbackData} />
              )}
              {activeTab === "mangement" && <ManagementTab />}
            </div>
          </div>
        </div>
        <div className="my-3">
          <h1 className="text-3xl font-bold mb-2">
            Get more with paid Communication Skills courses
          </h1>
          <p className="text-gray-700 mb-4">
            Enroll in our in-depth courses from top-rated instructors
          </p>

          <MultiScrollBanner />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;

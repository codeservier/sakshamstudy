// PageNotFound.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/loader/Loader";

const PageNotFound = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex items-center justify-center h-[250px]">
          <div className="container mx-auto px-4">
            <div className="  p-6 text-center">
              <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
              <p className="text-gray-600">
                Oops! The page you are looking for does not exist.
              </p>
              <Link
                to="/"
                className="mt-4 inline-block bg-[#800020]  hover:bg-[#EFCF9F] text-white font-bold py-2 px-4 rounded"
              >
                Go to Home Page
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PageNotFound;

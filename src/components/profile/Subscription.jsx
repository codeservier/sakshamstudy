import React from "react";

const Subscription = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-4">
      <div className="grid grid-cols-1">
        <div className=" p-5  border-gray-300">
          <h2 className="text-2xl font-bold">Subscriptions</h2>
          <p className="text-gray-600  ">Manage your Mignite subscriptions </p>
        </div>
        <div className="p-5">
          <div>
            <h2 className="text-xl font-bold">Active plans</h2>
          </div>
          <div
            className="py-10 px-4 md:px-24 text-center mt-6 border-4"
            style={{ borderStyle: "dotted" }}
          >
            You don’t have any active subscriptions
          </div>
        </div>
        <div className="p-5">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Subscription plans available</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 border-2">
            <div className="col-span-1 sm:col-span-2 order-1 sm:order-first">
              <h2 className="text-xl font-bold p-4">Personal Plan</h2>
              <p className="text-gray-600 px-4 pb-4">
                New opportunities await. Sign up for Personal Plan to get all
                this and more:
              </p>
              <ul className="  ">
                <li className="pb-4">
                  <span className="p-4 text-green-500 ">&#x2714;</span>
                  Access to 11,000+ top courses{" "}
                </li>
                <li className="pb-4">
                  <span className="p-4 text-green-500 ">&#x2714;</span>
                  Courses in tech, business, and more{" "}
                </li>
                <li className="pb-4">
                  <span className="p-4 text-green-500 ">&#x2714;</span>
                  Practice tests, exercises, and Q&A{" "}
                </li>
              </ul>
              <div className="p-4 flex items-center  ">
                <div>
                  <button
                    type="submit"
                    className="mt-6 p-3 bg-[#f68b33] text-white w-28 rounded"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="ml-4 pt-6 cursor-pointer font-bold">
                  Learn More
                </div>
              </div>
              <div className="p-4">
                Starting at ₹1,039 per month. Cancel anytime.
              </div>
            </div>
            <div className="col-span-1 sm:col-span-1">
              {/* Adjusted col-span for responsiveness */}
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

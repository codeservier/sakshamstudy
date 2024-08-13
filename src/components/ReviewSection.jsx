import React from "react";

const ReviewSection = ({ rating, feedback }) => {
  return (
    <div className="p-4">
      {/* Featured Review */}

      {/* Student Feedback */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Student feedback</h2>
        <div className="flex">
          <div className=" pt-7   ">
            <div className="text-6xl font-bold text-center">{rating}</div>
            <div className="ml-4">
              <div className="text-[#800020] text-2xl">★★★★★</div>
              <div className="text-gray-500">Tutorial rating</div>
            </div>
          </div>
          <div className="w-[60%] ml-8">
            {feedback.map((item, index) => (
              <div key={index} className="flex items-center mb-2">
                <div className="w-[50%] bg-gray-300 h-2 rounded-full mr-2">
                  <div
                    className="bg-[#800020] h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className="flex items-center  mr-5">
                  <span className="text-[#800020] text-xl">
                    {"★".repeat(item.stars)}
                    {"☆".repeat(5 - item.stars)}
                  </span>
                </div>
                <span className="  text-gray-700">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        {/* <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search reviews"
            className="border p-2 flex-grow"
          />
          <button className="bg-gray-200 p-2 ml-2">All ratings</button>
        </div> */}
        <div className="mb-4 py-2">
          <div className="flex items-center mb-2">
            <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center">
              VM
            </div>
            <div className="ml-4">
              <h3 className="font-bold">Vinoth M.</h3>
              <div className="text-[#800020]">★★★★★</div>
              <div className="text-gray-500">a week ago</div>
              <p className="mt-2">
                Thanks to the instructor Ricky Mendoza who has explained
                everything in a crisp and clear manner. Will implement these
                points in the future presentations for sure. It really helps.
              </p>
              <div className="flex items-center mt-2">
                <button className="mr-4">👍</button>
                <button>Report</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              G
            </div>
            <div className="ml-4">
              <h3 className="font-bold">Gopinathan</h3>
              <div className="text-[#800020]">★★★★★</div>
              <div className="text-gray-500">2 weeks ago</div>
              <p className="mt-2">
                It was really cool to know about the public speaking and was
                learned now some of the way tech knowledge to enhance my
                communication skills.
              </p>
              <div className="flex items-center mt-2">
                <button className="mr-4">👍</button>
                <button>Report</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;

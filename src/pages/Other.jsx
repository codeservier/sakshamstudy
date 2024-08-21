import React from "react";
import Banner from "../assets/libraries/1.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5"; // Updated import for IoFastFood
import { GiFoodTruck } from "react-icons/gi";

const Other = () => {
  return (
    <div className="min-h-[600px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1
              id="summercontact"
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold"
            >
              Summer Sale Up to 20% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio.
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment Method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>

          {/* Image section */}
          <div data-aos="zoom-in" className="flex justify-center">
            <img
              src={Banner}
              alt="Summer Sale Banner"
              className="max-w-full h-auto w-full max-w-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;

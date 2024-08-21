import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCalendarAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faRegBookmark } from '@fortawesome/free-regular-svg-icons';
import animsvg from "../assets/svg/animated.svg";

const OurServices = () => {
  return (
    <div className="min-h-[600px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="flex justify-center">
            <img
              src={animsvg}
              alt="Summer Sale Banner"
              className="max-w-full h-auto w-full object-cover"
            />
          </div>

          {/* Text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1
              id="summercontact"
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold"
            >
              Summer Sale: Up to 20% Off on Library Memberships!
            </h1>
            <p
              data-aos="fade-up"
              className="text-lg text-myblack tracking-wide leading-5"
            >
              This summer, dive into a world of knowledge with our special
              offer! Enjoy up to 20% off on all library memberships and access a
              wealth of resources at your fingertips.
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FontAwesomeIcon icon={faBookOpen} className="text-4xl h-8 w-12" />
                <p className="text-myblack">Vast Collection of Books: From bestsellers to timeless classics, find books across every genre and subject.</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FontAwesomeIcon icon={faRegBookmark} className="text-4xl h-8 w-12" />
                <p className="text-myblack">Quiet Study Areas: Enjoy peaceful, dedicated spaces perfect for focused study and reading.</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FontAwesomeIcon icon={faUsers} className="text-4xl h-8 w-12" />
                <p className="text-myblack">Expert Assistance: Our friendly staff are here to help you find the perfect book or research material.</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-4xl h-8 w-12" />
                <p className="text-myblack">Community Events: Participate in exciting workshops, book clubs, and author talks.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Additional content or sections can be added here */}
      </div>
    </div>
  );
};

export default OurServices;

import React from "react";
import ProfileHeader from "./ProfileHeader";

const UpdateProfile = () => {
  return (
    <div>
      <ProfileHeader
        title="Public profile"
        description="Add information about yourself"
      />
      <div className="p-5 px-4 md:px-24 text-sm">
        <form className="mt-4 space-y-4">
          <div className="text-base font-bold"> Basics :</div>
          <div>
            <input
              type="text"
              className="border  p-3 w-full"
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              type="text"
              className="border  p-3 w-full"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              type="text"
              className="border  p-3 w-full"
              placeholder="Headline"
              maxLength={100}
            />
            <p className="text-gray-600 text-[13px]">
              Add a professional headline like, "Instructor at Udemy" or
              "Architect."
            </p>
          </div>
          <div>
            <textarea className="border  p-3 w-full" rows="4"></textarea>
            <p className="text-gray-600 text-[13px]">
              Links and coupon codes are not permitted in this section.
            </p>
          </div>
          <div>
            <select className="border  p-3 w-full">
              <option>English (US)</option>
              <option>English (UK)</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>

          <div className="mt-6">
            <div className="text-base font-bold"> Links :</div>
            <div className="mt-4">
              <input
                type="url"
                className="border  p-3 w-full"
                placeholder="Website (http(s)://..)"
              />
            </div>
            <div className="mt-4">
              <div className=" ">
                <span className=" absolute bg-gray-200 border-r    border-gray-300 py-[13px] px-3">
                  http://twitter.com/
                </span>

                <input
                  type="url"
                  className="border  p-3 pl-[152px]  w-full"
                  placeholder="http://twitter.com/"
                />
              </div>
              <p className="text-gray-600 text-[13px]">
                Add your Twitter username (e.g. johnsmith).
              </p>
            </div>
            <div className="mt-4">
              <div className=" ">
                <span className="absolute bg-gray-200 border-r    border-gray-300 py-[13px] px-3">
                  http://www.facebook.com/
                </span>
                <input
                  type="url"
                  className="border   pl-[203px] p-3 w-full"
                  placeholder="http://www.facebook.com/"
                />
              </div>
              <p className="text-gray-600 text-[13px]">
                Input your Facebook username (e.g. johnsmith).
              </p>
            </div>
            <div className="mt-4">
              <div className=" ">
                <span className="absolute bg-gray-200 border-r      border-gray-300 py-[13px] px-3">
                  http://www.facebook.com/
                </span>
                <input
                  type="url"
                  className="border focus-visible:border-none pl-[200px]  p-3 w-full"
                  placeholder="http://www.linkedin.com/"
                />
              </div>
              <p className="text-gray-600 text-[13px]">
                Input your LinkedIn resource id (e.g. in/johnsmith).
              </p>
            </div>
            <div className="mt-4">
              <div className=" ">
                <span className="absolute bg-gray-200 border-r    border-gray-300 py-[13px] px-3">
                  http://www.facebook.com/
                </span>
                <input
                  type="url"
                  className="border  p-3  pl-[203px] w-full"
                  placeholder="http://www.youtube.com/"
                />
              </div>
              <p className="text-gray-600 text-[13px]">
                Input your YouTube username (e.g. johnsmith).
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 bg-[#f68b33] text-white p-2 w-48 rounded"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;

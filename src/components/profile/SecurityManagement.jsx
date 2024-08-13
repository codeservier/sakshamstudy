import React from "react";
import ProfileHeader from "./ProfileHeader";

const SecurityManagement = () => {
  return (
    <div>
      <div>
        <ProfileHeader
          title="Account"
          description="Edit your account settings and change your password here."
        />
      </div>
      <div className="">
        <div className="text-base font-bold pt-5 px-4 md:px-24">Email :</div>
        <form className="space-y-4">
          <div className="border-b pb-5 border-gray-300">
            <div className="p-5 px-4 md:px-24 text-sm">
              <input
                type="email"
                className="border p-3 w-full"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="">
        <div className="text-base font-bold pt-5 px-4 md:px-24">Password :</div>
        <form className="space-y-4">
          <div className="border-b pb-5 border-gray-300">
            <div className="p-5 px-4 md:px-24 text-sm">
              <input
                type="password"
                className="border p-3 w-full"
                placeholder="Enter Current Password"
              />
            </div>
            <div className=" px-5 py-3 md:px-24 text-sm">
              <input
                type="password"
                className="border p-3 w-full"
                placeholder="Enter New Password"
              />
            </div>
            <div className="  px-5 py-3 md:px-24 text-sm">
              <input
                type="password"
                className="border p-3 w-full"
                placeholder="Confirm New Password"
              />
            </div>
            <div className=" px-5 py-3 md:px-24">
              <button
                type="submit"
                className=" bg-[#f68b33] text-white p-2 rounded"
              >
                Update Password
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className=" py-5 px-4 md:px-24">
        <div className="border border-gray-300 p-4 ">
          <div className="text-base font-bold">Multi-factor Authentication</div>
          <div className="text-gray-500">
            Increase your account security by requiring that a code emailed to
            you be entered when you log in. For more information on how
            multi-factor authentication works, refer to our Help Center article.
          </div>
          <div className="  py-3  ">
            <button
              type="submit"
              className=" bg-[#f68b33] text-white p-2 rounded"
            >
              Enable
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityManagement;

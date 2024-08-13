import React from "react";
import ProfileHeader from "./ProfileHeader";

const Notifications = () => {
  return (
    <div>
      <div>
        <ProfileHeader
          title="Notifications"
          description="Turn promotional email notifications from Udemy on or off"
        />
      </div>
      <div className="p-5 px-4 md:px-24 text-sm">
        <h2 className="text-xl font-bold">I want to receive:</h2>

        <div className="flex items-center mt-3 border-2 p-5 cursor-pointer hover:bg-slate-300">
          <div>
            <input type="checkbox" className="h-5 w-5" />
          </div>
          <div className="px-3 text-base font-bold">
            Promotions, course recommendations, and helpful resources from
            Udemy.
          </div>
        </div>
        <div className="mt-3 border-2 p-5 cursor-pointer hover:bg-slate-300">
          <div className="flex items-center pb-3">
            <div>
              <input type="checkbox" className="h-5 w-5" />
            </div>
            <div className="px-3 text-base font-bold">
              Announcements from instructors whose course(s) I’m enrolled in.
            </div>
          </div>
          <div className="pl-8">
            To adjust this preference by course, leave this box checked and go
            to the course dashboard and click on "Options" to opt in or out of
            specific announcements.
          </div>
        </div>
        <div className="mt-3 border-2 p-5 cursor-pointer hover:bg-slate-300">
          <div className="flex items-center pb-3">
            <div>
              <input type="checkbox" className="h-5 w-5" />
            </div>
            <div className="px-3 text-base font-bold">
              Don't send me any promotional emails.
            </div>
          </div>
          <div className="pl-8">
            If this box is checked, please note that you will continue to
            receive important transactional emails like purchase receipts..
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="mt-6 p-3 bg-[#f68b33] text-white w-28 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

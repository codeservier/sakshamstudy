import React, { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import placeholderImage from "../../assets/placeholder.jpg";
const Privacy = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div>
      <div>
        <ProfileHeader
          title="Privacy"
          description="Modify your privacy settings here."
        />
      </div>
      <div className="p-5 px-4 md:px-24 text-sm">
        <h2 className="text-xl font-bold"></h2>
        <div className="text-base font-bold"> Profile page settings</div>
        <div className=" py-2 mt-3">
          <input type="checkbox" />
          <label className="px-3">
            Show my saved payment methods on the checkout step.{" "}
          </label>
        </div>
        <div className=" py-2 mt-3">
          <input type="checkbox" />
          <label className="px-3">
            Show my saved payment methods on the checkout step.{" "}
          </label>
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

export default Privacy;

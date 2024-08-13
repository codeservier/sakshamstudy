import React, { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import placeholderImage from "../../assets/placeholder.jpg";
const CloseAccount = () => {
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
          title="Close Account"
          description="Close your account permanently."
        />
      </div>
      <div className="p-5 px-4 md:px-24 text-sm">
        <p className="pb-5">
          <span className="text-xl font-bold pr-3">Warning:</span>
          If you close your account, you will be unsubscribed from all 1 of your
          courses and will lose access to your account and data associated with
          your account forever, even if you choose to create a new account using
          the same email address in the future.
        </p>
        <p>
          Please note, if you want to reinstate your account after submitting a
          deletion request, you will have 14 days after the initial submission
          date to reach out to privacy@abc.com to cancel this request.
        </p>
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

export default CloseAccount;

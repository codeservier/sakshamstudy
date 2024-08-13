import React, { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import placeholderImage from "../../assets/placeholder.jpg";
const ImageProfile = () => {
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
          title="Photo"
          description="Add a nice photo of yourself for your profile."
        />
      </div>
      <div className="p-5 px-4 md:px-24 text-sm">
        <h2 className="text-xl font-bold"></h2>
        <div className="text-base font-bold"> Add / Change Image</div>
        <div className="mt-4 h-64 object-cover w-full bg-slate-500 border border-width: 1px">
          <img
            src={selectedImage || placeholderImage}
            alt="Selected"
            className="h-64 object-cover w-full"
          />
        </div>
        <form className="mt-4 space-y-4">
          <div className="text-base font-bold"> Add / Change Image</div>
          <div>
            <input
              type="file"
              className="border rounded p-2 w-full"
              onChange={handleImageChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageProfile;

// // components/BasicDetails.jsx
// import React from "react";
// import CustomInput from "../../components/customInput/CustomInput";

// const BasicDetails = ({ formData, handleInputChange, handlePhoneNumberChange, errors }) => (
//   <>
//  {/* Basic Details */}
//  <h2 className="text-xl font-semibold text-left mb-4">
//  Basic Details
// </h2>
// <section className="mb-6">
//  <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:gap-4">
//    <div className="flex-1">
//      <CustomInput
//        id="name"
//        type="text"
//        placeholder="Name"
//        value={formData.name}
//        onChange={handleInputChange}
//        error={errors.name}
//        label="Name"
//      />
//    </div>
//    <div className="flex-1">
//      <CustomInput
//        id="email"
//        type="email"
//        placeholder="Email"
//        value={formData.email}
//        onChange={handleInputChange}
//        error={errors.email}
//        label="Email"
//      />
//    </div>
//    <div className="flex-1">
//      <CustomInput
//        id="phoneNumber"
//        type="text"
//        placeholder="Phone Number"
//        value={formData.phoneNumber}
//        onChange={handlePhoneNumberChange}
//        error={errors.phoneNumber}
//        label="Phone Number"
//      />
//    </div>
//  </div>
// </section>
// </>
// );

// export default BasicDetails;

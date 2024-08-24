// // components/AddressDetails.jsx
// import React from "react";
// import CustomInput from "../../components/customInput/CustomInput";

// const AddressDetails = ({ formData, handleInputChange, errors }) => (
//   <section className="mb-6">
//     <h2 className="text-xl font-semibold mb-4">Address Details</h2>
//     <div className="space-y-4">
//       <div className="md:flex md:gap-4">
//         <CustomInput
//           id="district"
//           type="text"
//           placeholder="District"
//           value={formData.district}
//           onChange={handleInputChange}
//           error={errors.district}
//           label="District"
//         />
//         <CustomInput
//           id="state"
//           type="text"
//           placeholder="State"
//           value={formData.state}
//           onChange={handleInputChange}
//           error={errors.state}
//           label="State"
//         />
//         <CustomInput
//           id="pinCode"
//           type="text"
//           placeholder="Pin Code"
//           value={formData.pinCode}
//           onChange={handleInputChange}
//           error={errors.pinCode}
//           label="Pin Code"
//         />
//       </div>
//       <div className="md:flex md:gap-4">
//         <CustomInput
//           id="address"
//           type="text"
//           placeholder="Address"
//           value={formData.address}
//           onChange={handleInputChange}
//           error={errors.address}
//           label="Address"
//         />
//       </div>
//     </div>
//   </section>
// );

// export default AddressDetails;

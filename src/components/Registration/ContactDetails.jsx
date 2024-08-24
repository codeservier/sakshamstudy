// // components/ContactDetails.jsx
// import React from "react";
// import CustomInput from "../../components/customInput/CustomInput";

// const ContactDetails = ({ formData, handleInputChange, errors }) => (
//   <section className="">
//     <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
//     <div className="space-y-4">
//       <div className="md:flex md:gap-4">
//         <CustomInput
//           id="password"
//           type="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleInputChange}
//           error={errors.password}
//           label="Password"
//         />
//         <CustomInput
//           id="confirmPassword"
//           type="password"
//           placeholder="Confirm Password"
//           value={formData.confirmPassword}
//           onChange={handleInputChange}
//           error={errors.confirmPassword}
//           label="Confirm Password"
//         />
//       </div>
//       <div className="flex items-center">
//         <input
//           id="agreedToTerms"
//           type="checkbox"
//           checked={formData.agreedToTerms}
//           onChange={handleInputChange}
//           className="mr-2"
//         />
//         <label htmlFor="agreedToTerms" className="text-gray-600">
//           I agree to the{" "}
//           <a href="/terms-and-conditions" className="text-blue-600">
//             terms and conditions
//           </a>
//         </label>
//         <span className="text-red-600 block mt-1">{errors.terms}</span>
//       </div>
//     </div>
//   </section>
// );

// export default ContactDetails;

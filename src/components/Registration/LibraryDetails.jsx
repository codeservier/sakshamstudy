// // components/LibraryDetails.jsx
// import React from "react";

// const LibraryDetails = ({
//   courses,
//   slots,
//   formData,
//   handleCourseChange,
//   removeCourse,
//   handleSlotChange,
//   removeSlot,
//   courseError,
//   slotError,
// }) => (
//   <section className="mb-6">
//     <h2 className="text-xl font-semibold mb-4">Library Related Details</h2>
//     <div className="space-y-4 md:space-y-0 md:flex md:gap-4">
//       <div className="flex flex-col flex-1">
//         <label className="mb-1 font-semibold text-gray-400">Hall Name</label>
//         <select
//           id="course"
//           value={formData.course}
//           onChange={handleCourseChange}
//           className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#42c4e2]"
//         >
//           <option value="">Select Hall</option>
//           {courses.map((course, index) => (
//             <option key={index} value={course}>
//               {course}
//             </option>
//           ))}
//         </select>
//         <div className="mt-2 flex flex-wrap gap-4">
//           {formData.selectedHall.map((course, index) => (
//             <div
//               key={index}
//               className="flex items-center bg-[#42c4e2] text-white rounded-full py-1 px-4 border-b border-gray-200 mb-2"
//             >
//               <span className="mr-2">{course}</span>
//               <button
//                 type="button"
//                 onClick={() => removeCourse(course)}
//                 className="text-white text-xl"
//               >
//                 &#10005;
//               </button>
//             </div>
//           ))}
//           <span className="text-red-600">{courseError}</span>
//         </div>
//       </div>
//       <div className="flex flex-col flex-1">
//         <label className="mb-1 font-semibold text-gray-400">Select Chair</label>
//         <select
//           id="slot"
//           value={formData.slot}
//           onChange={handleSlotChange}
//           className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#42c4e2]"
//         >
//           <option value="">Number of Chairs</option>
//           {slots.map((slot, index) => (
//             <option key={index} value={slot}>
//               Chair - {slot}
//             </option>
//           ))}
//         </select>
//         <div className="mt-2 flex flex-wrap gap-4">
//           {formData.selectedSlots.map((slot, index) => (
//             <div
//               key={index}
//               className="flex justify-between items-center bg-[#42c4e2] text-white rounded-full px-4 py-2"
//             >
//               <span className="mr-2">Slot {slot}</span>
//               <button
//                 type="button"
//                 onClick={() => removeSlot(slot)}
//                 className="text-white text-xl"
//               >
//                 &#10005;
//               </button>
//             </div>
//           ))}
//           <span className="text-red-600">{slotError}</span>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default LibraryDetails;

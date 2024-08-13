// DroupdownMenujs
import React, { useState } from "react";

const categories = [
  {
    name: "Development",
    subcategories: [
      "Business",
      "Finance & Accounting",
      "IT & Software",
      "Office Productivity",
      "Personal Development",
      "Design",
      "Marketing",
      "Lifestyle",
      "Photography & Video",
      "Health & Fitness",
      "Music",
      "Teaching & Academics",
    ],
  },
  {
    name: "Web Development",
    subcategories: [
      "Data Science",
      "Mobile Development",
      "Programming Languages",
      "Game Development",
      "Database Design & Development",
      "Software Testing",
      "Software Engineering",
      "Software Development Tools",
      "No-Code Development",
    ],
  },
];

const popularTopics = [
  "JavaScript",
  "React JS",
  "Angular",
  "Next.js",
  "CSS",
  "HTML",
  "ASP.NET Core",
  "Node.Js",
];

const DroupdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="px-4 py-2 border rounded-md shadow-sm bg-white text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Categories
      </button>

      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border rounded-md shadow-lg flex z-10">
          <div className="w-1/3 p-4 border-r">
            {categories.map((category) => (
              <div key={category.name} className="mb-4">
                <h3 className="font-semibold text-primary">{category.name}</h3>
                <ul className="mt-2 space-y-1">
                  {category.subcategories.map((subcategory) => (
                    <li
                      key={subcategory}
                      className="text-gray-700 hover:underline cursor-pointer"
                    >
                      {subcategory}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="w-1/3 p-4">
            <h3 className="font-semibold text-primary">Popular topics</h3>
            <ul className="mt-2 space-y-1">
              {popularTopics.map((topic) => (
                <li
                  key={topic}
                  className="text-gray-700 hover:underline cursor-pointer"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DroupdownMenu;

// import React, { useState } from "react";
// import { FiAlignJustify, FiSearch } from "react-icons/fi";
// import logo from "../../assets/logo.png";

// const categories = [
//   {
//     name: "Development",
//     subcategories: [
//       "Business",
//       "Finance & Accounting",
//       "IT & Software",
//       "Office Productivity",
//       "Personal Development",
//       "Design",
//       "Marketing",
//       "Lifestyle",
//       "Photography & Video",
//       "Health & Fitness",
//       "Music",
//       "Teaching & Academics",
//     ],
//   },
//   {
//     name: "Web Development",
//     subcategories: [
//       "Data Science",
//       "Mobile Development",
//       "Programming Languages",
//       "Game Development",
//       "Database Design & Development",
//       "Software Testing",
//       "Software Engineering",
//       "Software Development Tools",
//       "No-Code Development",
//     ],
//   },
// ];

// const popularTopics = [
//   "JavaScript",
//   "React JS",
//   "Angular",
//   "Next.js",
//   "CSS",
//   "HTML",
//   "ASP.NET Core",
//   "Node.Js",
// ];

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="bg-white w-full top-0 fixed shadow-md px-6 py-3 text-black font-medium lg:px-14 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-lg font-bold h-[80px] w-[80px] rounded-[40px] border border-black">
//           <a href="/">
//             <img
//               src={logo}
//               alt="Logo"
//               className="bg-cover h-[80px] w-[80px] rounded-[40px] border border-black-700"
//             />
//           </a>
//         </div>

//         <nav className="hidden md:flex space-x-4 font-bold items-center">
//           <div className="relative group">
//             <a href="#" className="hover:text-gray-300">
//               Categories
//             </a>
//             <div className="absolute left-0 mt-2 w-full bg-white border rounded-md shadow-lg hidden group-hover:block z-10">
//               <div className="flex">
//                 <div className="  p-4 border-r">
//                   {categories.map((category) => (
//                     <div key={category.name} className="mb-4">
//                       <h3 className="font-semibold text-purple-700">
//                         {category.name}
//                       </h3>
//                       <ul className="mt-2 space-y-1">
//                         {category.subcategories.map((subcategory) => (
//                           <li
//                             key={subcategory}
//                             className="text-gray-700 hover:underline cursor-pointer"
//                           >
//                             {subcategory}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="  p-4">
//                   <h3 className="font-semibold text-purple-700">
//                     Popular topics
//                   </h3>
//                   <ul className="mt-2 space-y-1">
//                     {popularTopics.map((topic) => (
//                       <li
//                         key={topic}
//                         className="text-gray-700 hover:underline cursor-pointer"
//                       >
//                         {topic}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <a href="/" className="hover:text-gray-300">
//             Home
//           </a>
//           <a href="/mylearning" className="hover:text-gray-300">
//             My Learning
//           </a>
//           <a href="/about" className="hover:text-gray-300">
//             About
//           </a>
//           <a href="/contact-us" className="hover:text-gray-300">
//             Contact
//           </a>
//           <a href="/search" className="hover:text-gray-300">
//             <FiSearch className="w-6 h-6 cursor-pointer hover:text-gray-300" />
//           </a> */}
//         </nav>

//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//             <FiAlignJustify />
//           </button>
//         </div>

//         <div className="hidden md:block bg-[#F68B33] font-bold rounded-lg p-3 text-white">
//           <nav>
//             <a href="/login" className="hover:text-gray-300">
//               Login /
//             </a>
//             <a href="/register" className="hover:text-gray-300">
//               Registration
//             </a>
//           </nav>
//         </div>
//       </div>

//       {isOpen && (
//         <nav className="md:hidden bg-white shadow-md font-bold">
//           <a href="/" className="block px-4 py-2 hover:bg-gray-200">
//             Home
//           </a>
//           <a href="/mylearning" className="block px-4 py-2 hover:bg-gray-200">
//             My Learning
//           </a>
//           <a href="/about" className="block px-4 py-2 hover:bg-gray-200">
//             About
//           </a>
//           <a href="/contact-us" className="block px-4 py-2 hover:bg-gray-200">
//             Contact
//           </a>
//           <a href="/login" className="block px-4 py-2 hover:bg-gray-200">
//             Login
//           </a>
//           <a href="/register" className="block px-4 py-2 hover:bg-gray-200">
//             Registration
//           </a>
//           <a href="/search" className="block px-4 py-2 hover:bg-gray-200">
//             <FiSearch className="w-6 h-6 cursor-pointer hover:text-gray-300" />
//           </a>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;

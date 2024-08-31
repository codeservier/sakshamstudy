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


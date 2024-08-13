import React from "react";

const SearchPage = () => {
  const trendingSearches = [
    "Java programming",
    "Machine learning basics",
    "Python tutorials",
  ];
  const categories = [
    "Programming",
    "Web Development",
    "Data Science",
    "Design",
    "Design",
    "Web Development",
    "Programming",
    "Data Science",
  ];

  return (
    <div>
      <main className="container mx-auto mt-6 px-4">
        <section className="my-8 pt-6">
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Trending Searches</h2>
          <ul className="flex flex-wrap">
            {trendingSearches.map((search, index) => (
              <li
                key={index}
                className="bg-gray-100 px-3 py-1 my-2 mr-2 rounded-full"
              >
                {search}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <li key={index} className="bg-gray-100 px-3 py-1 rounded-md">
                <a
                  href={`/category/${category
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default SearchPage;

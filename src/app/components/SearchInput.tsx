import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from next/link

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Filter routes that have a title and match the query
  const filteredRoutes = routes.filter(
    (route) =>
      route.title && route.title.toLowerCase().includes(query.toLowerCase())
  );

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowResults(true); // Show results as the user types
  };

  return (
    <div className="mt-4 relative">
      <svg
        className="w-6 h-6 absolute left-3 top-2 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35m2.8-5.4a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0z"
        ></path>
      </svg>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className="px-10 py-2 rounded-md text-black w-full"
        onFocus={() => setShowResults(true)} // Show results on focus
        onBlur={() => setTimeout(() => setShowResults(false), 200)} // Delay closing to allow click
      />
      {query && showResults && (
        <div className="absolute bg-white w-full mt-2 rounded-md shadow-lg max-h-60 overflow-y-auto z-10 backdrop-blur-sm bg-opacity-80">
          {filteredRoutes.length > 0 ? (
            filteredRoutes.map((route, index) => (
              <Link key={index} href={route.path} passHref>
                <div
                  onMouseDown={() => setQuery('')} // Clear the search input
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer transition-colors mb-2 rounded-lg"
                >
                  {route.title}
                </div>
              </Link>
            ))
          ) : (
            <p className="px-4 py-2 text-gray-700">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;

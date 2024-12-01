
import React, { useState } from "react";
import { Range } from "react-range";
import { FaSearch } from "react-icons/fa"; // For search icon
import { IoIosArrowForward } from "react-icons/io"; // For category dropdown arrow
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // For pagination arrows
import { useNavigate } from "react-router-dom"; // For navigation

const AllProducts = () => {
  const navigate = useNavigate();
  const [categoriesExpanded, setCategoriesExpanded] = useState(true); // Expanded by default
  const [priceExpanded, setPriceExpanded] = useState(true); // Expanded by default
  const [categories] = useState([
    "Barfi",
    "Boondi",
    "Chikki",
    "Chivda",
    "Energy Bar",
    "Food",
    "Health Mix",
    "Ladoo",
    "Pre-Mixes",
    "Savoury",
    "Sweets",
    "Uncategorized",
  ]);
  const [priceRange, setPriceRange] = useState([40, 500]); // Initial range values
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Example total pages
  const [products] = useState([
    {
      id: 1,
      name: "9Grain Dosa",
      price: 199,
      image: "https://via.placeholder.com/150", // Replace with actual images
    },
    {
      id: 2,
      name: "Almond Millet Barfi",
      price: 199,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Boondi Blast",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Boondi Bliss",
      price: 300,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Energy Burst",
      price: 56,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Jowar Joy",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const navigateToProduct = (id) => {
    navigate(`/single-product/${id}`);
  };

  return (
    <div className="w-full md:w-5/6 mx-auto py-5 flex flex-col lg:flex-row gap-6">
      {/* Left Sidebar */}
      <div className="w-full lg:w-1/4 space-y-8">
        {/* Search Field */}
        <div className="relative flex items-center shadow-lg shadow-red-400 rounded-full px-3 py-3 bg-gradient-to-r from-gray-100 to-gray-200">
          <input
            type="text"
            placeholder="Search Here"
            className="ml-3 mr-3 w-full bg-transparent focus:outline-none placeholder:text-gray-500"
          />
          <button className="bg-red-500 text-white rounded-full p-2 shadow-lg">
            <FaSearch />
          </button>
        </div>

        {/* Product Categories */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setCategoriesExpanded(!categoriesExpanded)}
          >
            <p className="font-bold text-lg md:text-2xl">Product Categories</p>
            <IoIosArrowForward
              className={`text-lg transition-transform duration-500 ${
                categoriesExpanded ? "rotate-90" : "rotate-0"
              }`}
            />
          </div>
          <div
            className={`transition-all duration-700 ease-in-out overflow-hidden ${
              categoriesExpanded ? "max-h-[400px]" : "max-h-0"
            }`}
          >
            <ul className="mt-4 space-y-2 text-gray-600 ml-4">
              {categories.map((category, index) => (
                <li key={index} className="cursor-pointer hover:underline">
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setPriceExpanded(!priceExpanded)}
          >
            <p className="font-bold text-lg md:text-2xl">Choose Price</p>
            <IoIosArrowForward
              className={`text-lg transition-transform duration-500 ${
                priceExpanded ? "rotate-90" : "rotate-0"
              }`}
            />
          </div>
          <div
            className={`transition-all duration-700 ease-in-out overflow-hidden ${
              priceExpanded ? "max-h-[200px]" : "max-h-0"
            }`}
          >
            <div className="mt-4 px-4">
              <Range
                step={10}
                min={40}
                max={500}
                values={priceRange}
                onChange={(values) => setPriceRange(values)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-1 bg-gray-300 rounded-full relative"
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="w-4 h-4 bg-red-500 rounded-full shadow"
                  />
                )}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
              <button className="bg-black text-white px-4 py-2 rounded-full mt-4 w-full">
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-3/4">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          {/* Shop Heading */}
          <div>
            <p className="text-xl md:text-4xl font-bold">Shop</p>
            <p className="text-sm md:text-lg text-gray-800 mt-2 md:mt-3">
              Showing 1-9 of 14 results
            </p>
          </div>

          {/* Sorting Dropdown */}
          <div>
            <select className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full focus:outline-none">
              <option disabled selected>
                Default sorting
              </option>
              <option>Sort By Popularity</option>
              <option>Sort By Price</option>
              <option>Sort By Latest</option>
              <option>Sort By Price: Low to High</option>
              <option>Sort By Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg text-center group relative overflow-hidden"
            >
              {/* Product Image (Link to Single Product Page) */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 md:h-80 object-cover rounded-md mb-4 cursor-pointer"
                onClick={() => navigateToProduct(product.id)}
              />

              {/* Product Name */}
              <p className="text-sm md:text-lg font-semibold mb-4 transition-all duration-300 group-hover:text-red-500 group-hover:tracking-wide">
                {product.name}
              </p>

              {/* Add to Cart and Price */}
              <div className="relative mt-5">
                <div className="absolute left-[-40%] bottom-0 flex justify-between items-center transition-all duration-700 group-hover:left-0 w-full">
                  <button
                    className="bg-red-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-full"
                    onClick={(e) => e.stopPropagation()} // Prevent navigation on button click
                  >
                    Add to Cart
                  </button>
                  <p className="text-gray-900 text-sm md:text-lg font-bold">
                    ₹{product.price}.00
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-full ${
              currentPage === 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-black hover:text-red-500"
            }`}
          >
            <FaArrowLeft />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-full text-sm md:text-lg ${
                    currentPage === page
                      ? "bg-red-500 text-white"
                      : "text-black hover:bg-gray-200"
                  }`}
                >
                  {page}
                </button>
              )
            )}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded-full ${
              currentPage === totalPages
                ? "text-gray-300 cursor-not-allowed"
                : "text-black hover:text-red-500"
            }`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

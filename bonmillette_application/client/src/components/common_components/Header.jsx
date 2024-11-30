import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiMenuFries } from "react-icons/ci";

import logo from "../../assets/logo/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Hamburger menu state
  const [isMenuClosing, setIsMenuClosing] = useState(false); // Tracks close animation
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Search modal state
  const [isSearchClosing, setIsSearchClosing] = useState(false); // Tracks close animation for search
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuClosing(true); // Trigger close animation
      setTimeout(() => {
        setIsMenuOpen(false); // Close menu after animation
        setIsMenuClosing(false); // Reset closing state
      }, 300); // Match animation duration
    } else {
      setIsMenuOpen(true); // Open menu
    }
  };

  const openSearchModal = () => {
    setIsSearchOpen(true);
    setIsSearchClosing(false); // Reset close animation
  };

  const closeSearchModal = () => {
    setIsSearchClosing(true); // Trigger close animation
    setTimeout(() => {
      setIsSearchOpen(false); // Close modal after animation
    }, 300); // Match animation duration
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") return;

    const blogs = [
      "React Basics",
      "Advanced JavaScript",
      "CSS Tricks",
      "Web Development Tips",
    ]; // Replace with real blog data or fetch from an API.

    const match = blogs.find((blog) =>
      blog.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (match) {
      window.location.href = `/blogs/${match.toLowerCase().replace(/ /g, "-")}`;
    } else {
      window.location.href = "/page-not-found";
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between p-4 sm:w-full lg:w-5/6 mx-auto">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-20" />
        </a>

        {/* Center Links (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-10">
          <li>
            <a href="/home" className="text-black font-bold text-lg">
              Home
            </a>
          </li>
          <li>
            <a href="/shop" className="text-black font-bold text-lg">
              Shop
            </a>
          </li>
          <li>
            <a href="/about-us" className="text-black font-bold text-lg">
              About us
            </a>
          </li>
          <li>
            <a href="/our-story" className="text-black font-bold text-lg">
              Our Story
            </a>
          </li>
          <li>
            <a href="/all-blogs" className="text-black font-bold text-lg">
              Blog
            </a>
          </li>
          <li>
            <a href="/testimonials" className="text-black font-bold text-lg">
              Testimonials
            </a>
          </li>
          <li>
            <a href="/contact-us" className="text-black font-bold text-lg">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* My Account Link */}
          <a
            href="/my-account"
            className="hidden md:flex text-black font-bold text-lg"
          >
            My Account
          </a>
          <button className="text-black" onClick={openSearchModal}>
            <AiOutlineSearch size={20} />
          </button>
          <div className="relative">
            <button className="text-black">
              <HiOutlineShoppingBag size={24} />
            </button>
            {/* Cart Badge */}
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-2">
              0
            </span>
          </div>
          {/* Hamburger Menu (Visible on Mobile) */}
          <button className="text-black md:hidden" onClick={toggleMenu}>
            <CiMenuFries size={24} />
          </button>
        </div>
      </nav>

      {/* Hamburger Menu */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-50 ${
            isMenuClosing ? "animate-fade-out" : "animate-fade-in"
          }`}
        >
          <div
            className={`fixed inset-0 bg-white h-full ${
              isMenuClosing ? "animate-fade-out" : "animate-fade-in"
            }`}
          >
            <div className="flex flex-col justify-between h-full p-6">
              <button
                className={`text-black self-end ${
                  isMenuClosing ? "animate-fade-out" : "animate-fade-in"
                }`}
                onClick={toggleMenu}
                aria-label="Close Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <circle cx="12" cy="12" r="11" strokeWidth="0.8" />
                  <line x1="8" y1="8" x2="16" y2="16" />
                  <line x1="16" y1="8" x2="8" y2="16" />
                </svg>
              </button>

              <ul className="flex flex-col items-center justify-evenly h-full">
                <li className="animate-fade-in">Home</li>
                <li className="animate-fade-in">Shop</li>
                <li className="animate-fade-in">About Us</li>
                <li className="animate-fade-in">Our Story</li>
                <li className="animate-fade-in">Blog</li>
                <li className="animate-fade-in">Testimonials</li>
                <li className="animate-fade-in">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div
          className={`fixed inset-0 z-50 bg-gray-50 bg-opacity-95 flex items-center justify-center ${
            isSearchClosing ? "animate-fade-out" : "animate-fade-in"
          }`}
        >
          {/* Close Button */}
          <button
            className={`absolute bg-white rounded-full border-2 border-gray-500 w-10 h-10 flex items-center justify-center text-lg font-semibold text-gray-500 ${
              isSearchClosing
                ? "animate-close-button-out"
                : "animate-close-button-in"
            } top-5 left-1/2 transform -translate-x-1/2 sm:top-5 sm:right-5 sm:left-auto sm:translate-x-0`}
            onClick={closeSearchModal}
            aria-label="Close Search Modal"
          >
            X
          </button>

          {/* Search Input */}
          <div
            className={`relative w-4/5 max-w-2xl ${
              isSearchClosing
                ? "animate-search-field-out"
                : "animate-search-field-in"
            }`}
          >
            <input
              type="text"
              className="w-full text-2xl font-semibold text-gray-600 pb-2 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-gray-600 placeholder-gray-400"
              placeholder="Search ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <AiOutlineSearch
              size={32}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              onClick={handleSearch}
            />
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-out {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        @keyframes close-button-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes close-button-out {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }
        @keyframes search-field-in {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes search-field-out {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100%);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-in-out;
        }
        .animate-fade-out {
          animation: fade-out 0.3s ease-in-out;
        }
        .animate-close-button-in {
          animation: close-button-in 0.3s ease-in-out;
        }
        .animate-close-button-out {
          animation: close-button-out 0.3s ease-in-out;
        }
        .animate-search-field-in {
          animation: search-field-in 0.3s ease-in-out;
        }
        .animate-search-field-out {
          animation: search-field-out 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Header;

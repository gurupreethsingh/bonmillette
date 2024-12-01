
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiMenuFries } from "react-icons/ci";

import logo from "../../assets/logo/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchClosing, setIsSearchClosing] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const cartItems = [
    {
      id: 1,
      name: "9Grain Dosa",
      price: 199,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsMenuClosing(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  const openSearchModal = () => {
    setIsSearchOpen(true);
    setIsSearchClosing(false);
  };

  const closeSearchModal = () => {
    setIsSearchClosing(true);
    setTimeout(() => {
      setIsSearchOpen(false);
    }, 300);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") return;

    const blogs = [
      "React Basics",
      "Advanced JavaScript",
      "CSS Tricks",
      "Web Development Tips",
    ];

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
      <nav className="flex items-center justify-between p-4 sm:w-full lg:w-5/6 mx-auto relative z-[2000]">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-20" />
        </a>

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
              About Us
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

        <div className="flex items-center space-x-6">
          <a href="/my-account" className="hidden md:flex text-black font-bold text-lg">
            My Account
          </a>
          <button className="text-black" onClick={openSearchModal}>
            <AiOutlineSearch size={20} />
          </button>

          <div
            className="relative"
            onMouseEnter={() => setIsCartOpen(true)}
            onMouseLeave={() => setIsCartOpen(false)}
          >
            <button className="text-black">
              <HiOutlineShoppingBag size={24} />
            </button>
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-2">
              {cartItems.length}
            </span>
            {isCartOpen && (
              <div
                className="absolute right-[-10px] mt-[-10px] w-80 bg-white shadow-lg rounded-lg p-4 animate-fade-in z-[2001]"
                style={{ top: "90%" }}
              >
                {cartItems.length > 0 ? (
                  <>
                    <div className="flex flex-col gap-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1 ml-4">
                            <p className="text-sm font-bold">{item.name}</p>
                            <p className="text-sm">{item.quantity} × ₹{item.price}</p>
                          </div>
                          <button className="text-gray-400 hover:text-gray-600">×</button>
                        </div>
                      ))}
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between items-center">
                      <p className="font-bold">Sub Total</p>
                      <p className="font-bold">₹{totalPrice}</p>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <a
                        href="/cart"
                        className="px-4 py-2 border border-black rounded-md text-sm font-bold hover:bg-gray-100"
                      >
                        View Cart
                      </a>
                      <a
                        href="/checkout"
                        className="px-4 py-2 bg-black text-white rounded-md text-sm font-bold hover:bg-gray-900"
                      >
                        Proceed to Checkout
                      </a>
                    </div>
                  </>
                ) : (
                  <p className="text-center text-sm text-gray-500">Your cart is empty.</p>
                )}
              </div>
            )}
          </div>

          <button className="text-black md:hidden" onClick={toggleMenu}>
            <CiMenuFries size={24} />
          </button>
        </div>
      </nav>

      {/* Hamburger Menu */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 z-[2000] bg-gray-800 bg-opacity-50 ${
            isMenuClosing ? "animate-fade-out" : "animate-fade-in"
          }`}
        >
          <div className="fixed inset-0 bg-white h-full z-[2000]">
            <div className="flex flex-col justify-between h-full p-6">
              <button className="text-black self-end" onClick={toggleMenu}>
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
                <li><a href="/home" className="animate-fade-in">Home</a></li>
                <li><a href="/shop" className="animate-fade-in">Shop</a></li>
                <li><a href="/about-us" className="animate-fade-in">About Us</a></li>
                <li><a href="/our-story" className="animate-fade-in">Our Story</a></li>
                <li><a href="/all-blogs" className="animate-fade-in">Blog</a></li>
                <li><a href="/testimonials" className="animate-fade-in">Testimonials</a></li>
                <li><a href="/contact-us" className="animate-fade-in">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {isSearchOpen && (
        <div
          className={`fixed inset-0 z-[2000] bg-gray-50 bg-opacity-95 flex items-center justify-center ${
            isSearchClosing ? "animate-fade-out" : "animate-fade-in"
          }`}
        >
          <button
            className="absolute bg-white rounded-full border-2 border-gray-500 w-10 h-10 flex items-center justify-center text-lg font-semibold text-gray-500 top-5 left-1/2 transform -translate-x-1/2 sm:top-5 sm:right-5 sm:left-auto sm:translate-x-0"
            onClick={closeSearchModal}
          >
            X
          </button>
          <div className="relative w-4/5 max-w-2xl">
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
      `}</style>
    </>
  );
};

export default Header;

// import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";
// import { AiOutlineSearch } from "react-icons/ai";
// import { HiOutlineShoppingBag } from "react-icons/hi";
// import { TiDeleteOutline } from "react-icons/ti";

// import logo from "../../assets/logo/logo.png";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleCanvas = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <nav className="flex items-center justify-around p-4 border">
//         {/* Logo */}
//         <a href="/" className="flex items-center">
//           <img src={logo} alt="Logo" className="w-20 h-20" />
//         </a>

//         {/* Center Links (Hidden on Mobile) */}
//         <ul className="hidden md:flex space-x-10">
//           <li>
//             <a href="/home" className="text-black font-bold text-lg">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="/shop" className="text-black font-bold text-lg">
//               Shop
//             </a>
//           </li>
//           <li>
//             <a href="/about-us" className="text-black font-bold text-lg">
//               About us
//             </a>
//           </li>
//           <li>
//             <a href="/our-story" className="text-black font-bold text-lg">
//               Our Story
//             </a>
//           </li>
//           <li>
//             <a href="/all-blogs" className="text-black font-bold text-lg">
//               Blog
//             </a>
//           </li>
//           <li>
//             <a href="/testimonials" className="text-black font-bold text-lg">
//               Testimonials
//             </a>
//           </li>
//           <li>
//             <a href="/contact-us" className="text-black font-bold text-lg">
//               Contact Us
//             </a>
//           </li>
//         </ul>

//         {/* Right Section */}
//         <div className="flex items-center space-x-6">
//           <a href="#" className="hidden md:block text-black font-bold text-lg">
//             My Account
//           </a>
//           <button className="text-black">
//             <AiOutlineSearch size={20} />
//           </button>
//           <div className="relative">
//             <button className="text-black">
//               <HiOutlineShoppingBag size={24} />
//             </button>
//             {/* Cart Badge */}
//             <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-2">
//               0
//             </span>
//           </div>
//           {/* Hamburger Menu (Visible on Mobile) */}
//           <button className="text-black md:hidden" onClick={toggleCanvas}>
//             <FaBars size={24} />
//           </button>
//         </div>
//       </nav>

//       {/* Offcanvas Menu */}
//       {isOpen && (
//         <div
//           className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out ${
//             isOpen ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <div
//             className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg pt-5 transform transition-transform duration-300 ease-in-out ${
//               isOpen ? "translate-x-0" : "translate-x-full"
//             }`}
//           >
//             {/* Close Button */}
//             <div className="flex justify-center">
//               <button className="text-black p-4" onClick={toggleCanvas}>
//                 <TiDeleteOutline size={42} />
//               </button>
//             </div>

//             {/* Links */}
//             <ul className="flex flex-col items-center justify-between h-full p-6">
//               <li>
//                 <a
//                   href="/home"
//                   className="text-black text-3xl md:text-2xl font-bold"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/shop"
//                   className="text-black text-3xl md:text-2xl font-bold"
//                 >
//                   Shop
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/our-story"
//                   className="text-black text-3xl md:text-2xl font-bold"
//                 >
//                   Our Story
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/all-blogs"
//                   className="text-black text-3xl md:text-2xl font-bold"
//                 >
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/testimonials"
//                   className="text-black text-3xl md:text-2xl font-bold"
//                 >
//                   Testimonials
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="/contact-us"
//                   className="text-black text-3xl md:text-2xl font-bold"
//                 >
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

//
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";

import logo from "../../assets/logo/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-around p-4 border">
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
          <a href="#" className="hidden md:block text-black font-bold text-lg">
            My Account
          </a>
          <button className="text-black">
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
          <button className="text-black md:hidden" onClick={toggleCanvas}>
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      {/* Full-Screen Canvas with Faded Animation */}
      <div
        className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="fixed inset-0 bg-white h-full">
          {/* Canvas Container */}
          <div className="flex flex-col justify-between h-full p-6">
            {/* Close Button */}
            <div className="flex justify-center">
              <button
                className="text-black"
                onClick={toggleCanvas}
                aria-label="Close Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
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
            </div>

            {/* Links */}
            <ul className="flex flex-col items-center justify-evenly h-full">
              <li>
                <a
                  href="/home"
                  className="text-black text-3xl md:text-2xl font-bold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="text-black text-3xl md:text-2xl font-bold"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="text-black text-3xl md:text-2xl font-bold"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/our-story"
                  className="text-black text-3xl md:text-2xl font-bold"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="/all-blogs"
                  className="text-black text-3xl md:text-2xl font-bold"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/testimonials"
                  className="text-black text-3xl md:text-2xl font-bold"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-black text-3xl md:text-2xl font-bold"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

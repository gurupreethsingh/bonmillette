import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import logo_white from "../../assets/homepage_images/Bon_millette_logo_white.png";
import p1 from "../../assets/homepage_images/p1.jpg";
import brown_wood from "../../assets/our_story_images/brown_wood.jpg";
import festival_banner from "../../assets/homepage_images/festival_banner.jpg";

const images = [p1, brown_wood, p1, brown_wood, p1]; // Array of images

const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleItemsCount = isMobile ? 1 : 3;
  const totalItems = images.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < visibleItemsCount; i++) {
      visible.push(images[(currentIndex + i) % totalItems]);
    }
    return visible;
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Continuous Fader Carousel with Fixed Logo and Text */}
      <div id="carouselExampleFade" className="relative h-[500px] md:h-[900px]">
        <div className="relative h-full">
          <img
            src={p1}
            className="d-block w-full h-full object-cover"
            alt="Slide"
          />
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        </div>
        {/* Logo and Text Centered */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
          <img
            src={logo_white}
            alt="Bon Millette Logo"
            className="w-2/3 md:w-1/3"
          />
          <p className="text-white text-xl md:text-4xl font-semibold mt-4 text-center px-4">
            Snack Smart, Live Healthy!
          </p>
        </div>
      </div>

      {/* Top Sellers Carousel */}
      <div className="top_sellers relative py-10">
        <div className="mx-auto w-4/5 lg:px-10">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
            Top Sellers
            <hr className="w-24 mx-auto mt-2 text-green-900" />
          </h2>

          <div className="relative flex items-center">
            {/* Left Icon */}
            {totalItems > visibleItemsCount && !isMobile && (
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-5 text-orange-600 hover:text-orange-800 z-10"
              >
                <FaChevronLeft size={30} />
              </button>
            )}

            {/* Carousel Content */}
            <div className="flex overflow-hidden justify-center gap-4 w-full">
              {getVisibleImages().map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Right Icon */}
            {totalItems > visibleItemsCount && !isMobile && (
              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-5 text-orange-600 hover:text-orange-800 z-10"
              >
                <FaChevronRight size={30} />
              </button>
            )}
          </div>

          {/* Indicators */}
          {totalItems > visibleItemsCount && (
            <div className="flex justify-center mt-5 space-x-2">
              {Array.from({ length: totalItems }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    Math.floor(currentIndex) === index
                      ? "bg-gray-800"
                      : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto w-4/5 h-  bg-orange-300 p-20 rounded-5 flex justify-center items-center h-[300px] md:h-[600px] mb-5 shadow-red-400 hover:shadow-red-700">
        <div className="left_side w-50 border">
          <img src={festival_banner} alt="Bon Millette Logo" className="" />
        </div>

        <div className="right_side w-50 p-5">
          <p className="text-white font-bold text-xl">Limited time offer</p>
          <p className="text-white font-bold text-5xl">Festive Specials</p>
          <div className="mt-4">
            <a
              href="/shop"
              className="rounded-pill bg-white ps-5 pe-5 pt-2 pb-2 text-orange-400 font-semibold"
            >
              Shop
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

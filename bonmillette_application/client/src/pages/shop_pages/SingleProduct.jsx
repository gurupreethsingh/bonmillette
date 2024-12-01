
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SingleProduct = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("reviews");

//   const [products] = useState([
//     {
//       id: 1,
//       name: "9Grain Dosa",
//       price: 199,
//       image: "https://via.placeholder.com/150", // Replace with actual images
//     },
//     {
//       id: 2,
//       name: "Almond Millet Barfi",
//       price: 199,
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 3,
//       name: "Boondi Blast",
//       price: 100,
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 4,
//       name: "Boondi Bliss",
//       price: 300,
//       image: "https://via.placeholder.com/150",
//     },

//   ]);


//   const navigateToProduct = (id) => {
//     navigate(`/single-product/${id}`);
//   };

//   return (
//     <div>
//       {/* Product Details Section */}
//       <div className="w-full md:w-5/6 mx-auto py-5 flex flex-col lg:flex-row gap-6">
//         <div className="single_product_container flex w-full">
//           <div className="image_section w-1/2 flex justify-center items-center">
//             <img
//               src="https://via.placeholder.com/500"
//               alt="9Grain Dosa"
//               className="w-full h-auto rounded-3xl"
//             />
//           </div>
//           <div className="price_details w-1/2 h-full">
//             <p className="text-center mt-5 mb-5 font-bold text-5xl">
//               9Grain Dosa
//             </p>
//             <p className="text-center font-bold text-3xl mt-5">₹199.00</p>
//             <div className="flex justify-evenly items-center w-1/2 mx-auto mt-5 mb-5">
//               <input
//                 type="number"
//                 min="1"
//                 max="1000"
//                 defaultValue="1"
//                 className="border rounded-full px-4 py-2"
//               />
//               <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-gray-900">
//                 Add To Cart
//               </button>
//             </div>
//             <p className="text-center">
//               Category: <span className="text-red-500">Pre-Mixes</span>
//             </p>
//           </div>
//         </div>
//       </div>

//       <hr className="text-gray-900 w-5/6 mx-auto mt-5 mb-5" />

//       {/* Tabs */}
//       <div className="w-full md:w-5/6 mx-auto">
//         <div className="flex justify-center space-x-10 mb-5">
//           <button
//             className={`px-6 py-2 font-bold ${
//               activeTab === "reviews"
//                 ? "border-b-2 border-red-500 text-red-500"
//                 : "text-gray-500"
//             }`}
//             onClick={() => setActiveTab("reviews")}
//           >
//             Reviews
//           </button>
//           <button
//             className={`px-6 py-2 font-bold ${
//               activeTab === "details"
//                 ? "border-b-2 border-red-500 text-red-500"
//                 : "text-gray-500"
//             }`}
//             onClick={() => setActiveTab("details")}
//           >
//             Product Details
//           </button>
//         </div>

//         {/* Reviews Section */}
//         {activeTab === "reviews" && (
//           <div className="text-center mb-5">
//             <p className="text-2xl font-bold mb-5">Reviews</p>
//             <p className="text-gray-500 mb-5">There are no reviews yet.</p>
//             <p className="font-bold">Be the first to review “9Grain Dosa”</p>
//             <form className="w-2/3 mx-auto mt-5">
//               <textarea
//                 className="w-full p-4 rounded-lg border border-gray-300 bg-gray-100"
//                 rows="4"
//                 placeholder="Your review *"
//               ></textarea>
//               <button
//                 type="submit"
//                 className="mt-5 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-gray-900"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         )}

//         {/* Product Details Section */}
//         {activeTab === "details" && (
//           <div className="text-center mb-5">
//             <p className="text-2xl font-bold mb-5">Product Details</p>
//             <p className="text-gray-500">
//               This is a 9Grain Dosa pre-mix that is healthy and easy to prepare.
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Related Products Section */}
//       <div className="w-full md:w-5/6 mx-auto py-5">
//         <p className="text-center text-5xl font-bold mt-3 mb-5">Related Products</p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="rounded-lg text-center group relative overflow-hidden"
//             >
//               {/* Product Image (Link to Single Product Page) */}
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-64 md:h-80 object-cover rounded-md mb-4 cursor-pointer"
//                 onClick={() => navigateToProduct(product.id)}
//               />

//               {/* Product Name */}
//               <p className="text-sm md:text-lg font-semibold mb-4 transition-all duration-300 group-hover:text-red-500 group-hover:tracking-wide">
//                 {product.name}
//               </p>

//               {/* Add to Cart and Price */}
//               <div className="relative mt-5">
//                 <div className="absolute left-[-40%] bottom-0 flex justify-between items-center transition-all duration-700 group-hover:left-0 w-full">
//                   <button
//                     className="bg-red-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-full"
//                     onClick={(e) => e.stopPropagation()} // Prevent navigation on button click
//                   >
//                     Add to Cart
//                   </button>
//                   <p className="text-gray-900 text-sm md:text-lg font-bold">
//                     ₹{product.price}.00
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
       
//     </div>
//   );
// };

// export default SingleProduct;


//


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("reviews");

  const [products] = useState([
    {
      id: 1,
      name: "9Grain Dosa",
      price: 199,
      image: "https://via.placeholder.com/150",
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
  ]);

  const navigateToProduct = (id) => {
    navigate(`/single-product/${id}`);
  };

  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* Product Details Section */}
      <div className="w-full md:w-5/6 mx-auto py-5 flex flex-col lg:flex-row gap-6">
        <div className="single_product_container flex w-full flex-col lg:flex-row">
          <div className="image_section w-full lg:w-1/2 flex justify-center items-center">
            <img
              src="https://via.placeholder.com/500"
              alt="9Grain Dosa"
              className="w-full h-auto rounded-3xl"
            />
          </div>
          <div className="price_details w-full lg:w-1/2 h-full">
            <p className="text-center mt-5 mb-5 font-bold text-4xl md:text-5xl">
              9Grain Dosa
            </p>
            <p className="text-center font-bold text-2xl md:text-3xl mt-5">
              ₹199.00
            </p>
            <div className="flex justify-evenly items-center w-full lg:w-1/2 mx-auto mt-5 mb-5">
              <input
                type="number"
                min="1"
                max="1000"
                defaultValue="1"
                className="border rounded-full px-4 py-2 w-1/3 text-center"
              />
              <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-gray-900">
                Add To Cart
              </button>
            </div>
            <p className="text-center text-lg md:text-xl">
              Category: <span className="text-red-500">Pre-Mixes</span>
            </p>
          </div>
        </div>
      </div>

      <hr className="text-gray-900 w-full md:w-5/6 mx-auto mt-5 mb-5" />

      {/* Tabs */}
      <div className="w-full md:w-5/6 mx-auto">
        <div className="flex justify-center space-x-5 md:space-x-10 mb-5">
          <button
            className={`px-4 md:px-6 py-2 font-bold text-sm md:text-base ${
              activeTab === "reviews"
                ? "border-b-2 border-red-500 text-red-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
          <button
            className={`px-4 md:px-6 py-2 font-bold text-sm md:text-base ${
              activeTab === "details"
                ? "border-b-2 border-red-500 text-red-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("details")}
          >
            Product Details
          </button>
        </div>

        {/* Reviews Section */}
        {activeTab === "reviews" && (
          <div className="text-center mb-5">
            <p className="text-xl md:text-2xl font-bold mb-5">Reviews</p>
            <p className="text-gray-500 mb-5 text-sm md:text-base">
              There are no reviews yet.
            </p>
            <p className="font-bold text-sm md:text-base">
              Be the first to review “9Grain Dosa”
            </p>
            <form className="w-full md:w-2/3 mx-auto mt-5">
              <textarea
                className="w-full p-4 rounded-lg border border-gray-300 bg-gray-100"
                rows="4"
                placeholder="Your review *"
              ></textarea>
              <button
                type="submit"
                className="mt-5 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-gray-900"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        {/* Product Details Section */}
        {activeTab === "details" && (
          <div className="text-center mb-5">
            <p className="text-xl md:text-2xl font-bold mb-5">Product Details</p>
            <p className="text-gray-500 text-sm md:text-base">
              This is a 9Grain Dosa pre-mix that is healthy and easy to prepare.
            </p>
          </div>
        )}
      </div>

      {/* Related Products Section */}
      <div className="w-full md:w-5/6 mx-auto py-5">
        <p className="text-center text-3xl md:text-5xl font-bold mt-3 mb-5">
          Related Products
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg text-center group relative overflow-hidden "
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
      </div>
    </div>
  );
};

export default SingleProduct;

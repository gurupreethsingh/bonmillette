import React from "react";

const Cart = () => {
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

  return (
    <div className="container mx-auto p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

      {/* Cart Items Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 text-left bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="p-4 border-b border-gray-200">Remove</th>
              <th className="p-4 border-b border-gray-200">Product</th>
              <th className="p-4 border-b border-gray-200">Price</th>
              <th className="p-4 border-b border-gray-200">Quantity</th>
              <th className="p-4 border-b border-gray-200">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="p-4">
                  <button className="text-red-500 font-bold text-lg">×</button>
                </td>
                <td className="p-4 flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <a
                    href={`/product/${item.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {item.name}
                  </a>
                </td>
                <td className="p-4">₹{item.price}</td>
                <td className="p-4">
                  <input
                    type="number"
                    value={item.quantity}
                    className="w-16 border border-gray-300 rounded px-2 py-1 text-center"
                    min="1"
                  />
                </td>
                <td className="p-4">₹{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cart Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Coupon code"
            className="w-48 border border-gray-300 rounded px-4 py-2"
          />
          <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
            Apply Coupon
          </button>
        </div>
        <button className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-200">
          Update Cart
        </button>
      </div>

      {/* Cart Totals */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6 mb-5">
        <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
          <p>Subtotal</p>
          <p>₹{totalPrice}</p>
        </div>
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
          <p>Shipping</p>
          <div>
          <p>Free Shipping</p>
          <p>Shipping to Test, Test, Test 560090, Karnataka.</p>
          <a href="#" className="text-red-500 font-bold">Change Shipping Address</a>
          </div>
         
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="font-bold">Total</p>
          <p className="font-bold text-xl">₹{totalPrice}</p>
        </div>
        <button className="w-full mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg text-lg hover:bg-purple-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

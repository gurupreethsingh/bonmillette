import React, { useState } from "react";

const Checkout = () => {
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  const toggleCouponSection = () => {
    setIsCouponOpen(!isCouponOpen);
  };

  const toggleShippingSection = () => {
    setIsShippingOpen(!isShippingOpen);
  };

  return (
    <div className="container mx-auto p-4 sm:p-8">
      {/* Coupon Section */}
      <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-4 mb-6">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleCouponSection}
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
              readOnly
              checked={isCouponOpen}
            />
            <p className="ml-2 text-lg font-medium text-gray-700">
              Have a coupon?{" "}
              <button
                className="text-blue-500 underline focus:outline-none"
                onClick={toggleCouponSection}
              >
                Click here to enter your code
              </button>
            </p>
          </div>
          <span
            className={`text-gray-500 transform transition-transform ${
              isCouponOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>
        <div
          className={`transition-all overflow-hidden duration-700 ease-in-out ${
            isCouponOpen ? "max-h-screen mt-4" : "max-h-0"
          }`}
        >
          <p className="text-sm text-gray-600 mb-4">
            If you have a coupon code, please apply it below.
          </p>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Coupon code"
              className="w-full sm:w-2/3 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Apply Coupon
            </button>
          </div>
        </div>
      </div>

      {/* Billing and Shipping Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div className="bg-white p-6 rounded-lg ">
          <h2 className="text-xl font-bold mb-4">Billing details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="First name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Last name"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Country / Region <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>India</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Street address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full mb-2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="House number and street name"
              />
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Apartment, suite, unit, etc. (optional)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Town / City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Town / City"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                State <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Karnataka</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                PIN Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="PIN Code"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Phone"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email address"
              />
            </div>
          </div>
        </div>

        {/* Shipping Details */}
        <div className="bg-white p-6 rounded-lg ">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="shipToDifferentAddress"
              className="form-checkbox h-5 w-5 text-blue-500"
              onChange={toggleShippingSection}
            />
            <label
              htmlFor="shipToDifferentAddress"
              className="ml-2 text-lg font-medium text-gray-700"
            >
              Ship to a different address?
            </label>
          </div>
          <div
            className={`transition-all overflow-hidden duration-700 ease-in-out ${
              isShippingOpen ? "max-h-screen mt-4" : "max-h-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Last name"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Country / Region <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>India</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Street address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full mb-2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="House number and street name"
                />
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Town / City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Town / City"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Karnataka</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  PIN Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="PIN Code"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Phone"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Order notes (optional)
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  rows="3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="border border-gray-300 rounded-lg shadow-md p-4 mb-6 bg-white">
        <h2 className="text-lg font-bold mb-4">Your order</h2>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Product</th>
              <th className="border border-gray-300 px-4 py-2 text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">9Grain Dosa × 1</td>
              <td className="border border-gray-300 px-4 py-2 text-right">₹199.00</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">Subtotal</td>
              <td className="border border-gray-300 px-4 py-2 text-right">₹199.00</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">Shipping</td>
              <td className="border border-gray-300 px-4 py-2 text-right">Free shipping</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">Total</td>
              <td className="border border-gray-300 px-4 py-2 text-right font-bold">₹199.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Payment Options */}
      <div className="bg-purple-100 border border-gray-300 rounded-lg shadow-md p-4">
        <h2 className="text-lg font-bold mb-4">Payment Options</h2>
        <div className="space-y-4">
          {/* UPI Payment */}
          <div className="p-4 bg-purple-200 rounded-lg">
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio h-5 w-5 text-purple-500" defaultChecked />
              <span className="font-bold">Pay with UPI QR Code</span>
            </label>
            <p className="text-sm text-gray-600 mt-2">
              It uses UPI apps like BHIM, Paytm, Google Pay, PhonePe or any Banking UPI app to make payment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  UPI Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. mobilenumber"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Bank</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>-- Select --</option>
                  <option>State Bank of India</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                </select>
              </div>
            </div>
          </div>

          {/* Razorpay */}
          <div className="p-4 bg-purple-200 rounded-lg">
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio h-5 w-5 text-purple-500" />
              <span className="font-bold">Credit Card/Debit Card/NetBanking</span>
            </label>
            <div className="mt-2">
              <img src="https://via.placeholder.com/150x50?text=Pay+by+Razorpay" alt="Razorpay" />
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{" "}
            <a href="/privacy-policy" className="text-blue-500 underline">
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>

      {/* Proceed to Payment */}
      <div className="mt-6 text-right">
        <button className="px-6 py-3 bg-purple-500 text-white rounded-lg font-bold hover:bg-purple-600 transition">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;

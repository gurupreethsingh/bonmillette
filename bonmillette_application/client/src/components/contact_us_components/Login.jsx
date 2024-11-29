import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full border-gray-300 rounded-lg p-6">
        <h2 className="text-3xl font-bold text-gray-700 mb-6 ">Login</h2>
        <form
          action="#"
          method="POST"
          className="space-y-6 border rounded  p-5"
        >
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-600 pb-3"
            >
              Username or Email address{" "}
              <span className="text-red-500 text-base">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-md bg-white px-4 py-2 text-lg text-gray-600 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-600 mb-3"
            >
              Password <span className="text-red-500 text-base">*</span>
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                autoComplete="current-password"
                className="w-full rounded-md bg-white px-4 py-2 text-lg text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={24} />
                ) : (
                  <AiOutlineEye size={24} />
                )}
              </div>
            </div>
          </div>

          {/* Submit Button and Checkbox */}
          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="rounded-md bg-gray-200 px-6 py-2 text-lg font-bold shadow-sm hover:bg-red-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 text-gray-600"
            >
              Log in
            </button>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="w-5 h-5 border-gray-300 rounded focus:ring-indigo-600"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-lg text-gray-600"
              >
                Remember Me
              </label>
            </div>
          </div>
        </form>

        {/* Forgot Password Link */}
        <p className="mt-6 text-left text-lg text-gray-500">
          <a
            href="#"
            className="font-semibold text-blue-500 hover:text-indigo-500"
          >
            Lost your password?
          </a>
        </p>
      </div>
    </div>
  );
}

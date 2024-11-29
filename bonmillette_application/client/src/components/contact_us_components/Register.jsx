export default function Register() {
  return (
    <div className="flex flex-col items-center w-full ">
      <div className="w-full  rounded-lg p-6">
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-start">
          Register
        </h2>
        <form action="#" method="POST" className="space-y-6 border rounded p-5">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-600 pb-3"
            >
              Email address <span className="text-red-500 text-base">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-md bg-white px-4 py-2 text-lg text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
            <p className="text-gray-600 text-md mt-2">
              A link to set a new password will be sent to your email address.
            </p>
          </div>

          {/* Privacy Notice */}
          <div>
            <p className="text-gray-700 text-md pt-2">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="rounded-md bg-gray-200 px-6 py-2 text-lg font-bold text-gray-600 shadow-sm hover:bg-red-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

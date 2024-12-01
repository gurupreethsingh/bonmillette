import React from "react";
import Login from "../../components/contact_us_components/Login";
import Register from "../../components/contact_us_components/Register";

const MyAccount = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full md:w-5/6 mx-auto pt-5 pb-5">
      {/* Login Section */}
      <div className="w-full md:w-1/2">
        <Login />
      </div>

      {/* Register Section */}
      <div className="w-full md:w-1/2">
        <Register />
      </div>
    </div>
  );
};

export default MyAccount;

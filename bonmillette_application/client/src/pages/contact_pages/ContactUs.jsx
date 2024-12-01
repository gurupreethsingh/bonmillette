import React from "react";
import payment from "../../assets/homepage_images/payment.svg";
import shipping from "../../assets/homepage_images/shipping.svg";
import head_phones from "../../assets/homepage_images/head_phones.svg";
import certificate from "../../assets/homepage_images/certificate.svg";
import email from "../../assets/homepage_images/email.svg";
import phone from "../../assets/homepage_images/phone.svg";
import address from "../../assets/homepage_images/address.svg";

const ContactUs = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-5/6 mx-auto pt-5 pb-5 gap-10">
        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 p-5  rounded-lg">
          <h2 className="text-xl font-bold text-red-500 mb-3">Contact Us</h2>
          <p className="text-4xl text-gray-900 mb-4 font-bold ">Get In Touch</p>
          <p className="text-lg text-gray-800 mb-6">
            When, while lovely valley teems with vapour around me and meridian
            the upper impenetrable.
          </p>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-gray-700 font-medium mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="First name"
                  id="first_name"
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Last name"
                  id="last_name"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
                id="email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Your Message
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                id="message"
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-400 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200"
            >
              Submit Form
            </button>
          </form>
        </div>

        {/* Google Maps and Register Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <p className="text-4xl font-bold text-gray-800">Visit our Store</p>
          {/* Google Maps Section */}
          <div className="h-96 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.599258635925!2d77.57704956430813!3d12.99238005173825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c7b245a9%3A0x41bcb92d6e83e60!2sBangalore%20Palace!5e0!3m2!1sen!2sin!4v1698522816618!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="shipping_section p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {/* Card 1 */}
          <div className="flex justify-center items-center p-4 ">
            <img src={email} className="w-16 h-16 mr-4 text-red-500" />
            <div className="flex items-center">
              <h5 className="text-lg font-bold">Email</h5>
              <p className="text-md text-gray-600 ms-2">info@bonmillette.com</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex justify-center items-center p-4 ">
            <img src={phone} alt="Easy Returns" className="w-16 h-16 mr-4" />
            <div className="flex items-center">
              <h5 className="text-lg font-bold">Phone</h5>
              <p className="text-md text-gray-600 ms-2">+91 9035098282</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex justify-center items-center p-4 ">
            <img src={address} alt="24/7 Support" className="w-16 h-16 mr-4" />
            <div className="flex items-center">
              <h5 className="text-lg font-bold"> </h5>
              <p className="text-md text-gray-600 ms-2">
                <span className="font-bold text-dark">Address :</span>Shed No
                45, Katha No 125, Hanumantha Nagar, Srigandadha Kavalu
                Sunkadakatte, Bengaluru - 560091
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

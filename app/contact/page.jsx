import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          We would love to hear from you! Fill out the form below and we would get back to you as soon as possible.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
        <div className="mt-6 text-center text-gray-600">
          <p>
            <strong>Email:</strong> contact@earlyblog.com
          </p>
          <p>
            <strong>Phone:</strong> +234(0) 456 890 5763
          </p>
          <p>
            <strong>Address:</strong> Gado Nasco Road, Kubwa, Abuja
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

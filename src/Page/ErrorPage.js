import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md text-center">
        <h2 className="text-6xl font-bold text-gray-900 mb-6">404</h2>
        <p className="text-2xl text-gray-700 mb-6">Oops! Page not found.</p>

        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded inline-block transition duration-300"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

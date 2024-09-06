/* eslint-disable react/no-unescaped-entities */
// src/components/UnauthorizedPage.jsx
import React from "react";

const UnauthorizedPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-500 mb-4 animate-bounce">
          Oops!
        </h1>
        <p className="text-lg mb-6">
          Looks like you don't have access to this page.
        </p>
        <div className="relative mx-auto w-24 h-24 mb-4">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[40px] border-l-transparent border-r-transparent border-b-red-500 animate-rocket"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded-full opacity-50 animate-smoke"></div>
        </div>
        <a
          href="/"
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default UnauthorizedPage;

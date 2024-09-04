/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { FaBeer } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

// Utility for animations
const animationClasses =
  "transition-transform duration-500 ease-in-out transform hover:scale-105 ";

const Blog = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`mr-2
        font-sans ${
          theme === "light"
            ? "bg-gray-100 text-black"
            : "bg-gray-900 text-white"
        } min-h-screen`}
    >
      {/* Navbar */}
      <nav
        className={`pt-4 pb-4 pr-8 pl-7 shadow-md  ${
          theme === "light"
            ? "bg-blue-600 text-white"
            : "bg-gray-800 text-gray-200"
        } ${animationClasses}`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Blog</h1>
          <div className="space-x-4 mr-9">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <a href="#blog" className="hover:underline">
              Blog
            </a>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className={`py-12 ${animationClasses} ${
          theme === "light"
            ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white"
            : "bg-gradient-to-r from-blue-800 to-blue-900 text-gray-200"
        }`}
      >
        <div className="container mx-auto text-center rounded-lg p-8 shadow-lg">
          <h2 className="text-4xl font-bold mb-4">Welcome to My Blog</h2>
          <p className="text-lg">
            Your source for the latest articles and insights.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-12 ${animationClasses} ${
          theme === "light" ? "bg-gray-200" : "bg-gray-800"
        }`}
      >
        <div className="container mx-auto text-center bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700">
            Learn more about our mission and vision.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-12 ${animationClasses} ${
          theme === "light"
            ? "bg-gradient-to-r from-green-400 to-green-600 text-white"
            : "bg-gradient-to-r from-green-800 to-green-900 text-gray-200"
        }`}
      >
        <div className="container mx-auto text-center rounded-lg p-8 shadow-lg">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-left text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-left text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className={`py-12 ${animationClasses}`}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl">
              <img
                src="https://via.placeholder.com/400"
                alt="Blog Post"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Blog Post Title 1</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum.
              </p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Read More
              </button>
            </div>
            {/* Blog Post 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl">
              <img
                src="https://via.placeholder.com/400"
                alt="Blog Post"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Blog Post Title 2</h3>
              <p className="text-gray-700">
                Curabitur non nulla sit amet arcu aliquet fermentum. Fusce eget
                libero auctor, aliquet erat eu, sollicitudin ligula.
              </p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Read More
              </button>
            </div>
            {/* Blog Post 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl">
              <img
                src="https://via.placeholder.com/400"
                alt="Blog Post"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Blog Post Title 3</h3>
              <p className="text-gray-700">
                Sed sit amet libero vitae nisi vestibulum feugiat. Vestibulum
                venenatis diam sit amet mauris vulputate blandit.
              </p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

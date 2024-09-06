import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found");
        navigate("/login");
        return; // Ensure that the function exits if no token is found
      }

      try {
        const res = await axios.get("http://localhost:3000/auth/home", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status === 200) {
          setUserData(res.data.user); // Set the user object
        } else {
          setError("Failed to fetch user data");
          navigate("/login");
        }
      } catch (err) {
        setError("Failed to fetch user data");
        console.error(err);
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  const hanleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white">
      <div className="">
        <button
          className="bg-blue-800 transition-all duration-700 ease-in-out hover:bg-red-800 p-2 rounded-2xl mt-2 "
          onClick={hanleLogout}
        >
          Logout
        </button>
      </div>
      {/* Hero Section */}
      <header className="flex flex-col justify-center items-center h-screen px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mb-8">
          Your one-stop solution for managing all your tasks efficiently and
          effectively. Join us and start organizing your life today!
        </p>
        <a
          href="#get-started"
          className="px-8 py-3 bg-indigo-800 hover:bg-indigo-900 text-white font-semibold text-lg rounded-full shadow-lg transition duration-300"
        >
          Get Started
        </a>
      </header>

      {/* Services Section */}
      <section id="get-started" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Task Management</h3>
              <p className="text-gray-700">
                Stay organized with our task management tools designed to help
                you stay on top of your to-dos.
              </p>
            </div>
            <div className="p-8 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-gray-700">
                Work together with your team and friends, and achieve your goals
                faster with real-time collaboration features.
              </p>
            </div>
            <div className="p-8 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Goal Tracking</h3>
              <p className="text-gray-700">
                Keep track of your progress and reach your milestones with our
                easy-to-use goal-setting tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg mb-8">
            Join us today and transform the way you manage your tasks and
            collaborate with others!
          </p>
          <Link
            to="/register"
            className="inline-block px-8 py-4 bg-white text-indigo-900 font-semibold text-lg rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* Display fetched user data */}
      {userData && (
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Welcome back, {userData.username}!
            </h2>
          </div>
        </section>
      )}

      {/* Display error message */}
      {error && (
        <section className="py-16">
          <div className="container mx-auto text-center">
            <p className="text-red-500">{error}</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;

/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">My Portfolio</div>
          <div className="flex gap-8">
            <Link to="/login" className="hover:text-yellow-400">
              Login
            </Link>
            <Link to="/profile" className="hover:text-yellow-400">
              Profile
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to My Portfolio
        </h1>

        <section id="about" className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            I am a full-stack developer with experience in building scalable web
            applications using the latest technologies.
          </p>
        </section>

        <section id="services" className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Services</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>API Development</li>
            <li>Consulting</li>
          </ul>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <p className="text-gray-700">
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Project A</li>
            <li>Project B</li>
            <li>Project C</li>
          </ul>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
          <p className="text-gray-700">
            If you would like to get in touch, feel free to reach out via email
            at{" "}
            <a href="mailto:myemail@example.com" className="text-blue-500">
              myemail@example.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default Navigation;

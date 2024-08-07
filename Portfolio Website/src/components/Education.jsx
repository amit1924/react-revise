/* eslint-disable no-unused-vars */
import React from "react";

const Education = () => {
  return (
    <section className="py-8 " id="education">
      <h2 className="text-center text-4xl font-semibold text-white tracking-tighter">
        My Education
      </h2>
      <div className="max-w-4xl mx-auto space-y-8 p-10">
        <div className="bg-gray-800 text-white rounded-xl shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-3xl font-bold text-indigo-400">
            Bachelor of Science in Information Technology
          </h3>
          <p className="text-xl text-gray-300">
            University of California, Berkeley
          </p>
          <p className="text-sm text-gray-400">September 2008 - June 2012</p>
          <p className="mt-4 text-base text-gray-200">
            Specialized in web development, programming languages, and database
            management. Actively involved in coding clubs and hackathons, where
            I developed several web applications using HTML, CSS, JavaScript,
            and PHP. Graduated with a high GPA.
          </p>
        </div>

        <div className="bg-gray-800 text-white rounded-xl shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-3xl font-bold text-indigo-400">
            Master of Science in Computer Science
          </h3>
          <p className="text-xl text-gray-300">Stanford University</p>
          <p className="text-sm text-gray-400">September 2012 - June 2014</p>
          <p className="mt-4 text-base text-gray-200">
            Specialized in Human-Computer Interaction and Software Engineering.
            Completed a thesis on enhancing user experience in web applications
            through advanced interactive techniques. Graduated with honors,
            participating in various projects involving frontend development,
            algorithms, and data structures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;

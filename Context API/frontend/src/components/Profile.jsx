/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { token, username, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (token) {
      setAuthenticated(true);
    } else {
      const storedToken = localStorage.getItem("user-token");
      if (storedToken) {
        setAuthenticated(true);
      } else {
        navigate("/login");
      }
    }
  }, [token, navigate]);

  return (
    <div className="relative">
      {authenticated ? (
        <div className="relative">
          <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="text-xl font-bold">My Portfolio</div>
              <div>
                <a href="#home" className="mx-2 hover:text-yellow-400">
                  Home
                </a>
                <a href="#projects" className="mx-2 hover:text-yellow-400">
                  Projects
                </a>
                <a href="#technologies" className="mx-2 hover:text-yellow-400">
                  Technologies
                </a>
                <a href="#testimonial" className="mx-2 hover:text-yellow-400">
                  Testimonials
                </a>
                <a href="#contact" className="mx-2 hover:text-yellow-400">
                  Contact
                </a>
                <a href="" className="">
                  <button
                    className="bg-red-900 border-2 rounded-lg p-2"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </a>
              </div>
            </div>
          </nav>

          <section id="hero" className="bg-black text-white py-20">
            <div className="container mx-auto text-center">
              <h1 className="text-5xl font-bold mb-4 ">
                Welcome to My Portfolio
              </h1>
              <p className="text-xl mb-8">
                Full Stack Developer | JavaScript | React | Node.js
              </p>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/028/148/762/small_2x/young-man-animation-style-illustration-free-photo.jpg"
                alt="Professional Workspace"
                className="mx-auto rounded-lg shadow-lg animate-bounce"
              />
            </div>
          </section>

          <section
            id="projects"
            className="py-20 bg-black transition duration-500 ease-in-out transform  hover:scale-110"
          >
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Projects</h2>
              <div className="flex flex-wrap justify-center">
                <div className="max-w-sm p-4 bg-white shadow-lg rounded-lg m-4">
                  <img
                    src="https://s3.amazonaws.com/creativetim_bucket/products/500/original/soft-ui-dashboard-material-ui.jpg?1632195046"
                    alt="Project 1"
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold">Project 1</h3>
                  <p className="mt-2">Description of Project 1.</p>
                </div>
                <div className="max-w-sm p-4 bg-white shadow-lg rounded-lg m-4">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:1400/0*WedB2EeHtR9RYo2N"
                    alt="Project 2"
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold">Project 2</h3>
                  <p className="mt-2">Description of Project 2.</p>
                </div>
                {/* Add more projects as needed */}
              </div>
            </div>
          </section>

          <section
            id="technologies"
            className="py-20 bg-black transition duration-500 ease-in-out transform  hover:bg-emerald-900"
          >
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Technologies</h2>
              <div className="flex flex-wrap justify-center">
                <div className="max-w-sm p-4 bg-gray-100 shadow-lg rounded-lg m-4">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736401_1280.png"
                    alt="JavaScript"
                    className="h-16 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold">JavaScript</h3>
                </div>
                <div className="max-w-sm p-4 bg-gray-100 shadow-lg rounded-lg m-4">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:1200/1*jDIj2SKAE-Bp32owLoHDjw.png"
                    alt="React"
                    className="h-16 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold">React</h3>
                </div>
                <div className="max-w-sm p-4 bg-gray-100 shadow-lg rounded-lg m-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0uM3M25tDITF6GSHpe8TyNDGPKujgzWXkg&s"
                    alt="Node.js"
                    className="h-16 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold">Node.js</h3>
                </div>
                {/* Add more technologies as needed */}
              </div>
            </div>
          </section>

          <section id="testimonial" className="py-20 bg-black">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
              <div className="flex justify-center">
                <div className="max-w-md p-4 bg-white shadow-lg rounded-lg">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/12/07/09/27/fax-1889009_1280.jpg"
                    alt="Testimonial"
                    className="rounded-full w-16 h-16 mx-auto mb-4"
                  />
                  <p className="italic">
                    "This developer has the best skills and delivers projects on
                    time!"
                  </p>
                  <p className="mt-4 font-bold">- Jane Doe</p>
                </div>
              </div>
            </div>
          </section>

          <footer id="contact" className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
              <p>&copy; 2024 My Portfolio. All rights reserved.</p>
              <p>Contact: myemail@example.com</p>
            </div>
          </footer>
        </div>
      ) : (
        <h1>This is a Protected Page</h1>
      )}
    </div>
  );
};

export default Profile;

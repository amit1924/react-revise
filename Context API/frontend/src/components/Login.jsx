/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="mt-1">
        <button
          className="bg-red-950 p-4 border-2 hover:bg-transparent rounded-lg"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
      <div className="bg-gray-200 p-10 mt-[10rem] relative">
        <h1 className="text-center text-white-800 text-3xl font-bold">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center mt-5 p-5">
            <label className="mb-3 text-xl">Username:</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-1 border rounded-lg mb-5 text-green-400"
            />
            <label className="mb-3 text-xl">Password:</label>
            <input
              type="password"
              placeholder="Enter your username"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-1 border rounded-lg mb-5 text-green-400"
            />
            <button
              className="bg-sky-800 p-3 border-2 rounded-lg hover:bg-red-950"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

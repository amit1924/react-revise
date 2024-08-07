import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const user = {
    username: "admin",
    password: "password",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === user.username && password === user.password) {
      console.log("Submitted");
      setIsLoggedIn(true);

      navigate("/profile");
    } else {
      setError("Invalid username or password");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div style={{ border: "black solid 5px", backgroundColor: "violet" }}>
      <h1 style={{ textAlign: "center", marginBottom: "90px" }} className="">
        Login Page
      </h1>
      {error && <p style={{ color: "green", textAlign: "center" }}>{error}</p>}

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
        <br /> <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <br /> <br />
        <button style={{ backgroundColor: "red", padding: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

// PropTypes validation
Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Login;

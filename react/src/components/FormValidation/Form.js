import React, { useEffect } from "react";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState();
  const [emailError, setEmailError] = useState("");

  function handleSubmit() {
    setNameError("");
    setAgeError("");
    setEmailError("");
    if (!name) {
      setNameError("Name is required");
    } else if (!age) {
      setAgeError("Age is required");
    } else if (!email) {
      setEmailError("Email is required");
    }

    document.body.innerText = `{"Name":"${name}","Age":"${age}","Email":"${email}"}`;
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          placeholder="Enter your name"
          style={{ margin: 20, padding: 10 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        {<p style={{ color: "red" }}>{nameError}</p>}
        <input
          type="number"
          placeholder="Enter your age"
          style={{ margin: 20, padding: 10 }}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        {<p style={{ color: "red" }}>{ageError}</p>}
        <input
          type="email"
          placeholder="Enter your email"
          style={{ margin: 20, padding: 10 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        {<p style={{ color: "red" }}>{emailError}</p>}

        <button
          onClick={handleSubmit}
          style={{ padding: 25, backgroundColor: "green" }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Form;

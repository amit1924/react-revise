/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const students = [
    {
      name: "John",
      age: 34,
      occupation: "Engineer",
    },
    {
      name: "Abhi",
      age: 37,
      occupation: "Trader",
    },
    {
      name: "Rashmi",
      age: 30,
      occupation: "Teacher",
    },
  ];

  const response = students.map((student) => {
    return `Name: ${student.name} \nOccupation: ${student.occupation} \nAge: ${student.age}`;
  });

  const fetchUsers = () => {
    setLoading(true);
    setData(response);
    setIsActive(false);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div
      className={isActive ? "" : ""}
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      {loading ? (
        <p style={{ color: "blue" }}>Loading...</p>
      ) : (
        <div
          className="student-list"
          style={{
            display: "flex",
            flexDirection: "column",
            whiteSpace: "pre-wrap",
            padding: "2rem",
            border: isActive ? "0px" : "1px solid #ccc",
            borderRadius: isActive ? "0px" : "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          {data.map((item, index) => (
            <p key={index} style={{ marginBottom: "1rem" }}>
              {item}
            </p>
          ))}
        </div>
      )}
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "1rem",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={fetchUsers}
      >
        Fetch users
      </button>
    </div>
  );
};

export default App;

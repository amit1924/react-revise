import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState();

  const setFn = (e) => {
    e.preventDefault();
    localStorage.setItem("name", JSON.stringify(name));
  };
  const getFn = (e) => {
    e.preventDefault();
    const getItem = localStorage.getItem("name");
    let li = document.createElement("li");
    document.body.appendChild(li).textContent = getItem;
  };
  const removeFn = (e) => {
    e.preventDefault();
    const removeItem = localStorage.removeItem("name");
    console.log(removeItem);
  };

  return (
    <div>
      <h1 className="">Local Storage</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "12px",
          margin: "20px",
        }}
      >
        <input
          type="text"
          id="id"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
        />

        <button onClick={setFn}>Set</button>
        <button onClick={getFn}>Get</button>
        <button onClick={removeFn}>Remove</button>
      </form>
    </div>
  );
};

export default Form;

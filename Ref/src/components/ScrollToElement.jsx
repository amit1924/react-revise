/* eslint-disable no-unused-vars */
import React, { useRef } from "react";

const ScrollToElement = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <h2>Scroll to Element</h2>
      <button onClick={scrollToSection}>Scroll to Section</button>
      <div style={{ height: "100vh" }}></div>
      <div
        ref={sectionRef}
        style={{ height: "50vh", backgroundColor: "lightblue" }}
      >
        <h3>Scroll to this section</h3>
      </div>
    </div>
  );
};

export default ScrollToElement;

/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";

const OTPInput = ({ length }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const inputsRef = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value;
    console.log(value);
    const integerValue = parseInt(value);
    console.log(integerValue);
    if (!integerValue && value) {
      alert("OTP value must be a number");
    } else {
      const newOtp = [...otp];
      newOtp[index] = integerValue;
      setOtp(newOtp);

      if (integerValue && index < length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      // Move to the previous input if exists
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={otp[index]}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputsRef.current[index] = el)}
          style={{
            width: "50px",
            height: "50px",
            textAlign: "center",
            fontSize: "20px",
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;

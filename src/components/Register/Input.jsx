import React from "react";
import "./Input.css";

const Input = ({ type, placeholder, error, setInputText }) => {
  return (
    <div className="input-container">
      <input
        type={type}
        placeholder={placeholder}
        className="register-input"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <p className="error">{error}</p>
    </div>
  );
};

export default Input;

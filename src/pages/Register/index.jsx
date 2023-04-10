import React from "react";
import LeftBanner from "../../components/Register/LeftBanner";
import RegisterForm from "../../components/Register/RegisterForm";
import "./index.css";

const Register = () => {
  return (
    <div className="register-page">
      <LeftBanner />
      <RegisterForm />
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import "./RegisterForm.css";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileErr, setMobileErr] = useState("");
  const [isChecked, setIsChecked] = useState("");
  const [checkErr, setCheckErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameErr("Name is not valid.");
    } else {
      setNameErr("");
    }
    if (!email) {
      setEmailErr("Email is not valid.");
    } else {
      setEmailErr("");
    }
    if (!username) {
      setUsernameErr("Username is not valid.");
    } else {
      setUsernameErr("");
    }
    if (!mobile) {
      setMobileErr("Mobile is not valid");
    } else {
      setMobileErr("");
    }
    if (!isChecked) {
      setCheckErr("Please check the box.");
    } else {
      setCheckErr("");
    }

    if (!name || !email || !username || !mobile || !isChecked) {
      return;
    }
    setNameErr("");
    setEmailErr("");
    setUsernameErr("");
    setMobileErr("");
    setCheckErr("");

    console.log(name, username, email, mobile);
    localStorage.setItem(
      "user",
      JSON.stringify({
        name,
        username,
        email,
        mobile,
      })
    );
    navigate("/genre");
  };

  return (
    <div className="register-container">
      <div style={{ width: "46%", margin: "auto" }}>
        <div className="upper-part">
          <h2>Super app</h2>
          <p>Create your new account</p>
          <div>
            Email <span style={{ color: "#72db73" }}>|</span> Gmail
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Name"
            setInputText={setName}
            error={nameErr}
          />
          <Input
            type="text"
            placeholder="UserName"
            setInputText={setUsername}
            error={usernameErr}
          />
          <Input
            type="email"
            placeholder="Email"
            setInputText={setEmail}
            error={emailErr}
          />
          <Input
            type="number"
            placeholder="Mobile"
            setInputText={setMobile}
            error={mobileErr}
          />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="check"
              checked={isChecked}
              onChange={(e) => {
                setIsChecked(e.target.checked);
              }}
            />
            <label htmlFor="check">
              Share my registration data with Superapp
            </label>
            <p className="error">{checkErr}</p>
          </div>
          <button>SIGN UP</button>
        </form>
        <div className="bottom-part">
          <p>
            By clicking on Sign up. you agree to Superapp{" "}
            <span>
              Terms and <br />
              Conditions of Use
            </span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and
            <br /> protects your personal data please head Superapp{" "}
            <span>
              Privacy <br />
              Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

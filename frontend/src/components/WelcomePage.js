import "../assets/css/welcomePage.css";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { ToastContainer, toast } from "react-toastify";
const WelcomePage = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="container-welcome-page">
      <ToastContainer
        className="toast"
        position="top-right"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover={false}
      />
      <div className="container-left-part">
        <h2 className="welcome">Welcome back!</h2>
        <p className="account-text">
          To use this application <br></br>please login into your account
        </p>
        <Button
          style={{ background: "#284b63", width: "170px" }}
          label="Sign In"
        />
      </div>

      <div className="container-right-part">
        <p className="right-part-text">Don't have an account?</p>
        <p className="sign-up-text">Sign up today!</p>

        <div className="sing-up-form">
          <div className="sign-up-form-container">
            <span className="p-float-label">
              <InputText id="in" />
              <label htmlFor="in">Email</label>
            </span>
            <span className="p-float-label">
              <InputText id="in" />
              <label htmlFor="in">Username</label>
            </span>
            <span className="p-float-label">
              <Password id="in" toggleMask />

              <label htmlFor="in">Password</label>
            </span>
            <span className="p-float-label">
              <Password id="in" toggleMask />
              <label htmlFor="in">Confirm password</label>
            </span>
            <Button
              style={{ background: "#050038", width: "170px" }}
              label="Sign Up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

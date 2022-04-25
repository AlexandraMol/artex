import styles from "../assets/css/welcomePage.module.css";
import "../assets/css/main.css";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import Axios from "axios";

const SERVER_URL = "http://localhost:5000/";

const WelcomePage = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const postRegister = async () => {
    if (password !== confirmPassword) {
      toast.error("Password doesn't match with Confirm Password");
    } else if (email === "") {
      toast.error("Email can't be blank");
    } else if (userName === "") {
      toast.error("Username can't be blank");
    } else if (password === "") {
      toast.error("Password can't be blank");
    } else if (confirmPassword === "") {
      toast.error("Confirm Password can't be blank");
    } else {
      Axios.post(`${SERVER_URL}/register`, {
        username: userName,
        email: email,
        password: password,
      }).then((res) => {
        if (res.status === 200) {
          navigate("/articles", { state: { email: email } });
        } else if (res.status === 409) {
          toast.error("User already exists.");
        } else if (res.status === 404) {
          toast.error("User doesn't exists.");
        }
      });
    }
  };

  return (
    <div className="wrapper">
      <div className={styles.containerWelcomePage}>
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
        <div className={styles.containerLeftPart}>
          <h2 className={styles.welcome}>Welcome back!</h2>
          <p className={styles.accountText}>
            To use this application <br></br>please login into your account
          </p>
          <Button
            style={{ background: "#284b63", width: "170px" }}
            label="Sign In"
            onClick={() => {
              navigate("/login");
            }}
          />
        </div>

        <div className={styles.containerRightPart}>
          <p className={styles.rightPartText}>Don't have an account?</p>
          <p className={styles.signUpText}>Sign up today!</p>

          <div className={styles.singUpForm}>
            <div className={styles.signUpFormContainer}>
              <span className="p-float-label">
                <InputText
                  id="in"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="p-inputtext"
                />
                <label htmlFor="in">Email</label>
              </span>
              <span className="p-float-label">
                <InputText
                  id="in"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  className="p-inputtext"
                />
                <label htmlFor="in">Username</label>
              </span>
              <span className="p-float-label">
                <Password
                  id="in"
                  toggleMask
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <label htmlFor="in">Password</label>
              </span>
              <span className="p-float-label">
                <Password
                  id="in"
                  toggleMask
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
                <label htmlFor="in">Confirm password</label>
              </span>
              <Button
                style={{ background: "#050038", width: "170px" }}
                label="Sign Up"
                onClick={postRegister}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

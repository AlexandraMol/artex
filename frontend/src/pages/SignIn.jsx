import styles from "../assets/css/signIn.module.css";
import "../assets/css/main.css";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useNavigate } from "react-router";
import Axios from "axios";

const SERVER_URL = "http://localhost:5000/";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const postLogin = async () => {
    if (email === "") {
      toast.error("Email can't be blank");
    } else if (password === "") {
      toast.error("Password can't be blank");
    } else {
      Axios.post(`${SERVER_URL}/login`, {
        email: email,
        password: password,
      }).then((res) => {
        if (res.status === 200) {
          navigate("/articles", { state: { email: email } });
        } else if (res.status === 404) {
          toast.error("User doesn't exist.");
        } else if (res.status === 401) {
          toast.error("Password is not corect");
        }
      });
    }
  };

  return (
    <div className="wrapper">
      <div className={styles.containerSignInPage}>
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

        <div className={styles.containerSignInLeftPart}>
          <p className={styles.rightPartText}>Login</p>

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
                <Password
                  id="in"
                  toggleMask
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <label htmlFor="in">Password</label>
              </span>
              <Button
                style={{ background: "#050038", width: "170px" }}
                label="Sign In"
                onClick={postLogin}
              />
            </div>
          </div>
        </div>

        <div className={styles.containerSignInRightPart}></div>
      </div>
    </div>
  );
};

export default SignIn;

import Navbar from "../components/Navbar";
import styles from "../assets/css/profile.module.css";
import "../assets/css/main.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { Password } from "primereact/password";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";

const SERVER_URL = "http://localhost:5000/";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [displayBasic, setDisplayBasic] = useState(false);
  const [position, setPosition] = useState("center");

  const loc = useLocation();
  console.log(loc);

  const getProfileData = async () => {
    Axios.get(`${SERVER_URL}/profile/${loc.state.email}`, {}).then((res) => {
      setEmail(res.data.email);
      setUsername(res.data.username);
    });
  };

  const changePassword = async (name) => {
    onHide(name);
    Axios.put(`${SERVER_URL}/profile/${email}`, {
      password: password,
    }).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    getProfileData();
  }, []);

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="Cancel"
          icon="pi pi-times"
          onClick={() => onHide(name)}
          className="p-button-text"
        />
        <Button
          label="Submit"
          icon="pi pi-check"
          onClick={() => changePassword(name)}
          autoFocus
        />
      </div>
    );
  };

  return (
    <>
      <Navbar data={loc} />

      <div className={styles.containerProfile}>
        <div className={styles.containerLeftPart}>
          <div className={styles.profilePicture}></div>
          <div className={styles.profileForm}>
            <div className={styles.profileFormContainer}>
              <span className="p-float-label">
                <InputText
                  id="in"
                  readOnly={true}
                  value={email}
                  className="p-inputtext"
                />
                <label htmlFor="in">Email</label>
              </span>
              <span className="p-float-label">
                <InputText
                  id="in"
                  readOnly={true}
                  value={username}
                  className="p-inputtext"
                />
                <label htmlFor="in">Username</label>
              </span>

              <Button
                style={{ background: "#050038", width: "170px" }}
                label="Change data"
                onClick={() => onClick("displayBasic")}
              />
              <Dialog
                header="Data Form"
                visible={displayBasic}
                style={{ width: "50vh" }}
                footer={renderFooter("displayBasic")}
                onHide={() => onHide("displayBasic")}
              >
                <div className={styles.formUpdate}>
                  <span className="p-float-label">
                    <InputText
                      id="in"
                      className="p-inputtext"
                      value={email}
                      readOnly={true}
                    />
                    <label htmlFor="in">Email</label>
                  </span>
                  <span className="p-float-label">
                    <Password
                      toggleMask
                      id="in"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <label htmlFor="in">Reset Password</label>
                  </span>
                </div>
              </Dialog>
            </div>
          </div>
        </div>
        <div className={styles.containerRightPart}></div>
      </div>
    </>
  );
};

export default Profile;

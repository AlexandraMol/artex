import Navbar from "../components/Navbar";
import styles from "../assets/css/profile.module.css";
import "../assets/css/main.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Profile = () => {
  const [displayBasic, setDisplayBasic] = useState(false);

  const [position, setPosition] = useState("center");

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
          label="No"
          icon="pi pi-times"
          onClick={() => onHide(name)}
          className="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };

  return (
    <>
      <Navbar />

      <div className={styles.containerProfile}>
        <div className={styles.containerLeftPart}>
          <div className={styles.profilePicture}></div>
          <div className={styles.profileForm}>
            <div className={styles.profileFormContainer}>
              <span className="p-float-label">
                <InputText
                  id="in"
                  readOnly={true}
                  value={"test@gmail.com"}
                  className="p-inputtext"
                />
                <label htmlFor="in">Email</label>
              </span>
              <span className="p-float-label">
                <InputText
                  id="in"
                  readOnly={true}
                  value={"test"}
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
                header="Header"
                visible={displayBasic}
                style={{ width: "50vw" }}
                footer={renderFooter("displayBasic")}
                onHide={() => onHide("displayBasic")}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
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

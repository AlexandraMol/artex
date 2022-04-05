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
          label="Cancel"
          icon="pi pi-times"
          onClick={() => onHide(name)}
          className="p-button-text"
        />
        <Button
          label="Submit"
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
                      value={"test@gmail.com"}
                    />
                    <label htmlFor="in">Reset Email</label>
                  </span>
                  <span className="p-float-label">
                    <InputText id="in" className="p-inputtext" />
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

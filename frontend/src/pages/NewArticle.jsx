import Navbar from "../components/Navbar";
import styles from "../assets/css/articleAnalysis.module.css";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

const NewArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  function cancel() {
    navigate("/my-articles");
  }

  function submit() {
    //backend
    navigate("/my-articles");
  }

  return (
    <>
      <Navbar />
      <div className={styles.wrapperContainerAnalyzer}>
        <div className={styles.containerAnalyzer}>
          <div className={styles.analyzeForm}>
            <div className={styles.analyzeFormContainer}>
              <div className={styles.titleAndType}>
                <span className="p-float-label">
                  <InputText
                    style={{ width: "80vh" }}
                    id="in"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    className="p-inputtext"
                  />
                  <label htmlFor="in">Article title</label>
                </span>
              </div>

              <span className="p-float-label">
                <InputTextarea
                  style={{ width: "80vh", height: "30vh", resize: "none" }}
                  id="out"
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                  className="p-inputtextarea"
                />
                <label htmlFor="in">Article content</label>
              </span>

              <div className={styles.buttonsContainer}>
                <Button
                  label="Cancel"
                  style={{ backgroundColor: "gray" }}
                  onClick={cancel}
                />
                <Button label="Submit" onClick={submit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArticle;

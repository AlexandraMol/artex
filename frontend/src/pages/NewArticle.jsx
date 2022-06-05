import Navbar from "../components/Navbar";
import styles from "../assets/css/articleAnalysis.module.css";
import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useNavigate } from "react-router";
import { useParams, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";

const SERVER_URL = "http://localhost:5000/";
const NewArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  let { id } = useParams();
  const navigate = useNavigate();
  const loc = useLocation();
  console.log(loc);
  const getUserEmail = () => {
    Axios.get(`${SERVER_URL}/userId/${id}`).then((response) => {
      setEmail(response.data.email);
      loc.state = { email: email };
    });
  };

  useEffect(() => {
    getUserEmail();
  }, []);

  function cancel() {
    navigate("/my-articles", { state: { email: email } });
  }

  function submit() {
    //backend
    if (title === "" && content === "") {
      toast.error("Title and Content can't be black");
    } else if (title === "") {
      toast.error("Title can't be blank");
    } else if (content === "") {
      toast.error("Content can't be blank");
    } else {
      Axios.post(`${SERVER_URL}/article/${email}`, {
        content: content,
        title: title,
      });
      navigate("/my-articles", { state: { email: email } });
    }
  }

  return (
    <>
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

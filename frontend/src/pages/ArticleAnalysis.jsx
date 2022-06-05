import Navbar from "../components/Navbar";
import styles from "../assets/css/articleAnalysis.module.css";
import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { MultiSelect } from "primereact/multiselect";
import { useNavigate } from "react-router";
import { useLocation, useParams } from "react-router-dom";
import Axios from "axios";

const SERVER_URL = "http://localhost:5000/";

const ArticleAnalysis = () => {
  const loc = useLocation();
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [typeOfAnalysis, setTypeOfAnalysis] = useState(0);
  const navigate = useNavigate();
  const [selectedAnalysis, setAnalysis] = useState(null);

  const analysis = [
    { name: "LDA", code: "LDA" },
    { name: "Sentiment Analysis", code: "SA" },
  ];

  function cancelFunction() {
    navigate("/my-articles", {
      state: { email: loc.state.email },
    });
  }

  function submitFunction() {
    //ruta de add analiza
    //partea de ML + get optiunile selectate
    navigate(`/article-details/${id}`, {
      state: { email: loc.state.email },
    });
  }
  const getArticleDetails = () => {
    Axios.get(`${SERVER_URL}/article/${id}`).then((response) => {
      setTitle(response.data.title);
      setContent(response.data.content);
    });
  };

  useEffect(() => {
    getArticleDetails();
  }, []);

  return (
    <>
      <Navbar data={loc} />
      <div className={styles.wrapperContainerAnalyzer}>
        <div className={styles.containerAnalyzer}>
          <div className={styles.analyzeForm}>
            <div className={styles.analyzeFormContainer}>
              <div className={styles.titleAndType}>
                <span className="p-float-label">
                  <InputText
                    style={{ width: "50vh", textAlign: "justify" }}
                    id="in"
                    className="p-inputtext"
                    readOnly={true}
                    value={title}
                  />
                  <label htmlFor="in">Article title</label>
                </span>

                <div className="multiselect-demo">
                  <MultiSelect
                    value={selectedAnalysis}
                    options={analysis}
                    onChange={(e) => setAnalysis(e.value)}
                    optionLabel="name"
                    placeholder="Select an analysis"
                    display="chip"
                  />
                </div>
              </div>

              <span className="p-float-label">
                <InputTextarea
                  style={{
                    width: "80vh",
                    height: "30vh",
                    resize: "none",
                    textAlign: "justify",
                  }}
                  id="out"
                  className="p-inputtextarea"
                  readOnly={true}
                  value={content}
                />
                <label htmlFor="in">Article content</label>
              </span>

              <div className={styles.buttonsContainer}>
                <Button
                  label="Cancel"
                  style={{ backgroundColor: "gray" }}
                  onClick={cancelFunction}
                />
                <Button label="Submit" onClick={submitFunction} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleAnalysis;

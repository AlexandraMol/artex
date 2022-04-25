import Navbar from "../components/Navbar";
import styles from "../assets/css/articleAnalysis.module.css";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { MultiSelect } from "primereact/multiselect";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

const ArticleAnalysis = () => {
  const loc = useLocation();
  console.log(loc);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const [selectedAnalysis, setAnalysis] = useState(null);

  const analysis = [
    { name: "LDA", code: "LDA" },
    { name: "Sentiment Analysis", code: "SA" },
  ];

  function cancelFunction() {
    navigate("/articles");
  }

  function submitFunction() {
    // TODO importat modala si generat raportul plus adaugat functionalitatea de download as PDF
  }

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
                    style={{ width: "50vh" }}
                    id="in"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    className="p-inputtext"
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

import Navbar from "../components/Navbar";
import styles from "../assets/css/articleAnalysis.module.css";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { MultiSelect } from "primereact/multiselect";

const ArticleAnalysis = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [selectedAnalysis, setAnalysis] = useState(null);

  const analysis = [
    { name: "LDA", code: "LDA" },
    { name: "Sentiment Analysis", code: "SA" },
  ];

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
            </div>

            <span className="p-float-label">
              <InputTextarea
                id="out"
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                className="p-inputtextarea"
              />
              <label htmlFor="in">Article content</label>
            </span>

            <Button label="Cancel" />
            <Button label="Submit" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleAnalysis;

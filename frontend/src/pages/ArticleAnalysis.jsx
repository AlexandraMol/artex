import Navbar from "../components/Navbar";
import styles from "../assets/css/articleAnalysis.module.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
const ArticleAnalysis = () => {
  return (
    <>
      <Navbar />
      <div className={styles.containerAnalyzer}>
        <div className={styles.containerLeftPart}>
          <div className={styles.analyzeForm}>
            <div className={styles.analyzeFormContainer}></div>
          </div>
        </div>
        <div className={styles.containerRightPart}>
          <p>Test</p>
        </div>
      </div>
    </>
  );
};

export default ArticleAnalysis;

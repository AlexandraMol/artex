import Navbar from "../components/Navbar";
import styles from "../assets/css/articleDetails.module.css";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

const SERVER_URL = "http://localhost:5000/";

const ViewArticleDetails = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const loc = useLocation();
  let { id } = useParams();

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
      <div className={styles.pageWrapper}>
        <div className={styles.containerArticleDetails}>
          <div className={styles.containerBar}></div>

          <div className={styles.articleDetails}>
            <div className={styles.articleTitle}>{title}</div>
            <div className={styles.articleContent}>{content}</div>
          </div>
          <div className={styles.listOfAnalysis}>
            {/* componenta de analiza */}
            {/* <h2>Type of analysis</h2>
            <h5>content</h5> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewArticleDetails;

// -> sa ma gandesc la design

// -> title ul, contentul articolului

// -> analizele generate -> iar de gandit design-ul

//butonul de back vedem cu mail ul

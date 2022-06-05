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
      <h1>Article Details</h1>
      <div>{title}</div>
      <div>{content}</div>
      <h1>Analizele articolului</h1>
    </>
  );
};

export default ViewArticleDetails;

// -> sa ma gandesc la design

// -> title ul, contentul articolului

// -> analizele generate -> iar de gandit design-ul

//butonul de back vedem cu mail ul

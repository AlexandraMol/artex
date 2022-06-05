import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Axios from "axios";

const SERVER_URL = "http://localhost:5000/";

const ViewArticles = () => {
  const loc = useLocation();
  const [articles, setArticles] = useState([]);
  console.log(loc);

  const getArticles = () => {
    Axios.get(`${SERVER_URL}/otherUsersArticles/${loc.state.email}`).then(
      (response) => {
        setArticles(response.data.articles);
      }
    );
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <Navbar data={loc} />
      <div
        className="articleList"
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          justifyContent: "center",
          columnGap: "50px",
          rowGap: "50px",
        }}
      >
        {articles.map((e) => (
          <ArticleCard key={e.id} visibility={false} item={e} />
        ))}
      </div>
    </>
  );
};

export default ViewArticles;

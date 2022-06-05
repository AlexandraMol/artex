import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
import { Button } from "primereact/button";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import Axios from "axios";
import { useState, useEffect } from "react";

const SERVER_URL = "http://localhost:5000/";

const MyArticles = () => {
  const [userId, setUserId] = useState("");
  const [articles, setArticles] = useState([]);
  const loc = useLocation();

  const navigate = useNavigate();

  const getUserId = () => {
    Axios.get(`${SERVER_URL}/profile/${loc.state.email}`).then((response) => {
      setUserId(response.data.id);
    });
  };

  const getArticles = () => {
    Axios.get(`${SERVER_URL}/articles/${loc.state.email}`).then((response) => {
      setArticles(response.data.articles);
    });
  };

  function submit() {
    navigate(`/new-article/${userId}`, {
      state: { email: loc.state.email },
    });
  }

  useEffect(() => {
    getUserId();
    getArticles();
  }, []);

  return (
    <>
      <Navbar data={loc} />
      <Button
        label="New article"
        icon="pi pi-plus"
        style={{
          fontSize: "16px",
          position: "initial",
          margin: "10px 10px 10px 5px ",
          padding: "20px",
          borderRadius: "30px",
          fontWeight: "bold",
        }}
        onClick={submit}
      />

      <div
        className="articleList"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          justifyContent: "center",
          columnGap: "50px",
          rowGap: "50px",
        }}
      >
        {articles.map((e) => (
          <ArticleCard key={e.id} item={e} />
        ))}
      </div>
    </>
  );
};

export default MyArticles;

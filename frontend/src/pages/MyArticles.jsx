import Navbar from "../components/Navbar";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import Axios from "axios";
import { useState, useEffect } from "react";

const SERVER_URL = "http://localhost:5000/";

const MyArticles = () => {
  const [userId, setUserId] = useState("");
  const loc = useLocation();
  console.log(loc.state.email);
  const navigate = useNavigate();
  const getUserId = () => {
    Axios.get(`${SERVER_URL}/profile/${loc.state.email}`).then((response) => {
      setUserId(response.data.id);
    });
  };

  useEffect(() => {
    getUserId();
  }, []);

  const header = (
    <div
      alt="Card"
      style={{
        backgroundImage: "url('https://i.imgur.com/Rodf2QI.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "300px",
        width: "400px",
      }}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const footer = (
    <span style={{ display: "flex", justifyContent: "center" }}>
      <Button
        label="View Article"
        icon="pi pi-search"
        style={{
          fontSize: "14px",
          marginRight: "10px",
          width: "200px",
          position: "initial",
        }}
      />
      <Button
        label="Generate Analysis"
        icon="pi pi-plus"
        style={{
          fontSize: "14px",
          marginLeft: "10px",
          width: "200px",
          position: "initial",
        }}
      />
    </span>
  );
  return (
    <>
      <Navbar data={loc} />
      <Button
        label="New article"
        icon="pi pi-plus"
        style={{
          fontSize: "16px",
          margin: "10px 10px 10px 5px ",
          padding: "20px",
          borderRadius: "30px",
          fontWeight: "bold",
        }}
        onClick={() => {
          navigate(`/new-article/${userId}`);
        }}
      />
      <Card
        title="Advanced Card"
        subTitle="Subtitle"
        style={{ width: "400px" }}
        footer={footer}
        header={header}
      >
        <p className="m-0" style={{ lineHeight: "1.5" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </Card>
    </>
  );
};

export default MyArticles;

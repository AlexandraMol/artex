import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Axios from "axios";

const SERVER_URL = "http://localhost:5000/";

const ViewArticles = () => {
  const loc = useLocation();
  console.log(loc);

  return (
    <>
      <Navbar data={loc} />
      <p>Prima pagina</p>
    </>
  );
};

export default ViewArticles;

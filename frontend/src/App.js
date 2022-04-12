import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

//pages import start
import WelcomePage from "./pages/WelcomePage";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import MyArticles from "./pages/MyArticles";
import ViewArticles from "./pages/ViewArticles";
import ArticleAnalysis from "./pages/ArticleAnalysis";
//ending

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/article-analysis" element={<ArticleAnalysis />} />
        <Route path="/articles" element={<ViewArticles />} />
        <Route path="/my-articles" element={<MyArticles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

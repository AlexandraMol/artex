import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

//pages import start
import WelcomePage from "./pages/WelcomePage";
import SignIn from "./pages/SignIn";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
//ending

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/main" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

//components import start
import WelcomePage from "./components/WelcomePage";
import SignIn from "./components/SignIn";
import LandingPage from "./components/LandingPage";
//ending

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/main" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

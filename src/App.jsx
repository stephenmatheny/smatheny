import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import TutoringPage from "./pages/TutoringPage";
import WebPage from "./pages/WebPage";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-me" element={<Navigate to="/about" replace />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/tutoring" element={<TutoringPage />} />
        <Route path="/web" element={<WebPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";
import Home from "../pages/home";
import Quiz from "../pages/quiz";

const Router = () => {
  return (
    <Routes>
      {/* Catch-all: Redirect to the homepage */}
      <Route path="*" element={<Navigate to="/" />} />

      {/* TODO Welcome Layout and Login page */}

      {/* Applayout */}
      <Route element={<AppLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<></>} />
        <Route path="/quiz" element={<Quiz />} />
      </Route>
    </Routes>
  );
};

export default Router;

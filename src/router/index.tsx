import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";

const Router = () => {
  return (
    <Routes>
      {/* Catch-all: Redirect to the homepage */}
      <Route path="*" element={<Navigate to="/" />} />

      {/* TODO Welcome Layout and Login page */}

      {/* Applayout */}
      <Route element={<AppLayout />}>
        <Route index element={<></>} /> {/* Default route */}
        <Route path="dashboard" element={<></>} />
      </Route>
    </Routes>
  );
};

export default Router;

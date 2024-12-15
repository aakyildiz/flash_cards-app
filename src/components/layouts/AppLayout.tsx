import React from "react";
import { Outlet } from "react-router-dom";
import "./AppLayout.css";

const AppLayout: React.FC = () => {
  return (
    <div className="layout">
      <header className="layout-header">
        <h1>Flashcards</h1>
        <nav className="layout-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </header>
      <main className="layout-main">
        <Outlet /> {/* Render nested from Router here */}
      </main>
      <footer className="layout-footer">
        <p>© 2024 Flashcards App</p>
      </footer>
    </div>
  );
};

export default AppLayout;

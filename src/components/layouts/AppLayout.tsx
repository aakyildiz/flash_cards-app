import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      {/* TODO NavBar */}
      <header>
        <h1>My Flashcards App</h1>
      </header>
      <main>{<Outlet />}</main> {/* Render nested from Router here */}
      <footer>
        <p>© 2024 Flashcards App</p>
      </footer>
    </div>
  );
};

export default AppLayout;

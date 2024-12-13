import React, { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Router from "./router";

function App() {
  // const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/questions");
  }, []);

  return <Router></Router>;
}

export default App;

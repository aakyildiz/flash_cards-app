import React, { useEffect, useState } from "react";
import axios from "axios";

const Quiz: React.FC = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (startQuiz)
      axios
        .get("http://localhost:8000/questions")
        .then((res) => setQuestions(res.data))
        .catch((e) => console.log(e));
  }, [startQuiz]);

  return !startQuiz ? <>QUIZ BASLAT</> : <></>;
};

export default Quiz;

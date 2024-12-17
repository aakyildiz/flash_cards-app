import axios from "axios";
import React, { useEffect, useState } from "react";
import QuizItem from "./component/QuizItem";

interface QuizItemI {
  id: number;
  quiz_name: string;
  quiz_description: string;
}

const Home = () => {
  const [quizzes, setQuizzes] = useState<[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/quizzes")
      .then((res) => {
        console.log(res.data);
        setQuizzes(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {quizzes.map((quiz: QuizItemI) => (
        <QuizItem
          key={quiz.id}
          id={quiz.id}
          quizName={quiz.quiz_name}
          quizDescription={quiz.quiz_description}
        />
      ))}
    </div>
  );
};

export default Home;

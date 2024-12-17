import React from "react";
import "./QuizItem.css";
import { useNavigate } from "react-router-dom";

interface QuizItemProps {
  id: number;
  quizName: string;
  quizDescription: string;
}

const QuizItem: React.FC<QuizItemProps> = ({
  id,
  quizName,
  quizDescription,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="quizItem"
      onClick={() => {
        navigate(`/quiz?${id}`);
      }}
    >
      <h2 className="quizName">{quizName}</h2>
      <p className="quizDescription">{quizDescription}</p>
    </div>
  );
};

export default QuizItem;

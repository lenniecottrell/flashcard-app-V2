import React, { useEffect } from "react";

const QuestionText = ({ question, setQuestion, topic, questionId }) => {
  useEffect(() => {
    //the question ID needs to be dynamic
    fetch(`http://localhost:5000/topics/${topic}/questions/${questionId}`)
      .then((res) => res.json())
      .then((result) => setQuestion(result.question));
  });

  return (
    <section className="question">
      <p>{question}</p>
    </section>
  );
};

export default QuestionText;

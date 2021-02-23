import React, { useEffect } from "react";

const QuestionText = ({ question, setQuestion, topic }) => {
  useEffect(() => {
    fetch(`http://localhost:5000/topics/${topic}/questions/1`)
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

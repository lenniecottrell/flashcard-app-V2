import React, { useEffect } from "react";

const QuestionText = ({ question, topic, questionId }) => {
  //   console.log("The question Id passed to Question text is: " + questionId);
  //   console.log("the topic passed to the Question text is: " + topic);
  //   useEffect(() => {
  //     //the question ID needs to be dynamic
  //     fetch(`http://localhost:5000/topics/${topic}/questions/${questionId}`)
  //       .then((res) => res.json())
  //       .then((result) => setQuestion(result.question));
  //   });

  return (
    <section className="question">
      <p>{question}</p>
    </section>
  );
};

export default QuestionText;

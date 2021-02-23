import React from "react";
import TopicText from "./TopicText";
import MidsectionWrapper from "./MidsectionWrapper";
import AnswerText from "./AnswerText";

const Card = ({
  topic,
  question,
  questionId,
  setQuestion,
  definition,
  information,
  compare,
  example,
  answer,
  setAnswer,
}) => {
  return (
    <section className="card">
      <TopicText topic={topic} />
      <MidsectionWrapper
        topic={topic}
        question={question}
        questionId={questionId}
        setQuestion={setQuestion}
        definition={definition}
        information={information}
        compare={compare}
        example={example}
        setAnswer={setAnswer}
      />
      <AnswerText answer={answer} />
    </section>
  );
};

export default Card;

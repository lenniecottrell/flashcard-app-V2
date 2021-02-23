import React from "react";
import TopicText from "./TopicText";
import MidsectionWrapper from "./MidsectionWrapper";
import AnswerText from "./AnswerText";

const Card = ({
  topic,
  question,
  setQuestion,
  setDefinition,
  setInformation,
  setCompare,
  setExample,
  answer,
  setAnswer,
}) => {
  return (
    <section className="card">
      <TopicText topic={topic} />
      <MidsectionWrapper
        topic={topic}
        question={question}
        setQuestion={setQuestion}
        setDefinition={setDefinition}
        setInformation={setInformation}
        setCompare={setCompare}
        setExample={setExample}
        setAnswer={setAnswer}
      />
      <AnswerText answer={answer} />
    </section>
  );
};

export default Card;

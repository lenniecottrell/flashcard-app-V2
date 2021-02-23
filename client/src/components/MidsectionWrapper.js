import React from "react";
import { InfoButtonWrapper } from "./info-buttons";
import QuestionText from "./QuestionText";

function MidsectionWrapper({ question, setQuestion, setAnswer, topic }) {
  return (
    <section className="mid">
      <QuestionText
        question={question}
        setQuestion={setQuestion}
        topic={topic}
      />
      <InfoButtonWrapper setAnswer={setAnswer} topic={topic} />
    </section>
  );
}

export default MidsectionWrapper;

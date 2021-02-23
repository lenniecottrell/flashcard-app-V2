import React from "react";
import { InfoButtonWrapper } from "./info-buttons";
import QuestionText from "./QuestionText";

function MidsectionWrapper({
  question,
  setQuestion,
  questionId,
  setAnswer,
  topic,
  definition,
  information,
  compare,
  example,
}) {
  return (
    <section className="mid">
      <QuestionText
        question={question}
        questionId={questionId}
        setQuestion={setQuestion}
        topic={topic}
      />
      <InfoButtonWrapper
        setAnswer={setAnswer}
        topic={topic}
        definition={definition}
        information={information}
        compare={compare}
        example={example}
      />
    </section>
  );
}

export default MidsectionWrapper;

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
  console.log("from midsection wrapper: " + question);
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
        definition={definition}
        information={information}
        compare={compare}
        example={example}
      />
    </section>
  );
}

export default MidsectionWrapper;

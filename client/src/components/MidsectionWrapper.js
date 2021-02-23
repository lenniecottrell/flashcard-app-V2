import React from "react";
import { InfoButtonWrapper } from "./info-buttons";
import QuestionText from "./QuestionText";

function MidsectionWrapper({ question, setQuestion, setAnswer }) {
  return (
    <section className="mid">
      <QuestionText question={question} setQuestion={setQuestion} />
      <InfoButtonWrapper setAnswer={setAnswer} />
    </section>
  );
}

export default MidsectionWrapper;

import React from "react";
import RandomButton from "./RandomButton";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

const ChangeQuestionWrapper = () => {
  return (
    <section className="nav-btn-wrapper">
      <PrevButton />
      <RandomButton />
      <NextButton />
    </section>
  );
};

export default ChangeQuestionWrapper;

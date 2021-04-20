import React from "react";
import RandomButton from "./RandomButton";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

const ChangeQuestionWrapper = ({
  questionList,
  setQuestion,
  questionId,
  setCompare,
  setDefinition,
  setExample,
  setInformation,
  setQuestionId,
  setAnswer,
}) => {
  const handleQuestionChange = async (action) => {
    let currentIndex = questionList.findIndex(
      (item) => item.id_question === questionId
    );
    console.log(currentIndex);
    if (action === "next") {
      if (currentIndex + 1 >= questionList.length) {
        alert("You've reached the last question in this topic");
        return;
      }
      await setAnswer("");
      setQuestion(questionList[currentIndex + 1].question);
      setQuestionId(questionList[currentIndex + 1].id_question);
      setDefinition(questionList[currentIndex + 1].definition);
      setInformation(questionList[currentIndex + 1].information);
      setCompare(questionList[currentIndex + 1].compare);
      setExample(questionList[currentIndex + 1].example);
    }
    if (action === "prev") {
      if (currentIndex === 0) {
        alert("You are currently on the first question");
        return;
      } else {
        await setAnswer("");
        setQuestion(questionList[currentIndex - 1].question);
        setQuestionId(questionList[currentIndex - 1].id_question);
        setDefinition(questionList[currentIndex - 1].definition);
        setInformation(questionList[currentIndex - 1].information);
        setCompare(questionList[currentIndex - 1].compare);
        setExample(questionList[currentIndex - 1].example);
      }
    }

    //TODO: fix this so that it won't show the question that currently shows
    if (action === "random") {
      let randomInt = Math.floor(Math.random() * questionList.length);
      const newIndex = (currentIndex + randomInt) % questionList.length;
      if (newIndex >= questionList.length) {
        alert("oops");
        return;
      }
      await setAnswer("");
      setQuestion(questionList[newIndex].question);
      setQuestionId(questionList[newIndex].id_question);
      setDefinition(questionList[newIndex].definition);
      setInformation(questionList[newIndex].information);
      setCompare(questionList[newIndex].compare);
      setExample(questionList[newIndex].example);
    }
  };

  return (
    <section className="nav-btn-wrapper">
      <PrevButton handleQuestionChange={handleQuestionChange} />
      <RandomButton handleQuestionChange={handleQuestionChange} />
      <NextButton handleQuestionChange={handleQuestionChange} />
    </section>
  );
};

export default ChangeQuestionWrapper;

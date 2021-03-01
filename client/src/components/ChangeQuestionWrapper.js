import React from "react";
import RandomButton from "./RandomButton";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

const ChangeQuestionWrapper = ({
  questionList,
  setQuestion,
  questionId,
  question,
  setCompare,
  setDefinition,
  setExample,
  setInformation,
  setQuestionId,
}) => {
  const handleQuestionChange = async (action) => {
    let currentIndex = questionList.findIndex(
      (item) => item.id_question === questionId
    );
    console.log(currentIndex);
    if (action === "next") {
      await setQuestion(questionList[currentIndex + 1].question);
      setQuestionId(questionList[currentIndex + 1].id_question);
      setDefinition(questionList[currentIndex + 1].definition);
      setInformation(questionList[currentIndex + 1].information);
      setCompare(questionList[currentIndex + 1].compare);
      setExample(questionList[currentIndex + 1].example);
    }
    if (action === "prev") {
      if (currentIndex === 0) {
        console.log("can't go back");
        return;
      } else {
        await setQuestion(questionList[currentIndex - 1].question);
        setQuestionId(questionList[currentIndex - 1].id_question);
        setDefinition(questionList[currentIndex - 1].definition);
        setInformation(questionList[currentIndex - 1].information);
        setCompare(questionList[currentIndex - 1].compare);
        setExample(questionList[currentIndex - 1].example);
      }
    }
    if (action === "random") {
      let randomInt = Math.floor(Math.random() * questionList.length + 1);
      await setQuestion(questionList[currentIndex + randomInt].question);
    }
  };

  console.log(question);
  console.log(questionList);

  return (
    <section className="nav-btn-wrapper">
      <PrevButton handleQuestionChange={handleQuestionChange} />
      <RandomButton handleQuestionChange={handleQuestionChange} />
      <NextButton handleQuestionChange={handleQuestionChange} />
    </section>
  );
};

export default ChangeQuestionWrapper;

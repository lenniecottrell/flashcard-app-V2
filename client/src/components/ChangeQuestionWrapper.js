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
        console.log("can't go back");
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
    if (action === "random") {
      let randomInt = Math.floor(Math.random() * questionList.length);
      console.log(randomInt);
      if (questionList[currentIndex + randomInt] === undefined) {
        alert("there was an issue");
        return;
      }
      await setAnswer("");
      setQuestion(questionList[currentIndex + randomInt].question);
      setQuestionId(questionList[currentIndex + randomInt].id_question);
      setDefinition(questionList[currentIndex + randomInt].definition);
      setInformation(questionList[currentIndex + randomInt].information);
      setCompare(questionList[currentIndex + randomInt].compare);
      setExample(questionList[currentIndex + randomInt].example);
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

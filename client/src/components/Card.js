import React, { useEffect } from "react";
//import TopicText from "./TopicText";
import MidsectionWrapper from "./MidsectionWrapper";
import AnswerText from "./AnswerText";
import ChangeQuestionWrapper from "./ChangeQuestionWrapper";
import TopicSelect from "./TopicSelect";

const Card = ({
  topic,
  topicList,
  handleTopicChange,
  question,
  setQuestion,
  questionId,
  setQuestionId,
  questionList,
  setQuestionList,
  definition,
  setDefinition,
  information,
  setInformation,
  compare,
  setCompare,
  example,
  setExample,
  answer,
  setAnswer,
}) => {
  //grab all the questions in a topic and set the answers
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchQuestions = async (topic) => {
    await fetch(`http://localhost:5000/topics/${topic}/questions`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        console.log(result.forEach((q) => console.log(q)));
        setQuestionList(result); //this is an array of question objects
        //these set all info for the first item in the question list
        setQuestion(result[0].question);
        setQuestionId(result[0].id_question);
        setDefinition(result[0].definition);
        setInformation(result[0].information);
        setCompare(result[0].compare);
        setExample(result[0].example);
        setAnswer("");
      });
  };

  useEffect(() => {
    fetchQuestions(topic);
  }, [fetchQuestions, topic]);

  return (
    <section className="card">
      {/* <TopicText topic={topic} /> */}
      <TopicSelect
        topicList={topicList}
        handleTopicChange={handleTopicChange}
      />
      <MidsectionWrapper
        topic={topic}
        question={question}
        questionList={questionList}
        questionId={questionId}
        setQuestion={setQuestion}
        definition={definition}
        information={information}
        compare={compare}
        example={example}
        setAnswer={setAnswer}
      />
      <AnswerText answer={answer} />
      <ChangeQuestionWrapper
        questionList={questionList}
        setQuestion={setQuestion}
        setAnswer={setAnswer}
        questionId={questionId}
        setQuestionId={setQuestionId}
        setDefinition={setDefinition}
        setInformation={setInformation}
        setCompare={setCompare}
        setExample={setExample}
      />
    </section>
  );
};

export default Card;

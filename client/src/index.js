import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import './index.css';
import "./styles/app.scss";
import ChangeQuestionWrapper from "./components/ChangeQuestionWrapper";
import Card from "./components/Card";
import TopicSelect from "./components/TopicSelect";

const Flashcard = () => {
  const [topic, setTopic] = useState("Javascript");
  const [topicList, setTopicList] = useState(["Javascript"]);
  const [question, setQuestion] = useState([]);
  const [questionId, setQuestionId] = useState(1);
  const [questionList, setQuestionList] = useState([]);
  const [definition, setDefinition] = useState("");
  const [information, setInformation] = useState("");
  const [compare, setCompare] = useState("");
  const [example, setExample] = useState("");
  const [answer, setAnswer] = useState("");

  //get all topics for the drop down list
  const fetchTopics = async () => {
    await fetch(`http://localhost:5000/topics/`)
      .then((res) => res.json())
      .then((result) => {
        setTopicList(result);
        //set the first topic
        setTopic(result[0].topic);
      });
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  //change topic state from the dropdown component
  const handleTopicChange = (e) => {
    setTopic(e.target.value);
    //when the topic changes, topic state is passed to the card, where it fetches all questions in that topic
  };

  return (
    <div className="main-UI">
      <TopicSelect
        topicList={topicList}
        handleTopicChange={handleTopicChange}
      />
      <Card
        topic={topic}
        question={question}
        setQuestion={setQuestion}
        questionList={questionList}
        setQuestionList={setQuestionList}
        questionId={questionId}
        setQuestionId={setQuestionId}
        definition={definition}
        setDefinition={setDefinition}
        information={information}
        setInformation={setInformation}
        compare={compare}
        setCompare={setCompare}
        example={example}
        setExample={setExample}
        answer={answer}
        setAnswer={setAnswer}
      />
      <ChangeQuestionWrapper
        questionList={questionList}
        setQuestion={setQuestion}
        question={question}
        questionId={questionId}
        setQuestionId={setQuestionId}
        setDefinition={setDefinition}
        setInformation={setInformation}
        setCompare={setCompare}
        setExample={setExample}
      />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Flashcard />
  </React.StrictMode>,
  document.getElementById("root")
);

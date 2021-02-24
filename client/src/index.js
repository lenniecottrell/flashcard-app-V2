import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import './index.css';
import "./styles/app.scss";
import { NavButtonWrapper } from "./components/nav-buttons";
import Card from "./components/Card";
import TopicSelect from "./components/TopicSelect";

const Flashcard = () => {
  const [topic, setTopic] = useState("Javascript");
  const [topicList, setTopicList] = useState(["Javascript"]);
  const [question, setQuestion] = useState([]);
  const [questionId, setQuestionId] = useState(1);
  const [questionList, setquestionList] = useState([]);
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
        setTopic(result[0].topic);
      });
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  //set initial topic
  // const fetchTopic = async () => {
  //   await fetch(`http://localhost:5000/topics/Javascript`)
  //     .then((res) => res.json())
  //     .then((result) => setTopic(result[0].topic));
  // };

  // useEffect(() => {
  //   fetchTopic();
  // }, []);

  //grab all the questions in a topic and set the answers
  const fetchQuestion = async (topic) => {
    await fetch(`http://localhost:5000/topics/${topic}/questions`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setquestionList(result);
        setQuestion(result[0].question);
        setQuestionId(result[0].id_question);
        setDefinition(result[0].definition);
        setInformation(result[0].information);
        setCompare(result[0].compare);
        setExample(result[0].example);
      });
  };

  // useEffect(() => {
  //   fetchQuestion();
  // }, []);

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
    fetchQuestion(topic);
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
        questionId={questionId}
        definition={definition}
        information={information}
        compare={compare}
        example={example}
        answer={answer}
        setAnswer={setAnswer}
      />
      <NavButtonWrapper />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Flashcard />
  </React.StrictMode>,
  document.getElementById("root")
);

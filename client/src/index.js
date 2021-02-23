import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import './index.css';
import "./styles/app.scss";
import { NavButtonWrapper } from "./components/nav-buttons";
import Card from "./components/Card";
import TopicSelect from "./components/TopicSelect";

const Flashcard = () => {
  const [topic, setTopic] = useState("JavaScript");
  const [topicList, setTopicList] = useState([]);
  const [question, setQuestion] = useState("");
  const [definition, setDefinition] = useState("");
  const [information, setInformation] = useState(/*fetch information data */);
  const [compare, setCompare] = useState(/*fetch context data */);
  const [example, setExample] = useState(/*fetch example data */);
  const [answer, setAnswer] = useState("");

  //get all topics for the drop down list
  const fetchTopics = async () => {
    await fetch(`http://localhost:5000/topics/`)
      .then((res) => res.json())
      .then((result) => setTopicList(result));
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  //set initial topic
  const firstTopic = async () => {
    await fetch(`http://localhost:5000/topics/Javascript`)
      .then((res) => res.json())
      .then((result) => setTopic(result[0].topic));
  };

  useEffect(() => {
    firstTopic();
  }, []);

  return (
    <div className="main-UI">
      <TopicSelect setTopic={setTopic} topicList={topicList} />
      <Card
        topic={topic}
        question={question}
        setQuestion={setQuestion}
        definition={definition}
        setDefinition={setDefinition}
        information={information}
        setInformation-={setInformation}
        compare={compare}
        setCompare={setCompare}
        example={example}
        setExample={setExample}
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

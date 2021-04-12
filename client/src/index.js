import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
//STYLES
// import './index.css';
import "./styles/app.scss";
//COMPONENTS
import Card from "./components/Card";
import AddQuestionButton from "./components/AddQuestionButton";
import AddTopicButton from "./components/AddTopicButton";
import AddTopicModal from "./components/AddTopicModal";
import AddQuestionModal from "./components/AddQuestionModal";
//import TopicSelect from "./components/TopicSelect";

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
  const [showNewTopicModal, setShowNewTopicModal] = useState(false);
  const [showNewQuestionModal, setShowNewQuestionModal] = useState(false);

  //get all topics for the drop down list
  const fetchTopics = async () => {
    // heroku:`https://lrc-flashcard-app.herokuapp.com/topics`;
    await fetch(`http://localhost:5000/topics`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application-json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTopicList(data);
        setTopic(data[0].topic); //set the first topic
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
      <AddQuestionButton
        showNewQuestionModal={showNewQuestionModal}
        setShowNewQuestionModal={setShowNewQuestionModal}
      />
      <AddTopicButton
        setShowNewTopicModal={setShowNewTopicModal}
        showNewTopicModal={showNewTopicModal}
      />
      <AddTopicModal
        showNewTopicModal={showNewTopicModal}
        setShowNewTopicModal={setShowNewTopicModal}
      />
      <AddQuestionModal
        topicList={topicList}
        showNewQuestionModal={showNewQuestionModal}
        setShowNewQuestionModal={setShowNewQuestionModal}
      />
      <Card
        showNewQuestionModal={showNewQuestionModal}
        setShowNewQuestionModal={setShowNewQuestionModal}
        showNewTopicModal={showNewTopicModal}
        setShowNewTopicModal={setShowNewTopicModal}
        topic={topic}
        topicList={topicList}
        handleTopicChange={handleTopicChange}
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
      {/* <ChangeQuestionWrapper
        questionList={questionList}
        setQuestion={setQuestion}
        setAnswer={setAnswer}
        questionId={questionId}
        setQuestionId={setQuestionId}
        setDefinition={setDefinition}
        setInformation={setInformation}
        setCompare={setCompare}
        setExample={setExample}
      /> */}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Flashcard />
  </React.StrictMode>,
  document.getElementById("root")
);

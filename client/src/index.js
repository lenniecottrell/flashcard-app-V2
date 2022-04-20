import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
//STYLES
import "./styles/app.scss";
//COMPONENTS
import Card from "./components/Card";
import UpperButtonWrapper from "./components/UpperButtonWrapper";

const Flashcard = () => {
  const [topic, setTopic] = useState("Javascript");
  const [topicId, setTopicId] = useState(1);
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
  const [showEditQuestionModal, setShowEditQuestionModal] = useState(false);

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
        setTopicId(data[0].id_topic);
      });
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  //change topic state from the dropdown component
  const handleTopicChange = (e) => {
    try {
      setTopic(e.target.value);
      for (let i = 0; i < topicList.length; i++) {
        if (e.target.value === topicList[i].topic) {
          setTopicId(topicList[i].id_topic);
        }
      }
    } catch (error) {
      alert(
        "there was a problem changing topics. See handleTopicChange in index.js"
      );
    }
    //when the topic changes, topic state is passed to the card, where it fetches all questions in that topic
  };

  return (
    <div className="main-UI">
      <Card
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
      <UpperButtonWrapper
        showNewQuestionModal={showNewQuestionModal}
        setShowNewQuestionModal={setShowNewQuestionModal}
        showEditQuestionModal={showEditQuestionModal}
        setShowEditQuestionModal={setShowEditQuestionModal}
        topic={topic}
        topicId={topicId}
        setTopicList={setTopicList}
        topicList={topicList}
        setShowNewTopicModal={setShowNewTopicModal}
        showNewTopicModal={showNewTopicModal}
        question={question}
        setQuestion={setQuestion}
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

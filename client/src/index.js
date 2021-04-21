import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
//STYLES
// import './index.css';
import "./styles/app.scss";
//COMPONENTS
import Card from "./components/Card";
import AddQuestionButton from "./components/AddQuestionButton";
import AddTopicModal from "./components/AddTopicModal";
import AddQuestionModal from "./components/AddQuestionModal";
import EditQuestionButton from "./components/EditQuestionButton";
import EditQuestionModal from "./components/EditQuestionModal";

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
    setTopic(e.target.value);
    for (let i = 0; i < topicList.length; i++) {
      if (e.target.value === topicList[i].topic) {
        setTopicId(topicList[i].id_topic);
      }
    }
    //when the topic changes, topic state is passed to the card, where it fetches all questions in that topic
  };

  return (
    <div className="main-UI">
      <AddQuestionButton
        showNewQuestionModal={showNewQuestionModal}
        setShowNewQuestionModal={setShowNewQuestionModal}
      />
      <EditQuestionButton
        showEditQuestionModal={showEditQuestionModal}
        setShowEditQuestionModal={setShowEditQuestionModal}
      />
      <AddQuestionModal
        topicList={topicList}
        showNewQuestionModal={showNewQuestionModal}
        setShowNewQuestionModal={setShowNewQuestionModal}
        setShowNewTopicModal={setShowNewTopicModal}
        showNewTopicModal={showNewTopicModal}
      />
      <AddTopicModal
        setShowNewTopicModal={setShowNewTopicModal}
        showNewTopicModal={showNewTopicModal}
        setShowNewQuestionModal={setShowNewQuestionModal}
        showNewQuestionModal={showNewQuestionModal}
        setTopicList={setTopicList}
        topicList={topicList}
      />
      <EditQuestionModal
        topicList={topicList}
        showEditQuestionModal={showEditQuestionModal}
        setShowEditQuestionModal={setShowEditQuestionModal}
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
        topicId={topicId}
        topic={topic}
      />
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
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Flashcard />
  </React.StrictMode>,
  document.getElementById("root")
);

import React, { useState } from "react";
import ReactDOM from "react-dom";
// import './index.css';
import "./styles/app.scss";
import { NavButtonWrapper } from "./components/nav-buttons";
import Card from "./components/Card";
import TopicSelect from "./components/TopicSelect";

const Flashcard = () => {
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [definition, setDefinition] = useState("Shoopa doop");
  const [information, setInformation] = useState(/*fetch information data */);
  const [compare, setCompare] = useState(/*fetch context data */);
  const [example, setExample] = useState(/*fetch example data */);
  const [answer, setAnswer] = useState("");

  return (
    <div className="main-UI">
      <TopicSelect />
      <Card
        topic={topic}
        setTopic={setTopic}
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

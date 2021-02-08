import React, { useState }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NavButtonWrapper } from './components/nav-buttons';
import Card from './components/Card';


const Flashcard = () => {
 const [topic, setTopic] = useState("Sample Topic")
 const [question, setQuestion] = useState("Placeholder question")
 const [definition, setDefinition] = useState("Shoopa doop")
 const [information, setInformation] = useState(/*fetch information data */)
 const [context, setContext] = useState(/*fetch context data */)
 const [example, setExample] = useState(/*fetch example data */)


  return (
    <div className="main-UI">
      <Card
        topic={topic}
        setTopic={setTopic}
        question={question}
        setQuestion={setQuestion}
        definition={definition}
        setDefinition={setDefinition}
        information={information}
        setInformation-={setInformation}
        context={context}
        setContext={setContext}
        example={example}
        setExample={setExample}
      />
      <NavButtonWrapper />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Flashcard />
  </React.StrictMode>,
document.getElementById('root')
);

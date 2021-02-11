import React from 'react';
import {InfoButtonWrapper} from './info-buttons';
import QuestionText from './QuestionText'

function MidsectionWrapper({question, setQuestion, setDefinition, setInformation, setContext, setExample, setAnswer}) {
  return (
    <section className="mid">
      <QuestionText
        question={question}
        setQuestion={setQuestion}
      />
      <InfoButtonWrapper
        setDefinition={setDefinition}
        setInformation={setInformation}
        setContext={setContext}
        setExample={setExample}
        setAnswer={setAnswer}
      />
    </section>
  )
}

export default MidsectionWrapper

import React from 'react';
import {InfoButtonWrapper} from './info-buttons';
import QuestionText from './QuestionText'

function MidsectionWrapper({question, setQuestion}) {
  return (
    <section className="mid">
      <QuestionText
        question={question}
      />
      <InfoButtonWrapper />
    </section>
  )
}

export default MidsectionWrapper

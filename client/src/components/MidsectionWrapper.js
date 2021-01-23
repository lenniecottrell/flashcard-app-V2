import React from 'react';
import {InfoButtonWrapper} from './info-buttons';
import QuestionText from './QuestionText'

function MidsectionWrapper() {
  return (
    <section className="mid">
      <QuestionText />
      <InfoButtonWrapper />
    </section>
  )
}

export default MidsectionWrapper

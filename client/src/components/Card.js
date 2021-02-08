import React from 'react'
import TopicText from './TopicText'
import MidsectionWrapper from './MidsectionWrapper'
import AnswerText from './AnswerText'


const Card = ({topic, question, setQuestion, definition, setDefinition, information, setInformation, context, setContext, example, setExample}) => {
    return (
      <section className="card">
        <TopicText 
          topic={topic}
        />
        <MidsectionWrapper
          question={question}
          setQuestion={setQuestion}
        />
        <AnswerText
          definition={definition}
          setDefinition={setDefinition}
          information={information}
          setInformation={setInformation}
          context={context}
          setContext={setContext}
          example={example}
          setExample={setExample}
        />
      </section>
      )
    }

export default Card;


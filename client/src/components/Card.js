import React from 'react'
import TopicText from './TopicText'
import MidsectionWrapper from './MidsectionWrapper'
import AnswerText from './AnswerText'


const Card = ({topic, setTopic, question, setQuestion, definition, setDefinition, information, setInformation, context, setContext, example, setExample, answer, setAnswer}) => {
    return (
      <section className="card">
        <TopicText 
          topic={topic}
          setTopic={setTopic}
        />
        <MidsectionWrapper
          question={question}
          setQuestion={setQuestion}
          setDefinition={setDefinition}
          setInformation={setInformation}
          setContext={setContext}
          setExample={setExample}
          setAnswer={setAnswer}
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
          answer={answer}
        />
      </section>
      )
    }

export default Card;


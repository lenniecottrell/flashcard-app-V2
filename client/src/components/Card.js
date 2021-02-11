import React from 'react'
import TopicText from './TopicText'
import MidsectionWrapper from './MidsectionWrapper'
import AnswerText from './AnswerText'


const Card = ({topic, setTopic, question, setQuestion, setDefinition, setInformation, setCompare, setExample, answer, setAnswer}) => {
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
          setCompare={setCompare}
          setExample={setExample}
          setAnswer={setAnswer}
        />
        <AnswerText
          answer={answer}
        />
      </section>
      )
    }

export default Card;


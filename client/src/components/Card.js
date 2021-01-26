import React, { Component } from 'react'
import TopicText from './TopicText'
import MidsectionWrapper from './MidsectionWrapper'
import AnswerText from './AnswerText'


const Card = () => {
    return (
      <section className="card">
        <TopicText />
        <MidsectionWrapper />
        <AnswerText />
      </section>
      )
    }

export default Card;


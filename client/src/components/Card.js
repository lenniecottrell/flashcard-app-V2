import React, { Component } from 'react'
import TopicText from './TopicText'
import MidsectionWrapper from './MidsectionWrapper'
import AnswerText from './AnswerText'

export default class Card extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
    return (
      <section className="card">
        <TopicText />
        <MidsectionWrapper />
        <AnswerText />
      </section>
    )
  }
}





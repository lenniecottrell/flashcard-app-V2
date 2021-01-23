import React, { Component } from 'react'


let answerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptates ipsa iure a modi dolore rem impedit porro nihil facilis!"

export default class AnswerText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerText: answerText
    }
  }
  render() {
    return (
        <section className="answer">{this.state.answerText}</section>
    )
  }
}

// export default AnswerText

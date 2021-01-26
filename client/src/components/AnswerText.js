import React, { Component } from 'react'

export default class AnswerText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerText: 'Placeholder answer'
    }
  }

  callAPI() {
    const body = ''
    fetch("http://localhost:5000/topics/2/questions/2", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    body: JSON.stringify(body)
    }
  })
    .then(res => res.text())
    .then(res => this.setState({answerText: res}))
    .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }
  render() {
    return (
        <section className="answer">{this.state.answerText}</section>
    )
  }
}

// export default AnswerText

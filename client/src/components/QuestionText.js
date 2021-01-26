import React, { Component } from 'react'

class QuestionText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionText: 'placeholder question'
    }
  }

  callAPI() {
    fetch("http://localhost:5000/topics/2/questions/2")
      .then(res => res.json())
      .then(data => console.log(data));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return(
      <section className="question">
            <p>{this.state.questionText}</p>
      </section>
      )
    }
  }

export default QuestionText

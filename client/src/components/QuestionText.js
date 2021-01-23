import React, { Component } from 'react'

let text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates consectetur sint nesciunt. Doloremque quisquam ipsum sint enim sequi quas aut ipsa aliquam sunt, nemo molestiae similique sapiente quam culpa excepturi."

class QuestionText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionText: text
    }
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

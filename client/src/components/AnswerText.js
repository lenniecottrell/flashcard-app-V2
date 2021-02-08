import React from 'react'

// export default class AnswerText extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       answerText: 'Placeholder answer'
//     }
//   }

//   callAPI() {
//     fetch("http://localhost:5000/topics/2/questions/2", {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     body: JSON
//     }
//   })
//     .then(res => res.text())
//     .then(res => this.setState({answerText: res}))
//     .catch(err => err);
//   }

//   componentDidMount() {
//     this.callAPI();
//   }
//   render() {
//     return (
//         <section className="answer">{this.state.answerText}</section>
//     )
//   }
// }

const AnswerText = ({definition, setDefinition, information, setInformation, context, setContext, example, setExample}) => {
      return (
        <section className="answer">{definition} </section>
    )
}

export default AnswerText

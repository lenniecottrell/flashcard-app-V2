import React, {useEffect} from 'react'


const QuestionText = ({question, setQuestion}) => {
    useEffect(() => {
      fetch(`http://localhost:5000/topics/2/questions/2`)
      .then(res => res.json())
      .then((result) => setQuestion(result.question))
  })

      
      return(
      <section className="question">
            <p>{question}</p>
      </section>
      )
}

export default QuestionText

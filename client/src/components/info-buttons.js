import React, {useEffect} from 'react'

//TODO these all need click functions

const DButton = ({setAnswer}) => {

  //   useEffect(() => {
  //   fetch(`http://localhost:5000/topics/2/questions/2`)
  //   .then(res => res.json())
  //   .then((result) => setAnswer(result[0].definition))
  // })

  return (
      <button className="info-button" onClick={() => {
        fetch(`http://localhost:5000/topics/2/questions/2`)
        .then(res => res.json())
        .then((result) => setAnswer(result.definition))
      }}>
      Definition
    </button>
  )
}

const IButton = ({setAnswer}) => {

    // useEffect(() => {
    // fetch(`/topics/2/questions/2`)
    // .then(res => res.json())
    // .then((result) => setInformation(result[0].information))
    // })

  return (
    <button className="info-button" onClick={() => setAnswer("Information")}>
      Information
    </button>
  )
}

const CButton = ({setAnswer}) => {

    // useEffect(() => {
    // fetch(`/topics/2/questions/2`)
    // .then(res => res.json())
    // .then((result) => setContext(result[0].context))
    // })

  return (
    <button className="info-button" onClick={() => setAnswer(`Context`)}>
      Context
    </button>
  )
}

const EButton = ({setAnswer}) => {

    // useEffect(() => {
    // fetch(`/topics/2/questions/2`)
    // .then(res => res.json())
    // .then((result) => setExample(result[0].example))
    // })

  return (
    <button className="info-button" onClick={() => setAnswer(`Example`)}>
      Example
    </button>
  )
}

const ViewAll = () => {
  return (
    <button className="view-all">
      All
    </button>
  )
}

const InfoButtonWrapper = ({definition, setDefinition, information, setInformation, context, setContext, example, setExample, setAnswer}) => {
  return (
    <aside className="info-button-wrapper">
          <DButton 
            definition={definition}
            setDefinition={setDefinition}
            setAnswer={setAnswer}
          />
          <IButton 
            information={information}
            setInformation={setInformation}
            setAnswer={setAnswer}
          />
          <CButton
            context={context}
            setContext={setContext}
            setAnswer={setAnswer}
          />
          <EButton
            example={example}
            setExample={setExample}
            setAnswer={setAnswer}
          />
          <ViewAll/>
    </aside>
  )
}
export { InfoButtonWrapper }

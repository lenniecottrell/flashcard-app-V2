import React from 'react'

//TODO these all need click functions

const DButton = ({setAnswer}) => {

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

  return (
    <button className="info-button" onClick={() => {
        fetch(`http://localhost:5000/topics/2/questions/2`)
        .then(res => res.json())
        .then((result) => setAnswer(result.information))
      }}>
      Information
    </button>
  )
}

const CButton = ({setAnswer}) => {

  return (
    <button className="info-button" onClick={() => {
        fetch(`http://localhost:5000/topics/2/questions/2`)
        .then(res => res.json())
        .then((result) => setAnswer(result.compare))
      }}>
      Compare
    </button>
  )
}

const EButton = ({setAnswer}) => {

  return (
    <button className="info-button" onClick={() => {
        fetch(`http://localhost:5000/topics/2/questions/2`)
        .then(res => res.json())
        .then((result) => setAnswer(result.example))
      }}>
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

const InfoButtonWrapper = ({setAnswer}) => {
  return (
    <aside className="info-button-wrapper">
          <DButton 
            setAnswer={setAnswer}
          />
          <IButton 
            setAnswer={setAnswer}
          />
          <CButton
            setAnswer={setAnswer}
          />
          <EButton
            setAnswer={setAnswer}
          />
          <ViewAll/>
    </aside>
  )
}
export { InfoButtonWrapper }

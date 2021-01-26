import React from 'react'

//TODO these all need click functions

const DButton = (props) => {
  // const [definition] = useState('');

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   try {
  //     const body = {definition};
  //     const response = await fetch("http://localhost:5000/")
  //   } catch (error) {
  //     console.error(error.message)
  //   }
  // }
  return (
    <button className="info-button" >
      Define
    </button>
  )
}

const IButton = (props) => {
  return (
    <button className="info-button">
      Information
    </button>
  )
}

const CButton = (props) => {
  return (
    <button className="info-button">
      Context
    </button>
  )
}

const EButton = (props) => {
  return (
    <button className="info-button">
      Example
    </button>
  )
}

const ViewAll = (props) => {
  return (
    <button className="view-all">
      All
    </button>
  )
}

const InfoButtonWrapper = () => {
  return (
    <aside className="info-button-wrapper">
          <DButton />
          <IButton />
          <CButton />
          <EButton />
          <ViewAll />
    </aside>
  )
}
export { InfoButtonWrapper }

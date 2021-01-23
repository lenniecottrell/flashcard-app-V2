import React from 'react'

const DButton = (props) => {
  const [definition] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    try {
      const body = {definition};
      const response = await fetch("http://localhost:5000/")
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <button className="info-button" onClick={this.handleClick}>
      Define
    </button>
  )
}

const IButton = (props) => {
  return (
    <button className="info-button" onClick={props.onClick}>
      Information
    </button>
  )
}

const CButton = (props) => {
  return (
    <button className="info-button" onClick={props.onClick}>
      Context
    </button>
  )
}

const EButton = (props) => {
  return (
    <button className="info-button"  onClick={props.onClick}>
      Example
    </button>
  )
}

const ViewAll = (props) => {
  return (
    <button className="view-all" onClick={props.onClick}>
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

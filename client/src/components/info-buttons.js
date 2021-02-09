import React, {useState} from 'react'

//TODO these all need click functions

const DButton = () => {
  return (
    <button className="info-button" >
      Definition
    </button>
  )
}

const IButton = () => {
  return (
    <button className="info-button">
      Information
    </button>
  )
}

const CButton = () => {
  return (
    <button className="info-button">
      Context
    </button>
  )
}

const EButton = () => {
  return (
    <button className="info-button">
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

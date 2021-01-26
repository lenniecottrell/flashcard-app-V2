import React from 'react'


//TODO these all need click functions

const RandomButton = () => {
  return (
    <button className="nav-btn" id="randomBtn">
      Random
    </button>
  )
}

const PreviousButton = () => {
  return (
    <button className="nav-btn" id="prevBtn">
      Previous
    </button>
  )
}

const NextButton = () => {
  return (
    <button className="nav-btn" id="nextBtn">
      Next
    </button>
  )
}

const NavButtonWrapper = () => {
  return (
  <section className="nav-btn-wrapper">
    <PreviousButton />
    <RandomButton />
    <NextButton />
  </section>
  )
}

export { NavButtonWrapper }
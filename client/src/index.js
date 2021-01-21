import React, { Component, useState }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { PreviousButton, RandomButton, NextButton } from './components/nav-buttons';
import { DButton, IButton, CButton, EButton, ViewAll } from './components/info-buttons'

class Flashcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: null,
    }
  }

  render() {
    return (
          <div className="main-UI">
            <Card />
            <NavButtonWrapper />
          </div>
        )
      }
    }
    
  const Card = () => {
    return (
      <section className="card">
        <TitleHeader />
        <MidsectionWrapper />
        <AnswerText />
      </section>
  )
}

const TitleHeader = () => {
  return (
    <header className="topic">TOPIC</header>
  )
}

const MidsectionWrapper = () => {
  return (
    <section className="mid">
      <QuestionText />
      <InfoButtonWrapper />
    </section>
  )
}

const QuestionText = () => {
  const [question, setQuestion] = useState("");
  return (
    <section className="question">
          <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates consectetur sint nesciunt. Doloremque quisquam ipsum sint enim sequi quas aut ipsa aliquam sunt, nemo molestiae similique sapiente quam culpa excepturi.</p>
    </section>
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

const AnswerText = () => {
  return (
    <section className="answer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptates ipsa iure a modi dolore rem impedit porro nihil facilis!</section>
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

ReactDOM.render(
  <React.StrictMode>
    <Flashcard />
  </React.StrictMode>,
document.getElementById('root')
);

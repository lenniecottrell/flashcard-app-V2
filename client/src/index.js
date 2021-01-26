import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NavButtonWrapper } from './components/nav-buttons';
import Card from './components/Card';


//should this be a class components since it's the topmost level?


// class Flashcard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     }
//   }

const Flashcard = () => {
  return (
    <div className="main-UI">
      <Card />
      <NavButtonWrapper />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Flashcard />
  </React.StrictMode>,
document.getElementById('root')
);

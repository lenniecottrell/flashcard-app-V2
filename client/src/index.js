import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NavButtonWrapper } from './components/nav-buttons';
import Card from './components/Card';

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

ReactDOM.render(
  <React.StrictMode>
    <Flashcard />
  </React.StrictMode>,
document.getElementById('root')
);

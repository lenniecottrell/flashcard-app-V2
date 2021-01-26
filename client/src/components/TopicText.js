import React, { Component } from 'react'

export default class TopicText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicText: 'placeholder topic'
    }
  }
  
  callAPI() {
    fetch("http://localhost:5000/topics/2")
      .then(res => res.text())
      .then(res => this.setState({topicText: res}))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }
        
  render() {
    return (
      <header className="topic">{this.state.topicText}</header>
      )
    }
}


// export default TopicText

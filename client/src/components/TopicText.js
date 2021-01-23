import React, { Component } from 'react'

export default class TopicText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicText: "hello"
    }
  }

  // setTopic() {
  //   this.setState(() => {
  //     return (

  //     )

  //   });
  // }

  render() {
    return (
      <header className="topic">{this.state.topicText}</header>
    )
  }
}

// export default TopicText

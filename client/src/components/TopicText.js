import React from "react";

//This isn't currently being used.

const TopicText = ({ topic }) => {
  return <h3 className="topic">{topic.toUpperCase()}</h3>;
};

export default TopicText;

import React from "react";

const TopicText = ({ topic }) => {
  return <h3 className="topic">{topic.toUpperCase()}</h3>;
};

export default TopicText;

import React, { useEffect } from "react";

const TopicText = ({ topic, setTopic }) => {
  useEffect(() => {
    fetch(`http://localhost:5000/topics/1`)
      .then((res) => res.json())
      .then((result) => setTopic(result[0].topic));
  });

  return <header className="topic">{topic}</header>;
};

export default TopicText;

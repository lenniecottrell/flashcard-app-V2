import React, { useState, useEffect } from "react";

const TopicSelect = ({ topic, setTopic }) => {
  const [topicList, setTopicList] = useState([]);

  //get all topics for the drop down list
  const fetchTopics = async () => {
    await fetch(`http://localhost:5000/topics/`)
      .then((res) => res.json())
      .then((result) => setTopicList(result));
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  //make an array from the topicList object
  const topicChoices = topicList.map((item) => item.topic);

  //render topics dynamically
  const topicsItems = topicChoices.map((item) => {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  });

  const handleTopicChange = (e) => {
    console.log("before: " + topic);
    setTopic(e.target.value);
    console.log("after:  " + topic);
  };

  return (
    <div>
      <label htmlFor="topicSelect">Select a topic:</label>
      <select name="topicSelect" id="topicSelect" onChange={handleTopicChange}>
        {topicsItems}
      </select>
    </div>
  );
};

export default TopicSelect;

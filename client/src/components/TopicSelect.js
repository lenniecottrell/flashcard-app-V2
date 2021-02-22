import React, { useState, useEffect } from "react";

const TopicSelect = () => {
  const [topicList, setTopicList] = useState([]);

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

  return (
    <div>
      <label htmlFor="topicSelect">Select a topic:</label>
      <select name="topicSelect" id="topicSelect">
        {topicsItems}
      </select>
    </div>
  );
};

export default TopicSelect;

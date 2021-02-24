import React from "react";

const TopicSelect = ({ topicList, handleTopicChange }) => {
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

  // const handleTopicChange = (e) => {
  //   setTopic(e.target.value);
  // };

  return (
    <div className="topicSelect">
      <label htmlFor="topicSelect">Select a topic:</label>
      <select name="topicSelect" id="topicSelect" onChange={handleTopicChange}>
        {topicsItems}
      </select>
    </div>
  );
};

export default TopicSelect;

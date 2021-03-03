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

  return (
    <div className="topicSelect">
      <label htmlFor="topicSelect">SELECT A TOPIC:</label>
      <select
        name="topicSelect"
        className="selectMenu"
        onChange={handleTopicChange}
      >
        {topicsItems}
      </select>
    </div>
  );
};

export default TopicSelect;

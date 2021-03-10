import React from "react";

const TopicSelect = ({ topicList, handleTopicChange }) => {
  //render topics dynamically
  const topicsItems = topicList.map((item) => {
    return (
      <option key={item.id_topic} value={item.topic}>
        {item.topic}
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

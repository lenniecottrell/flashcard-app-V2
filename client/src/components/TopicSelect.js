import React from "react";

const TopicSelect = ({ topicList, handleTopicChange }) => {
  return (
    <div className="topicSelect">
      <label htmlFor="topicSelect">SELECT A TOPIC: </label>
      <select
        name="topicSelect"
        className="selectMenu"
        onChange={handleTopicChange}
      >
        {topicList.map((item, index) => {
          return (
            <option key={index} value={item.topic}>
              {item.topic}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default TopicSelect;

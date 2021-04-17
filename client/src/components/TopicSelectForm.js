import React from "react";
import { useForm } from "react-hook-form";

const TopicSelectForm = ({ topicList, handleTopicChange }) => {
  const { register, handleSubmit, setValue } = useForm();
  const errorHandler = (errors) => console.error(errors);
  const dataHandler = async (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(dataHandler, errorHandler)}
      className="topicSelectForm"
    >
      <label htmlFor="topicSelect">SELECT A TOPIC: </label>
      <select
        {...register("topic", { required: true })}
        className="selectMenu"
        onChange={handleTopicChange}
      >
        {topicList.map((item) => {
          return (
            <option key={item.id_topic} value={item.topic}>
              {item.topic}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default TopicSelectForm;

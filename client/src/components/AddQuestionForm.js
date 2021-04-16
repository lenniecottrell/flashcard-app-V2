import React from "react";
import TopicSelectForm from "./TopicSelect";
import { useForm } from "react-hook-form";
// import AddTopicButton from "./AddTopicButton";

const AddQuestionForm = ({
  setShowNewQuestionModal,
  topicList,
  setShowNewTopicModal,
  showNewTopicModal,
}) => {
  const { register, handleSubmit } = useForm();

  const errorHandler = (errors) => console.error(errors);
  const cancelHandler = () => setShowNewQuestionModal(false);
  const dataHandler = async (data) => {
    console.log(data);
    // await fetch(`http://localhost:5000/topics/questions`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    setShowNewQuestionModal(false);
  };
  const handleTopicChange = (e) => {
    const selection = e.target.value;
    //selection is a string of the selected topic
    //topicList is an array of objects
    //match selection to the right object in topicList
    //get the ID from that object
    let topicId = 0;
    for (let i = 0; i < topicList.length; i++) {
      if (topicList[i].topic === selection) {
        topicId = topicList[i].id_topic;
      }
    }
    console.log(`ID for ${selection} is ${topicId}`);
  };

  return (
    <form
      onSubmit={handleSubmit(dataHandler, errorHandler)}
      className="add-question-form"
    >
      {/* <AddTopicButton
          setShowNewTopicModal={setShowNewTopicModal}
          showNewTopicModal={showNewTopicModal}
        /> */}
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
      <label htmlFor="question">Question: </label>
      <input
        {...register("question")}
        id="question-body"
        className="q-form-input"
      />
      <label htmlFor="definition">Definition: </label>
      <input
        {...register("definition")}
        id="definition-ans"
        className="q-form-input"
      />
      <label htmlFor="information">Information: </label>
      <input
        {...register("information")}
        id="information-ans"
        className="q-form-input"
      />
      <label htmlFor="compare-ans">Compare: </label>
      <input
        {...register("compare")}
        id="compare-ans"
        className="q-form-input"
      />
      <label htmlFor="example">Example: </label>
      <input
        {...register("example")}
        id="example-ans"
        className="q-form-input"
      />
      <div className="buttons">
        <button type="reset" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="reset">Reset Data</button>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default AddQuestionForm;

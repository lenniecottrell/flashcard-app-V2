import React from "react";
import { useForm } from "react-hook-form";

const AddQuestionForm = ({ setShowNewQuestionModal, topicList }) => {
  const { register, handleSubmit } = useForm();

  const errorHandler = (errors) => console.error(errors);
  const cancelHandler = () => setShowNewQuestionModal(false);

  //This checks the topic selection for it's ID from the database
  const handleTopicChange = (e) => {
    const selection = e.target.value;
    //match the topic selection to the right object in topicList
    //get the ID from that object
    let selectionId = 0;
    for (let i = 0; i < topicList.length; i++) {
      if (topicList[i].topic === selection) {
        selectionId = topicList[i].id_topic;
      }
    }
    console.log(`ID for ${selection} is ${selectionId}`);
  };

  //This uses the same logic as above, but replaces the topic string in the data object with it's ID in the database
  const dataHandler = async (data) => {
    let selection = data.topic;
    let selectionId = 0;
    for (let i = 0; i < topicList.length; i++) {
      if (topicList[i].topic === selection) {
        selectionId = topicList[i].id_topic;
      }
    }
    data.fk_topic = selectionId;
    delete data.topic;
    console.log(data);
    //API call to add the question to the database
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

  return (
    <form
      onSubmit={handleSubmit(dataHandler, errorHandler)}
      className="add-question-form"
    >
      <label htmlFor="topicSelect" id="selectLabel">
        SELECT A TOPIC:
      </label>
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
        {...register("question", { required: true })}
        id="question-body"
        className="q-form-input"
      />
      <label htmlFor="definition">Definition: </label>
      <textarea
        {...register("definition", { required: true })}
        id="definition-ans"
        className="q-form-input"
      ></textarea>
      <label htmlFor="information">Information: </label>
      <textarea
        {...register("information", { required: true })}
        id="information-ans"
        className="q-form-input"
      ></textarea>
      <label htmlFor="compare-ans">Compare: </label>
      <textarea
        {...register("compare", { required: true })}
        id="compare-ans"
        className="q-form-input"
      ></textarea>
      <label htmlFor="example">Example: </label>
      <textarea
        {...register("example", { required: true })}
        id="example-ans"
        className="q-form-input"
      ></textarea>
      <div className="button-container">
        <button type="reset" onClick={cancelHandler} className="btn">
          Cancel
        </button>
        <button type="reset" className="btn">
          Reset Data
        </button>
        <input type="submit" value="Submit" className="btn" />
      </div>
    </form>
  );
};

export default AddQuestionForm;

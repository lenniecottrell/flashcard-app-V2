import React from "react";
import { useForm } from "react-hook-form";

const AddTopicForm = ({ setShowNewTopicModal, setTopicList, topicList }) => {
  const { register, handleSubmit } = useForm();

  const cancelHandler = () => {
    setShowNewTopicModal(false);
  };
  const errorHandler = (errors) => console.error(errors);
  const dataHandler = async (data) => {
    console.log(data);
    // await fetch(`http://localhost:5000/topics`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    //somehow I need to update the topic list to include the new topic, but the state in the newQuestionModal needs to be updated as well.
    setShowNewTopicModal(false);
  };

  return (
    <form
      className="add-topic-form"
      onSubmit={handleSubmit(dataHandler, errorHandler)}
    >
      <label htmlFor="topic">ADD A TOPIC:</label>
      <input {...register("topic")} />
      <div className="button-container">
        <button type="reset" onClick={cancelHandler} className="btn">
          Cancel
        </button>
        <input type="submit" value="Submit" className="btn" />
      </div>
    </form>
  );
};

export default AddTopicForm;

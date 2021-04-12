import React from "react";

const AddTopicForm = ({ setShowNewTopicModal }) => {
  const addTopicHandler = () => {
    //API call to add a new topic
  };

  const cancelHandler = () => {
    setShowNewTopicModal(false);
  };

  return (
    <form action={addTopicHandler} className="add-topic-form">
      <label for="new-topic">ADD A TOPIC:</label>
      <input type="text" name="new-topic" />
      <div className="buttons">
        <button type="reset" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default AddTopicForm;

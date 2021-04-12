import React from "react";

const AddTopicForm = ({ setShowNewTopicModal }) => {
  const addTopicHandler = () => {
    //API call to add a new topic
  };

  const cancelHandler = () => {
    setShowNewTopicModal(false);
  };

  return (
    <form action={addTopicHandler}>
      <label for="new-topic">Topic:</label>
      <input type="text" name="new-topic" />
      <button type="reset" onClick={cancelHandler}>
        Cancel
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTopicForm;

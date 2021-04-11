import React from "react";

const AddTopicForm = () => {
  const addTopicHandler = () => {
    //API call to add a new topic
  };

  return (
    <form action={addTopicHandler}>
      <label for="new-topic">Topic:</label>
      <input type="text" name="new-topic" />
      <button type="reset">Cancel</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTopicForm;

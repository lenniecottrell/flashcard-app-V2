import React from "react";
import TopicSelect from "./TopicSelect";

const AddQuestionForm = ({ setShowNewQuestionModal, topicList }) => {
  const addQuestionHandler = () => {
    //API call to add a new question
  };

  const cancelHandler = () => {
    setShowNewQuestionModal(false);
  };

  return (
    <form
      action="submit"
      onSubmit={addQuestionHandler}
      className="add-question-form"
    >
      <div className="modal-topic-select">
        <TopicSelect topicList={topicList} />
      </div>
      <label for="question-body">Question Body: </label>
      <input type="text" name="question-body" id="question-body" />
      <label for="definition-ans">Definition: </label>
      <input type="text" name="definition-ans" id="definition-ans" />
      <label for="information-ans">Information: </label>
      <input type="text" name="information-ans" id="information-ans" />
      <label for="compare-ans">Compare: </label>
      <input type="text" name="compare-ans" id="compare-ans" />
      <label for="example-ans">Example: </label>
      <input type="text" name="example-ans" id="example-ans" />
      <div className="buttons">
        <button type="reset" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="reset">Reset Data</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default AddQuestionForm;

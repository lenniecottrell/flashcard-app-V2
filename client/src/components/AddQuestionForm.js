import React from "react";

const AddQuestionForm = ({ setShowNewQuestionModal }) => {
  const addQuestionHandler = () => {
    //API call to add a new question
  };

  const cancelHandler = () => {
    setShowNewQuestionModal(false);
  };

  return (
    <div>
      <form action="submit" onSubmit={addQuestionHandler}>
        <label for="question-body">Question Body</label>
        <input type="text" name="question-body" id="question-body" />
        <label for="definition-ans">Definition:</label>
        <input type="text" name="definition-ans" id="definition-ans" />
        <label for="information-ans">Information:</label>
        <input type="text" name="information-ans" id="information-ans" />
        <label for="compare-ans">Compare:</label>
        <input type="text" name="compare-ans" id="compare-ans" />
        <label for="example-ans">Example:</label>
        <input type="text" name="example-ans" id="example-ans" />
        <button type="reset" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="reset">Reset Data</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddQuestionForm;

import React from "react";

const AddQuestionButton = ({ setShowNewQuestionModal }) => {
  return (
    <button onClick={() => setShowNewQuestionModal(true)}>
      Add New Question
    </button>
  );
};

export default AddQuestionButton;

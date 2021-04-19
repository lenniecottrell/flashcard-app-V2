import React from "react";

const EditQuestionButton = ({ setShowEditQuestionModal }) => {
  return (
    <button onClick={() => setShowEditQuestionModal(true)}>
      Edit/delete this question
    </button>
  );
};

export default EditQuestionButton;

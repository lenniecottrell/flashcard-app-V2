import React from "react";

const AddQuestionButton = ({ setShowNewQuestionModal }) => {
  const openQuestionModal = () => {
    setShowNewQuestionModal(true);
  };

  return (
    <div>
      <button onClick={openQuestionModal}>Add New Question</button>
    </div>
  );
};

export default AddQuestionButton;

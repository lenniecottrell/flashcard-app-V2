import React from "react";

const AddTopicButton = ({ setShowNewTopicModal, setShowNewQuestionModal }) => {
  const openTopicModal = () => {
    setShowNewQuestionModal(false);
    setShowNewTopicModal(true);
  };

  return (
    <div className="new-topic-btn-container">
      <button onClick={openTopicModal}>Add New Topic</button>
    </div>
  );
};

export default AddTopicButton;

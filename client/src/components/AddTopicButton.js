import React from "react";

const AddTopicButton = ({ setShowNewTopicModal }) => {
  return (
    <div className="new-topic-btn-container">
      <button onClick={() => setShowNewTopicModal(true)}>Add New Topic</button>
    </div>
  );
};

export default AddTopicButton;

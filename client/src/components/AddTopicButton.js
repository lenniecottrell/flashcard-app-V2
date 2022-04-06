import React from "react";

const AddTopicButton = ({ setShowNewTopicModal }) => {
  return (
      <button onClick={() => setShowNewTopicModal(true)}>Add New Topic</button>
  );
};

export default AddTopicButton;

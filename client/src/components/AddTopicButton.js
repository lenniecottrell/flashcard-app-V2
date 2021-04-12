import React from "react";

const AddTopicButton = ({ setShowNewTopicModal }) => {
  const openTopicModal = () => {
    setShowNewTopicModal(true);
  };

  return (
    <div>
      <button onClick={openTopicModal}>Add New Topic</button>
    </div>
  );
};

export default AddTopicButton;

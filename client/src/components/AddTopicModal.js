import React from "react";

import AddTopicForm from "./AddTopicForm";

const AddTopicModal = ({ showNewTopicModal, setShowNewTopicModal }) => {
  return (
    <>
      {showNewTopicModal && (
        <div className="add-topic-modal">
          <AddTopicForm setShowNewTopicModal={setShowNewTopicModal} />
        </div>
      )}
    </>
  );
};

export default AddTopicModal;

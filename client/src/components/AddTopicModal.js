import React from "react";

import AddTopicForm from "./AddTopicForm";

const AddTopicModal = ({ showNewTopicModal, setShowNewTopicModal }) => {
  return (
    <>
      {showNewTopicModal && (
        <div className="topic-modal-bg">
          <div className="add-topic-modal">
            <AddTopicForm setShowNewTopicModal={setShowNewTopicModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default AddTopicModal;

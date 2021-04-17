import React from "react";

import AddTopicForm from "./AddTopicForm";

const AddTopicModal = ({
  showNewTopicModal,
  setShowNewTopicModal,
  showNewQuestionModal,
  setShowNewQuestionModal,
}) => {
  return (
    <>
      {showNewTopicModal && (
        <div className="topic-modal-bg">
          <div className="add-topic-modal">
            <AddTopicForm
              setShowNewTopicModal={setShowNewTopicModal}
              showNewQuestionModal={showNewQuestionModal}
              setShowNewQuestionModal={setShowNewQuestionModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AddTopicModal;

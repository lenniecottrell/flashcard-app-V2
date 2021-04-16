import React from "react";
import AddQuestionForm from "./AddQuestionForm";

const AddQuestionModal = ({
  topicList,
  showNewQuestionModal,
  setShowNewQuestionModal,
  setShowNewTopicModal,
  showNewTopicModal,
}) => {
  return (
    <>
      {showNewQuestionModal && (
        <div className="question-modal-bg">
          <div className="add-question-modal">
            <AddQuestionForm
              setShowNewQuestionModal={setShowNewQuestionModal}
              topicList={topicList}
              setShowNewTopicModal={setShowNewTopicModal}
              showNewTopicModal={showNewTopicModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AddQuestionModal;

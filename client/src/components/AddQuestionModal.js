import React from "react";
import AddQuestionForm from "./AddQuestionForm";
import AddTopicButton from "./AddTopicButton";

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
            <AddTopicButton
              setShowNewTopicModal={setShowNewTopicModal}
              showNewTopicModal={showNewTopicModal}
            />
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

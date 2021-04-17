import React from "react";
import AddQuestionForm from "./AddQuestionForm";
import AddTopicButton from "./AddTopicButton";

const AddQuestionModal = ({
  topicList,
  showNewQuestionModal,
  setShowNewQuestionModal,
  setShowNewTopicModal,
}) => {
  return (
    <>
      {showNewQuestionModal && (
        <div className="question-modal-bg">
          <div className="add-question-modal">
            <AddTopicButton setShowNewTopicModal={setShowNewTopicModal} />
            <AddQuestionForm
              setShowNewQuestionModal={setShowNewQuestionModal}
              topicList={topicList}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AddQuestionModal;

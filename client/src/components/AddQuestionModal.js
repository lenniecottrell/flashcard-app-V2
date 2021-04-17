import React from "react";
import AddQuestionForm from "./AddQuestionForm";
import AddTopicButton from "./AddTopicButton";
import AddTopicModal from "./AddTopicModal";

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
            <AddTopicModal
              setShowNewTopicModal={setShowNewTopicModal}
              showNewTopicModal={showNewTopicModal}
              setShowNewQuestionModal={setShowNewQuestionModal}
              showNewQuestionModal={showNewQuestionModal}
            />
            <AddTopicButton
              setShowNewTopicModal={setShowNewTopicModal}
              showNewTopicModal={showNewTopicModal}
              setShowNewQuestionModal={setShowNewQuestionModal}
              showNewQuestionModal={showNewQuestionModal}
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

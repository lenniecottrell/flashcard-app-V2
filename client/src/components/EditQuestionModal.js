import React from "react";
import DeleteQuestionButton from "./DeleteQuestionButton";
import EditQuestionForm from "./EditQuestionForm";

const EditQuestionModal = ({
  topicList,
  showEditQuestionModal,
  setShowEditQuestionModal,
}) => {
  return (
    <>
      {showEditQuestionModal && (
        <div className="question-modal-bg">
          <div className="add-question-modal">
            <DeleteQuestionButton />
            <EditQuestionForm
              setShowEditQuestionModal={setShowEditQuestionModal}
              topicList={topicList}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EditQuestionModal;

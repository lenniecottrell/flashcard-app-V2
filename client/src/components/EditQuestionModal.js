import React from "react";
import EditQuestionForm from "./EditQuestionForm";

const EditQuestionModal = ({
  topicList,
  showEditQuestionModal,
  setShowEditQuestionModal,
  question,
  questionId,
  setQuestionId,
  definition,
  information,
  compare,
  example,
  topicId,
  topic,
}) => {
  return (
    <>
      {showEditQuestionModal && (
        <div className="question-modal-bg">
          <div className="add-question-modal">
            {/* TODO: show the current topic here with another button to change topic?? */}
            <EditQuestionForm
              setShowEditQuestionModal={setShowEditQuestionModal}
              topicList={topicList}
              question={question}
              questionId={questionId}
              setQuestionId={setQuestionId}
              definition={definition}
              information={information}
              compare={compare}
              example={example}
              topicId={topicId}
              topic={topic}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EditQuestionModal;

import React from "react";
import DeleteQuestionButton from "./DeleteQuestionButton";
import EditQuestionForm from "./EditQuestionForm";

const EditQuestionModal = ({
  topicList,
  showEditQuestionModal,
  setShowEditQuestionModal,
  question,
  setQuestion,
  questionId,
  setQuestionId,
  definition,
  setDefinition,
  information,
  setInformation,
  compare,
  setCompare,
  example,
  setExample,
  topicId,
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
              question={question}
              setQuestion={setQuestion}
              questionId={questionId}
              setQuestionId={setQuestionId}
              definition={definition}
              setDefinition={setDefinition}
              information={information}
              setInformation={setInformation}
              compare={compare}
              setCompare={setCompare}
              example={example}
              setExample={setExample}
              topicId={topicId}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EditQuestionModal;

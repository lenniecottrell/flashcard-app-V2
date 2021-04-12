import React from "react";
import AddQuestionForm from "./AddQuestionForm";
// import TopicSelect from "./TopicSelect";

const AddQuestionModal = ({
  topicList,
  showNewQuestionModal,
  setShowNewQuestionModal,
}) => {
  return (
    <>
      {showNewQuestionModal && (
        <div className="question-modal-bg">
          <div className="add-question-modal">
            {/* <TopicSelect topicList={topicList} /> */}
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

import React from "react";

import AddTopicForm from "./AddTopicForm";

const AddTopicModal = ({
  showNewTopicModal,
  setShowNewTopicModal,
  setTopicList,
  topicList,
}) => {
  return (
    <>
      {showNewTopicModal && (
        <div className="topic-modal-bg">
          <div className="add-topic-modal">
            <AddTopicForm
              setShowNewTopicModal={setShowNewTopicModal}
              setTopicList={setTopicList}
              topicList={topicList}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AddTopicModal;

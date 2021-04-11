import React from "react";
import AddQuestionForm from "AddQuestionForm";
import TopicSelect from "TopicSelect";

const AddQuestionModal = ({ topicList }) => {
  return (
    <div>
      <TopicSelect topicList={topicList} />
      <AddQuestionForm />
    </div>
  );
};

export default AddQuestionModal;

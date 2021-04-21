import React from "react";

//  ****PRETTY SURE THIS IS USELESS NOW****  //

const DeleteQuestionButton = ({ topicId, questionId }) => {
  // let id_question = questionId;
  // let fk_topic = topicId;
  const deleteQuestionHandler = async () => {
    //alert is not the right choice, but it'll do for now
    alert("Are you sure you want to delete this question?");
    //API call
    //   await fetch(
    //     `http://localhost:5000/topics/${fk_topic}/questions/${id_question}`,
    //     {
    //       method: "DELETE",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(data),
    //     }
    //   )
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));
  };
  return <button onClick={deleteQuestionHandler}>Delete this question</button>;
};

export default DeleteQuestionButton;

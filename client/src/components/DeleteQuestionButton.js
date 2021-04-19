import React from "react";

const DeleteQuestionButton = () => {
  const deleteQuestionHandler = () => {
    //alert is not the right choice, but it'll do for now
    alert("Are you sure you want to delete this question?");
    //API call
    //   await fetch(
    //     `http://localhost:5000/topics/${topic}/questions/${id_question}`,
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
    // };
  };
  return <button onClick={deleteQuestionHandler}>Delete this question</button>;
};

export default DeleteQuestionButton;

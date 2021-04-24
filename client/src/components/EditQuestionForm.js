import React from "react";
import { useForm } from "react-hook-form";

const AddQuestionForm = ({
  setShowEditQuestionModal,
  question,
  questionId,
  definition,
  information,
  compare,
  example,
  topicId,
  topic,
}) => {
  const { register, handleSubmit } = useForm();

  const errorHandler = (errors) => console.error(errors);
  const cancelHandler = () => setShowEditQuestionModal(false);

  //This checks the topic selection for it's ID from the database
  // const handleTopicChange = (e) => {
  //   const selection = e.target.value;
  //   //match the topic selection to the right object in topicList
  //   //get the ID from that object
  //   let selectionId = 0;
  //   for (let i = 0; i < topicList.length; i++) {
  //     if (topicList[i].topic === selection) {
  //       selectionId = topicList[i].id_topic;
  //     }
  //   }
  //   console.log(`ID for ${selection} is ${selectionId}`);
  // };

  const dataHandler = async (data) => {
    //compare everything and only make the calls that need to be made for the things that have changed
    console.log(data);
    console.log(questionId);
    console.log(topicId);
    //API call to add the question to the database
    await fetch(
      `http://localhost:5000/topics/${topicId}/question/${questionId}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
    alert("question was edited");
    //add a window.confirm() to ask if the user is done editing
    let confirm = window.confirm("are you done editing?");
    if (confirm) {
      setShowEditQuestionModal(false);
    }
  };

  const deleteHandler = async () => {
    let confirm = window.confirm(
      "Are you sure you want to delete this question?"
    );
    if (confirm) {
      alert("fetch!");
      //API call
      // await fetch(
      //   `http://localhost:5000/topics/${topicId}/questions/${questionId}`,
      //   {
      //     method: "DELETE",
      //     headers: {
      //       Accept: "application/json",
      //       "Content-Type": "application/json",
      //     },
      //   }
      // )
      //   .then((res) => res.json())
      //   .then((data) => console.log(data));
      setShowEditQuestionModal(false);
    } else {
      alert("Question was not deleted");
    }
  };

  //Store different submission options in two variables
  const onSubmit = handleSubmit(dataHandler, errorHandler);
  const onDelete = handleSubmit(deleteHandler, errorHandler);

  return (
    <form
      // onSubmit={handleSubmit(dataHandler, errorHandler)}
      className="add-question-form"
    >
      <label htmlFor="topicSelect" id="selectLabel">
        Topic:
      </label>
      <div className="topic-section">
        <h4>{topic}</h4>
        {/*TODO: Make this button open ANOTHER topic change modal*/}
        <button onClick={() => window.alert("This doesn't work yet")}>
          Change Topic
        </button>
      </div>
      {/* <select
        {...register("topic", { required: true })}
        className="selectMenu"
        onChange={handleTopicChange}
        defaultValue="select a topic"
      >
        {topicList.map((item) => {
          return (
            <option key={item.id_topic} value={item.topic}>
              {item.topic}
            </option>
          );
        })} 
      </select>*/}
      <label htmlFor="question">Question: </label>
      <input
        {...register("question", { required: true })}
        id="question-body"
        className="q-form-input"
        defaultValue={question}
      />
      <label htmlFor="definition">Definition: </label>
      <textarea
        {...register("definition", { required: true })}
        id="definition-ans"
        className="q-form-input"
        defaultValue={definition}
      ></textarea>
      <label htmlFor="information">Information: </label>
      <textarea
        {...register("information", { required: true })}
        id="information-ans"
        className="q-form-input"
        defaultValue={information}
      ></textarea>
      <label htmlFor="compare-ans">Compare: </label>
      <textarea
        {...register("compare", { required: true })}
        id="compare-ans"
        className="q-form-input"
        defaultValue={compare}
      ></textarea>
      <label htmlFor="example">Example: </label>
      <textarea
        {...register("example", { required: true })}
        id="example-ans"
        className="q-form-input"
        defaultValue={example}
      ></textarea>
      <div className="button-container">
        <input
          type="submit"
          value="Delete"
          onClick={onDelete}
          name="delete"
          className="btn"
        ></input>
        <button type="reset" onClick={cancelHandler} className="btn">
          Cancel
        </button>
        <input
          type="submit"
          value="Submit"
          onClick={onSubmit}
          name="submit"
          className="btn"
        />
      </div>
    </form>
  );
};

export default AddQuestionForm;

import React from "react";
import { useForm } from "react-hook-form";

const AddQuestionForm = ({
  setShowEditQuestionModal,
  topicList,
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

  //This uses the same logic as above, but replaces the topic string in the data object with it's ID in the database
  const dataHandler = async (data) => {
    //compare everything and only make the calls that need to be made for the things that have changed
    console.log(data);
    console.log(questionId);
    console.log(topicId);
    //API call to add the question to the database
    // await fetch(
    //   `http://localhost:5000/topics/${topicId}/question/${questionId}`,
    //   {
    //     method: "PUT",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    setShowEditQuestionModal(false);
  };

  return (
    <form
      onSubmit={handleSubmit(dataHandler, errorHandler)}
      className="add-question-form"
    >
      <label htmlFor="topicSelect" id="selectLabel">
        Topic:
      </label>
      <h5>
        <i>Under Construction</i>
      </h5>
      {/*TODO: Figure out how to get the correct topic to display by default */}
      {/* <select
        {...register("topic", { required: true })}
        className="selectMenu"
        onChange={handleTopicChange}
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
        value={question}
      />
      <label htmlFor="definition">Definition: </label>
      <textarea
        {...register("definition", { required: true })}
        id="definition-ans"
        className="q-form-input"
        value={definition}
      ></textarea>
      <label htmlFor="information">Information: </label>
      <textarea
        {...register("information", { required: true })}
        id="information-ans"
        className="q-form-input"
        value={information}
      ></textarea>
      <label htmlFor="compare-ans">Compare: </label>
      <textarea
        {...register("compare", { required: true })}
        id="compare-ans"
        className="q-form-input"
        value={compare}
      ></textarea>
      <label htmlFor="example">Example: </label>
      <textarea
        {...register("example", { required: true })}
        id="example-ans"
        className="q-form-input"
        value={example}
      ></textarea>
      <div className="button-container">
        <button type="reset" onClick={cancelHandler} className="btn">
          Cancel
        </button>

        <input type="submit" value="Submit" className="btn" />
      </div>
    </form>
  );
};

export default AddQuestionForm;

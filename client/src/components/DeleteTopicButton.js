import React, {useEffect} from "react";

const DeleteTopicButton = ({ topic, topicId, setTopicList, topicList }) => {

  
  const deleteTopicHandler = async () => {
      console.log(topicId);
    let confirm = window.confirm(
      `Are you sure you want to delete topic ${topic}? All associated questions will also be deleted`
      );
      if (confirm) {
      //API call
      await fetch(`http://localhost:5000/topics/${topicId}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        //body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
        console.log(`Topic '${topic}' was deleted`);
        //do a slice or splice here to update the topic list???
      }
    };
//     useEffect(() => {
//       setTopicList()
// }, [setTopicList, topicList])

  

  return <button onClick={deleteTopicHandler}>Delete this topic</button>;
};

export default DeleteTopicButton;

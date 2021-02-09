import React, {useEffect} from 'react'


const TopicText = ({topic, setTopic}) => {
  
  const updateTopic = async (topicId) => {
    const apiCall = await fetch(`http://localhost:5000/topics/${topicId}`)
      .then(response => response.json())
      .then((data) => {
        setTopic(data)
        console.log(data)
      })

    // const response = await apiCall.json()
    // setTopic(response)
  }

  useEffect(() => {
    updateTopic();
  }, [topic])
  
  return (
    <header className="topic">{topic.topic}</header>
    )
  }

export default TopicText
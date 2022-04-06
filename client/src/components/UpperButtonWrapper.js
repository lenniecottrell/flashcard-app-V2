import React from 'react'
import AddQuestionButton from './AddQuestionButton'
import EditQuestionButton from './EditQuestionButton'
import DeleteTopicButton from './DeleteTopicButton'
import AddQuestionModal from './AddQuestionModal'
import AddTopicButton from './AddTopicButton'
import AddTopicModal from './AddTopicModal'
import EditQuestionModal from './EditQuestionModal'


const UpperButtonWrapper = ({showNewQuestionModal,
        setShowNewQuestionModal,
        showEditQuestionModal,
        setShowEditQuestionModal,
        topic,
        topicId,
        setTopicList,
        topicList,
        setShowNewTopicModal,
        showNewTopicModal,
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
        setExample}) => {
  return (
    <div className='upperButtonWrapper'>
      <AddQuestionButton
        showNewQuestionModal={showNewQuestionModal}
        setShowNewQuestionModal={setShowNewQuestionModal}
      />
      <EditQuestionButton
        showEditQuestionModal={showEditQuestionModal}
        setShowEditQuestionModal={setShowEditQuestionModal}
      />
      <DeleteTopicButton
        topic={topic}
        topicId={topicId}
        setTopicList={setTopicList}
      />
      <AddTopicButton
        setShowNewTopicModal= {setShowNewTopicModal}
      />
      <AddQuestionModal
        topicList={topicList}
        showNewQuestionModal={showNewQuestionModal}
        setShowNewQuestionModal={setShowNewQuestionModal}
        setShowNewTopicModal={setShowNewTopicModal}
        showNewTopicModal={showNewTopicModal}
      />
      <AddTopicModal
        setShowNewTopicModal={setShowNewTopicModal}
        showNewTopicModal={showNewTopicModal}
        setShowNewQuestionModal={setShowNewQuestionModal}
        showNewQuestionModal={showNewQuestionModal}
        setTopicList={setTopicList}
        topicList={topicList}
      />
      <EditQuestionModal
        topicList={topicList}
        showEditQuestionModal={showEditQuestionModal}
        setShowEditQuestionModal={setShowEditQuestionModal}
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
        topic={topic}
      />
    </div>
  )
}

export default UpperButtonWrapper
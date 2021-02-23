import React from "react";

//TODO these all need click functions

const DButton = ({ setAnswer, definition }) => {
  return (
    <button
      className="info-button"
      onClick={() => {
        setAnswer(definition);

        // fetch(`http://localhost:5000/topics/2/questions/2`)
        //   .then((res) => res.json())
        //   .then((result) => setAnswer(result.definition));
      }}
    >
      Definition
    </button>
  );
};

const IButton = ({ setAnswer, information }) => {
  return (
    <button
      className="info-button"
      onClick={() => {
        setAnswer(information);

        // fetch(`http://localhost:5000/topics/2/questions/2`)
        //   .then((res) => res.json())
        //   .then((result) => setAnswer(result.information));
      }}
    >
      Information
    </button>
  );
};

const CButton = ({ setAnswer, compare }) => {
  return (
    <button
      className="info-button"
      onClick={() => {
        setAnswer(compare);

        // fetch(`http://localhost:5000/topics/2/questions/2`)
        //   .then((res) => res.json())
        //   .then((result) => setAnswer(result.compare));
      }}
    >
      Compare
    </button>
  );
};

const EButton = ({ setAnswer, example }) => {
  return (
    <button
      className="info-button"
      onClick={() => {
        setAnswer(example);

        // fetch(`http://localhost:5000/topics/2/questions/2`)
        //   .then((res) => res.json())
        //   .then((result) => setAnswer(result.example));
      }}
    >
      Example
    </button>
  );
};

// const ViewAll = () => {
//   return (
//     <button className="view-all">
//       All
//     </button>
//   )
// }

const InfoButtonWrapper = ({
  setAnswer,
  definition,
  information,
  compare,
  example,
}) => {
  return (
    <aside className="info-button-wrapper">
      <DButton setAnswer={setAnswer} definition={definition} />
      <IButton setAnswer={setAnswer} information={information} />
      <CButton setAnswer={setAnswer} compare={compare} />
      <EButton setAnswer={setAnswer} example={example} />
      {/* <ViewAll/> */}
    </aside>
  );
};
export { InfoButtonWrapper };

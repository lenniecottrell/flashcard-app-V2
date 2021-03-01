import React from "react";

const DButton = ({ setAnswer, definition }) => {
  return (
    <button
      className="info-button"
      onClick={() => {
        setAnswer(definition);
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

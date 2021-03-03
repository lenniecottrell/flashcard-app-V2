import React from "react";

const DButton = ({ setAnswer, definition }) => {
  return (
    <button
      className="info-button"
      onClick={() => {
        setAnswer(definition);
      }}
    >
      DEFINITION
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
      INFORMATION
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
      COMPARE
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
      EXAMPLE
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

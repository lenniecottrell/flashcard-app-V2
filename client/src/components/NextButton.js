import React from "react";

const NextButton = ({ handleQuestionChange }) => {
  return (
    <button
      className="nav-btn"
      id="nextBtn"
      onClick={() => handleQuestionChange("next")}
    >
      NEXT
    </button>
  );
};

export default NextButton;

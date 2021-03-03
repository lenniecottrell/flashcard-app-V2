import React from "react";

const PrevButton = ({ handleQuestionChange }) => {
  return (
    <button
      className="nav-btn"
      id="prevBtn"
      onClick={() => handleQuestionChange("prev")}
    >
      PREVIOUS
    </button>
  );
};

export default PrevButton;

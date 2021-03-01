import React from "react";

const PrevButton = ({ handleQuestionChange }) => {
  return (
    <button
      className="nav-btn"
      id="prevBtn"
      onClick={() => handleQuestionChange("prev")}
    >
      Previous
    </button>
  );
};

export default PrevButton;

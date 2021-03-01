import React from "react";

const RandomButton = ({ handleQuestionChange }) => {
  return (
    <button
      className="nav-btn"
      id="randomBtn"
      onClick={() => handleQuestionChange("random")}
    >
      Random
    </button>
  );
};

export default RandomButton;

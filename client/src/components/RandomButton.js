import React from "react";

const RandomButton = ({ handleQuestionChange }) => {
  return (
    <button
      className="nav-btn"
      id="randomBtn"
      onClick={() => handleQuestionChange("random")}
    >
      RANDOM
    </button>
  );
};

export default RandomButton;

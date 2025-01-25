import React from "react";

const Controls = ({ setTextToSpeech }) => {
  return (
    <div className="controls">
      <label>
        <input
          type="checkbox"
          onChange={(e) => setTextToSpeech(e.target.checked)}
        />
        Enable Text-to-Speech
      </label>
    </div>
  );
};

export default Controls;

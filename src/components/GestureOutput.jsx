import React, { useEffect } from "react";

const GestureOutput = ({ gesture, textToSpeech }) => {
  useEffect(() => {
    if (textToSpeech && gesture) {
      const utterance = new SpeechSynthesisUtterance(gesture);
      window.speechSynthesis.speak(utterance);
    }
  }, [gesture, textToSpeech]);

  return (
    <div className="gesture-output">
      <h2>Recognized Gesture:</h2>
      <p>{gesture || "No gesture detected yet."}</p>
    </div>
  );
};

export default GestureOutput;

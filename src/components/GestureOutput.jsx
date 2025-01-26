import React, { useEffect, useState } from "react";
import { FaSignLanguage, FaVolumeUp, FaInfoCircle } from "react-icons/fa";

const GestureOutput = ({ gesture, textToSpeech }) => {
  const [isSpeechPlayed, setIsSpeechPlayed] = useState(false);

  // Function to speak the gesture text
  const speakGesture = () => {
    if (gesture) {
      const utterance = new SpeechSynthesisUtterance(gesture);
      window.speechSynthesis.speak(utterance);
      setIsSpeechPlayed(true); // Mark that the speech has been played
    }
  };

  useEffect(() => {
    if (textToSpeech && gesture && !isSpeechPlayed) {
      speakGesture(); // Automatically speak the gesture when detected
    }
  }, [gesture, textToSpeech, isSpeechPlayed]);

  return (
    <div className="flex flex-col items-center  p-6 bg-white rounded-lg shadow-xl  mx-auto space-y-6 sm:space-y-8 w-full ">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center md:text-4xl">
        Recognized Gesture
      </h2>
      <p className="text-lg text-gray-600 mb-6 text-center">
        {gesture || "No gesture detected yet."}
      </p>

      <div className="flex flex-col items-center w-full space-y-4 mb-6 md:space-y-6">
        <div className="flex items-center space-x-2">
          <FaSignLanguage className="text-4xl text-blue-500" />
          <p className="text-lg text-gray-700 font-semibold">Sign Language Detected</p>
        </div>
        <p className="text-sm text-gray-500 text-center max-w-xs sm:max-w-md md:max-w-lg">
          Sign language is a visual language used by people who are deaf or hard
          of hearing. It relies on hand shapes, movements, and facial expressions
          to convey meaning. The detected gesture represents a word or phrase in
          sign language.
        </p>
      </div>

      {gesture && !isSpeechPlayed && (
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={speakGesture}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 w-full sm:w-auto"
          >
            <FaVolumeUp className="inline-block mr-2" />
            Listen to Gesture
          </button>
        </div>
      )}

      {isSpeechPlayed && gesture && (
        <div className="flex flex-col items-center space-y-4 mt-6">
          <p className="text-gray-500 text-sm">Gesture has been spoken.</p>
          <button
            onClick={speakGesture}
            className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 w-full sm:w-auto"
          >
            <FaVolumeUp className="inline-block mr-2" />
            Listen Again
          </button>
        </div>
      )}

      <div className="flex flex-col items-center mt-6 space-y-4 md:space-y-6">
        <div className="flex items-center space-x-2">
          <FaInfoCircle className="text-2xl text-gray-500" />
          <p className="text-sm text-gray-600 max-w-xs sm:max-w-md md:max-w-lg text-center">
            Sign language recognition technology aims to bridge communication
            gaps and make it easier for people to interact with those who use
            sign language. By detecting gestures, we can improve accessibility
            and promote inclusion for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GestureOutput;

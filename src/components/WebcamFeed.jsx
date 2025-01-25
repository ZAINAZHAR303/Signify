import React, { useRef } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const WebcamFeed = ({ setGesture }) => {
  const webcamRef = useRef(null);

  const captureFrame = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        image: imageSrc,
      });
      setGesture(response.data.gesture);
    } catch (error) {
      console.error("Error fetching gesture:", error);
    }
  };

  return (
    <div className="webcam-feed">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={400}
        height={300}
      />
      <button onClick={captureFrame}>Capture Gesture</button>
    </div>
  );
};

export default WebcamFeed;

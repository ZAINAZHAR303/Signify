import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const WebcamFeed = ({ setGesture }) => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null); // State to store the captured image
  const [isPreview, setIsPreview] = useState(false); // State to toggle preview mode

  // Function to capture the image from webcam
  const captureFrame = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc); // Store the captured image in state
    setIsPreview(true); // Show the preview after capture
  };

  // Function to confirm the captured image and send to the backend
  const confirmAndSend = async () => {
    const formData = new FormData();
    formData.append("file", dataURItoBlob(imageSrc));

    try {
      const response = await axios.post("https://signify-backend.vercel.app/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setGesture(response.data.prediction); // Handle the backend response
      setIsPreview(false); // Hide the preview after sending
    } catch (error) {
      console.error("Error fetching gesture:", error);
    }
  };

  // Function to convert base64 image to Blob
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([uintArray], { type: "image/jpeg" });
  };

  return (
    <div className="webcam-feed">
      {!isPreview ? (
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={400}
            height={300}
          />
          <button onClick={captureFrame}>Capture Gesture</button>
        </div>
      ) : (
        <div>
          <h3>Preview</h3>
          <img src={imageSrc} alt="Preview" width="400" height="300" />
          <div>
            <button onClick={confirmAndSend}>Confirm</button>
            <button onClick={() => setIsPreview(false)}>Retake</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebcamFeed;

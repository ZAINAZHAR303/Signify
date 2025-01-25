import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WebcamFeed from "./components/WebcamFeed";
import GestureOutput from "./components/GestureOutput";
import Controls from "./components/Controls";

const App = () => {
  const [gesture, setGesture] = useState("");
  const [textToSpeech, setTextToSpeech] = useState(false);

  return (
    <div className="app">
      <Header />
      <main>
        <WebcamFeed setGesture={setGesture} />
        <GestureOutput gesture={gesture} textToSpeech={textToSpeech} />
        <Controls setTextToSpeech={setTextToSpeech} />
      </main>
      <Footer />
    </div>
  );
};

export default App;

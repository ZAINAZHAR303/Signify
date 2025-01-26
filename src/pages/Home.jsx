import React, { useState } from 'react'
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import WebcamFeed from '../components/WebcamFeed';
import GestureOutput from '../components/GestureOutput';
import Controls from '../components/Controls';

export const Home = () => {

    const [gesture, setGesture] = useState("");
    const [textToSpeech, setTextToSpeech] = useState(false);
    return (
        <div>
            
            
            <main>
                <WebcamFeed setGesture={setGesture} />
                <GestureOutput gesture={gesture} textToSpeech={textToSpeech} />
                <Controls setTextToSpeech={setTextToSpeech} />
            </main>
            <Footer />
        </div>
    )
}
export default Home
import React, { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import WebcamFeed from "./components/WebcamFeed";
import GestureOutput from "./components/GestureOutput";
import Controls from "./components/Controls";
import AppRoutes from "./Routes";

const App = () => {


  return (
    <div className="app">
    

      <AppRoutes/>
    </div>
  );
};

export default App;

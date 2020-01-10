import React from 'react';
import Logo from './components/Logo/Logo';
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Navigetion from './components/Navigetion/Navigetion';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigetion />
      <Logo />
      <ImageLinkForm />
      {/* 
      <FaceRecognition /> */}
    </div>
  );
}

export default App;

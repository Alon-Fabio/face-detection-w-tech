import React from 'react';
import Particles from 'react-particles-js';
import Logo from './components/Logo/Logo';
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Navigetion from './components/Navigetion/Navigetion';
import './App.css';
/*Import the png logo*/
// import laugh from './components/Logo/laugh.png';

const ParticlesParans = {
  "particles": {
    "number": {
        "value": 200
    },
    "size": {
        "value": 3
    }
},
"interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        }
    }
}
}

function App() {
  return (
    <div className="App">
      <Particles className='Particles' params={ParticlesParans}/>
      <Navigetion />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* 
      <FaceRecognition /> */}
    </div>
  );
}

export default App;

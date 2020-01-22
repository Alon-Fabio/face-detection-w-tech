import React ,{useState,useEffect} from 'react';
import Clarifai from 'clarifai';
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

const app = new Clarifai.App({
  apiKey: '3634fc260367403ca7e2a34a0b974b91'
 });


function App() {

  const [input, setinput] = useState();
  const [submitInput, setsubmitInput] = useState(0);

  const SetInputState = (newState) => {
    setinput(newState.target.value);
    console.log(input);
  };

  const SubmitPicUrl = () => {
    console.log('Click');
    setsubmitInput(submitInput+1);
  }

  useEffect(()=>{
    if(submitInput>0) {
      app.models.initModel({id: Clarifai.FACE_DETECT_MODEL})
      .then(generalModel => {
        return generalModel.predict(input);
      })
      .then(response => {
        // var concepts = response['outputs'][0]['data']['concepts'];
        console.log(response)
      }).catch(err=>console.log("LOG ERR" + err));
    }

  },[submitInput])

  return (
    <div className="App">
      <Particles className='Particles' params={ParticlesParans}/>
      <Navigetion />
      <Logo />
      <Rank />
      <ImageLinkForm GetPicUrl={(event)=>SetInputState(event)} SubmitUrl={SubmitPicUrl} />
      {/* 
      <FaceRecognition /> */}
    </div>
  );
}

export default App;

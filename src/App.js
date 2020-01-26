import React ,{useState,useEffect} from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Logo from './components/Logo/Logo';
import Register from './components/Register/Register';
import SingIn from './components/SingIn/SingIn';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Navigetion from './components/Navigetion/Navigetion';
import './App.css';
/*Import the png logo*/
// import laugh from './components/Logo/laugh.png';

const ParticlesParans = {
  "particles": {
    "number": {
        "value": 100
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
  const [imagUrl, setimagUrl] = useState(0);
  const [faceBoxs, setfaceBoxs] = useState([]);
  const [route, setroute] = useState('signin');
  const [isSignedIn, setisSignedIn] = useState(false);

  const showParticles = (window.screen.width + window.screen.height)/18;

  const ParticlesParans = {
    "particles": {
      "number": {
          "value": showParticles
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

  const SetInputState = (newState) => {
    setinput(newState.target.value);
    console.log(input);
  };

  const SubmitPicUrl = () => {
    setimagUrl(input);
    setsubmitInput(submitInput+1);
  };

  const FindFaceLocation = (ApifaceBoxs) => {
    const image = document.getElementById('inputimage');
    const StyleImag = window.getComputedStyle(image, null);
    const heigth = Math.floor(Number(StyleImag.height.slice(0,-2)));
    const width = Math.floor(Number(StyleImag.width.slice(0,-2)));
      return {
      leftCol: (ApifaceBoxs.left_col * width),
      topRow: (ApifaceBoxs.top_row * heigth),
      rightCol: (width) - (ApifaceBoxs.right_col * width),
      bottomRow: (heigth) - (ApifaceBoxs.bottom_row * heigth)
    }
  };

  const ChangeRoute = (goTo) => {
    if (goTo === 'signin') {
      setisSignedIn(false);
    } else if (goTo === 'home') {
    setisSignedIn(true);
    }
    
    setroute(String(goTo));
    console.log("goTo :" + goTo + "route :" +route)
  }

  useEffect(()=>{
    if(submitInput>0) {
      app.models.initModel({id: Clarifai.FACE_DETECT_MODEL})
      .then(FACE_DETECT => {
        return FACE_DETECT.predict(input);
      })
      .then(response => {
        var concepts = response.outputs[0].data.regions;
        setfaceBoxs(()=>concepts.map((box)=> FindFaceLocation(box.region_info.bounding_box)));
      }).catch(err=>console.log("LOG ERR" + err));
    }

  },[submitInput])

  return (
    <div className="App">
      <Particles className='Particles' params={ParticlesParans}/>
      <Navigetion singedIn={isSignedIn} onRouteChange={ChangeRoute} />
      {route === 'home' ?
      <div>
        <Logo />
        <Rank />
        <ImageLinkForm GetPicUrl={(event)=>SetInputState(event)} SubmitUrl={SubmitPicUrl} />
        <FaceRecognition UrlToShow={imagUrl} Boxes={faceBoxs}/>
      </div> :
      (route === 'signin' ?
        <SingIn onRouteChange={ChangeRoute} /> :
        <Register onRouteChange={ChangeRoute}/>
      )
      
      }
    </div>
  );
}

export default App;

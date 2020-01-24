import React ,{useState,useEffect} from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Logo from './components/Logo/Logo';
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
  const [faceBoxs, setfaceBoxs] = useState({});

  const SetInputState = (newState) => {
    setinput(newState.target.value);
    console.log(input);
  };

  const SubmitPicUrl = () => {
    setimagUrl(input);
    setsubmitInput(submitInput+1);
  };

  const FindFaceLocation = (faceBoxs) => {
    const image = document.getElementById('inputimage');
    const StyleImag = window.getComputedStyle(image, null);
    const heigth = Number(StyleImag.height.slice(0,-2));
    const width = Number(StyleImag.width.slice(0,-2));
    console.log(width,heigth);
    console.log ({
      leftCol: faceBoxs[0].left_col * width,
      topRow: faceBoxs.top_row * heigth,
      rightCol: width - (faceBoxs.right_col * width),
      bottomRow: heigth - (faceBoxs.bottom_row * heigth)
    })
  };

  const DisplayFaceBox = ()=>{
    
  };

  useEffect(()=>{
    if(submitInput>0) {
      app.models.initModel({id: Clarifai.FACE_DETECT_MODEL})
      .then(FACE_DETECT => {
        return FACE_DETECT.predict(input);
      })
      .then(response => {
        var concepts = response.outputs[0].data.regions;
        let Boxs = concepts.map((box, index)=> FindFaceLocation(box.region_info.bounding_box[index]));
        console.log(Boxs);
        setfaceBoxs((faceBoxs)=>[faceBoxs,Boxs]);
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
      <FaceRecognition UrlToShow={imagUrl}/>
    </div>
  );
}

export default App;

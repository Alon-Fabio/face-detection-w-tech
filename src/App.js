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



function App() {

  const [input, setinput] = useState();
  const [submitInput, setsubmitInput] = useState(0);
  const [imagUrl, setimagUrl] = useState("");
  const [faceBoxs, setfaceBoxs] = useState([]);
  const [route, setroute] = useState('signin');
  const [isSignedIn, setisSignedIn] = useState(false);
  const [user, setuser] = useState({
    id:"",
    name:"",
    email:"",
    entries:"",
    joined:""
  });

  const showParticles = (screenWidth) => {
      if (window.screen.width < 1000){
        return 30;
      }else { return 150};
  };

  const ParticlesParans = {
    "particles": {
      "number": {
          "value": showParticles(window.screen.width)
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
  const dosumthing =() =>{
    console.log(user);
  }

  const SetInputState = (newState) => {
    setinput(newState.target.value);
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

  const onUserChange =(newUser)=>{
    setuser(
      {...user,
      id:newUser.id,
      name:newUser.name,
      email:newUser.email,
      entries:newUser.entries,
      joined:newUser.joined}
    )
  }

  const onResetUser = () =>{
    setuser({
      id:"",
      name:"",
      email:"",
      entries:"",
      joined:""
    });
    setimagUrl("");
    setfaceBoxs([]);
  }

  const ChangeRoute = (goTo) => {
    if (goTo === 'signin') {
      onResetUser();
      setisSignedIn(false);
    } else if (goTo === 'home') {
      setisSignedIn(true);
    }
    
    setroute(String(goTo));
  }
  useEffect(()=>{
    if(submitInput>0) {
      fetch('http://localhost:9000/imageApi', {
                method:'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                input: input,
                id:user.id
            })}).then((res)=>res.json())
      .then(response => {
        let concepts = response.APIres.outputs[0].data.regions;
        setfaceBoxs(()=>concepts.map((box)=> FindFaceLocation(box.region_info.bounding_box)));
        setuser({...user, entries:response.entries});
      })
      .catch(err=>{
        alert('somthing went wrong.. please check your URL and try again');
        console.log("LOG ERR" + err)});
    }

  },[submitInput])

  return (
    <div className="App">
      <Particles className='Particles' params={ParticlesParans}/>
      {route === 'home' ?
      <div>
        <Navigetion singedIn={isSignedIn} onRouteChange={ChangeRoute} />
        <Logo click={dosumthing}/>
        <Rank userInfo={user} />
        <ImageLinkForm GetPicUrl={(event)=>SetInputState(event)} SubmitUrl={SubmitPicUrl} />
        <FaceRecognition UrlToShow={imagUrl} Boxes={faceBoxs}/>
      </div> :
      route === 'signin' &&
        <SingIn onRouteChange={ChangeRoute} onReUserChange={onUserChange} />
      }
    </div>
  );
}

export default App;

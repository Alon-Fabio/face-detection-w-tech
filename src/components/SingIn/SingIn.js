import React, {useEffect, useState} from 'react';

const SingIn = ({onRouteChange,onReUserChange}) => {

    const [userLIPass, setuserLIPass] = useState();
    const [userLIEmail, setuserLIEmail] = useState("");
    const [userName, setuserName] = useState("")
    const [onSubmit, setonSubmit] = useState(0);
    const [register, setregister] = useState('signin');

    const UpdateSate = (e, state) => {
        switch(state){
            case setonSubmit:
                state(onSubmit +1)
                break;
            case 'signin':
                setregister('register')
                break;
            case 'register':
                setregister('signin')
                break;
            default:
                state(e.target.value)
        }
        console.log(state, e.target.value)
            
    }

    useEffect(()=>{
        console.log("updated")
        if ((userLIEmail.length > 0 && userLIPass.length > 0) || (register ===true && userName.length > 0 && userLIEmail.length > 0 && userLIPass.length > 0)) {
                fetch(`http://localhost:9000/${register}`, {
                method:'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email:userLIEmail,
                    password:userLIPass,
                    name:userName
                })
            })
            .then((res)=>res.json())
            .then((user)=>{
                if (user.email) {
                    console.log(user)
                    onReUserChange(user);
                    onRouteChange('home');
                } else if (user==="Unabel to register") {
                    alert("Something went wrong..\nPlease try a differnt Email or try again later")
                } else {
                    alert("User name or Password is incorrect")
                }
            })
        }
        
      },[onSubmit])
      
      
    return(
        <div className='SingIn br3 ba shadow-5 b--black-20 mv4 w-100 w-50-m w-25-l mw50 center'>
            <main className="pa4 black-80">
            <div className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                {register === 'register' ?
                <div>
                    <legend className="f4 fw6 ph0 mh0 center">Be one of us</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 form-control" htmlFor="name-address">Name</label>
                        <input onChange={(Event)=>UpdateSate(Event,setuserName)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="userName"></input>
                    </div>
                </div>
                :<legend className="f4 fw6 ph0 mh0">Sign In</legend>}
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input onChange={(Event)=>UpdateSate(Event,setuserLIEmail)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"></input>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input onChange={(Event)=>UpdateSate(Event,setuserLIPass)} autoComplete='' className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"></input>
                </div>
                </fieldset>
                <div className="">
                <input onClick={(Event)=>UpdateSate(Event,setonSubmit)} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value={register.charAt(0).toUpperCase() + register.slice(1)}></input>
                </div>
                <div className="lh-copy mt3">
                {register === 'signin' ?
                    <p onClick={(Event)=>UpdateSate(Event,register)} href="#0" className="f6 link dim black db pointer">Register</p>:
                    <p onClick={(Event)=>UpdateSate(Event,register)} href="#0" className="f6 link dim black db pointer">Sing In</p>
                }
                </div>
            </div>
            </main>
        </div>
    );
}

export default SingIn;
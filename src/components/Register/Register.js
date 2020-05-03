import React, {useEffect, useState} from 'react';

const Register = ({onRouteChange,onReUserChange}) => {
    
    const [userRePass, setuserRePass] = useState("");
    const [userReEmail, setuserReEmail] = useState("");
    const [userReName, setuserReNeme] = useState("");
    const [onRegister, setonRegister] = useState(0);
    
    const ServerCall = () => {
            if (userReEmail.length > 0 && userReName.length > 0 && userRePass.length > 0) {
                fetch('http://localhost:9000/register', {
                method:'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email:userReEmail,
                    password:userRePass,
                    name:userReName
                })
            })
            .then((res)=>res.json())
            .then((user)=>{
                if ("Unabel to register"!==user){
                    onReUserChange(user);
                    onRouteChange('home');
                } else if ("Unabel to register"===user) {
                    alert("Oh oh.. something went wrong..\nPlease try a differnt Email or try again later")
                }
            }).catch(err=>console.log(err))
        }
    }

    const onSubmitRegister = ()=>{
        setonRegister(onRegister +1)
        
    }

    const onUserReEmailChange = (e) =>{
        setuserReEmail(e.target.value)
    };
    
    const onUserRePassChange = (e) =>{
        setuserRePass(e.target.value)
    };
    
    const onUserReNameChange = (e) =>{
        setuserReNeme(e.target.value)
    };

    useEffect(()=>{
        console.log("useEffect register running")
        ServerCall()
        
      },[onRegister])

    return(
        <div className='Register br3 ba shadow-5 b--black-20 mv4 w-100 w-50-m w-25-l mw50 center'>    
            <main className="pa4 black-80">
            <div className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Be one of us</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name-address">Name</label>
                    <input onChange={onUserReNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="userName"></input>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input onChange={onUserReEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"></input>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input onChange={onUserRePassChange} autoComplete='' className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"></input>
                </div>
                </fieldset>
                <div className="">
                <input onClick={onSubmitRegister} className="ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="register"></input>
                </div>
                <div className="lh-copy mt3">
                </div>
            </div>
            </main>
        </div>
    );
}

export default Register;
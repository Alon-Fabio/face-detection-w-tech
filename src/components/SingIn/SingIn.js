import React from 'react';

const SingIn = ({onRouteChange}) => {
    return(
        <div className='SingIn br3 ba shadow-5 b--black-20 mv4 w-100 w-50-m w-25-l mw50 center'>
            <main className="pa4 black-80">
            <div className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"></input>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input autoComplete='' className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"></input>
                </div>
                </fieldset>
                <div className="">
                <input onClick={()=>onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"></input>
                </div>
                <div className="lh-copy mt3">
                <p onClick={()=>onRouteChange('register')} href="#0" className="f6 link dim black db pointer">Register</p>
                </div>
            </div>
            </main>
        </div>
    );
}

export default SingIn;
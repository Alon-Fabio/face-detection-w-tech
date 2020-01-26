import React from 'react';

const Navigetion = ({onRouteChange,singedIn}) => {
    
        if (singedIn){
            return (
                <div className={"Navigetion"} style={{display:'flex',justifyContent:'flex-end'}}>
                    <p onClick={()=>onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>{"Sing Out"}</p>
                </div>
            );} else {
                return(
                    <div className={"Navigetion"} style={{display:'flex',justifyContent:'flex-end'}}>
                        <p onClick={()=>onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>{"Sing In"}</p>
                        <p onClick={()=>onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>{"Register"}</p>
                    </div>
                )}
}

export default Navigetion;
import React from 'react';

const Navigetion = ({doSomeThing}) => {
    return(
        <div className={"Navigetion"} style={{display:'flex',justifyContent:'flex-end'}}>
            <p onClick={doSomeThing} className='f3 link dim black underline pa3 pointer'>{"Sing Out"}</p>
        </div>
    );
}

export default Navigetion;
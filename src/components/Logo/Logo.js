import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt';

const Logo = () => {
    return(
        <div className='Logo ma4 mt0'>
            <Tilt
                className="Logo-tilt br2 shadow-2 Tilt"
                options={{ max : 50 }}
                style={{ height: 150, width: 150 }}>
                    <div className="Tilt-inner">
                        <img alt="Logo" src={require("./laugh.png")}></img>
                    </div>
            </Tilt>
        </div>
    );
}

export default Logo;
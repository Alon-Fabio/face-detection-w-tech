import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt';
import laugh from './laugh.png';

const Logo = () => {
    return(
        <div className='Logo ma4 mt0'>
            <Tilt
                className="Logo-tilthover br2 shadow-2 Tilt"
                options={{ max : 50 }}
                style={{ height: 150, width: 150 }}>
                    <div className="Tilt-inner pa3">
                        <img alt="Logo" src={laugh}></img>
                    </div>
            </Tilt>
        </div>
    );
}

export default Logo;
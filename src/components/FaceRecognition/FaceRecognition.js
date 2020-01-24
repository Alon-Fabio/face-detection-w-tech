import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({UrlToShow}) => {
    return(
        <div className='FaceRecognition ma flexCenter'>
            <div className='absolute mt2'>
                <img id='inputimage' alt={''} src={UrlToShow} width='70%' height='auto' ></img>
            </div>
        </div>
    );
}

export default FaceRecognition;
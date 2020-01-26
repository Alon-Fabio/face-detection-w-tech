import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({UrlToShow,Boxes}) => {
    
    return(
        <div className='FaceRecognition ma flexCenter'>
            <div className='absolute mt2'>
                <img id='inputimage' alt={''} src={UrlToShow} width='500vw' height='auto' ></img>
                    {Boxes.map((Box, i)=>{
                        return(<div key={i} className='bounding-box'
                        style={{
                            top: Box.topRow,
                            right: Box.rightCol,
                            bottom: Box.bottomRow,
                            left: Box.leftCol,
                        }}>
                            
                        </div>)
                    })}
            </div>
        </div>
    );
}

export default FaceRecognition;

                    
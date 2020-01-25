import React from 'react';
import './FaceRecognition.css';
import FacesBox from '../FacesBox/FacesBox';

const FaceRecognition = ({UrlToShow,Boxes}) => {
    
    return(
        <div className='FaceRecognition ma flexCenter'>
            <div className='absolute mt2'>
                <img id='inputimage' alt={''} src={UrlToShow} width='70%' height='auto' ></img>
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

{/* <div className='bounding-box'
                    style={{
                        top: Boxes.topRow,
                        right: Boxes.rightCol,
                        bottom: Boxes.bottomRow,
                        left: Boxes.leftCol,
                    }}>
                        
                    </div> */}

                    
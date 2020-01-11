import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div className='ImageLinkForm'>
            <p className='f3'>{"This will detect faces in your picture, Give it a try !"}</p>
            <div className='flexCenter'>
                <div className='InputField pa4 br3 shadow-5 w-50'>
                    <input className='f4 pa2 w-70 center' type="text"></input>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' >{"Detect"}</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;
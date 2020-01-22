import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({GetPicUrl,SubmitUrl}) => {
    return (
        <div className='ImageLinkForm'>
            <p className='f3'>{"This will detect faces in your picture, Give it a try !"}</p>
            <div className='flexCenter'>
                <div className='InputField pa4 br3 shadow-5 w-50'>
                    <input onChange={GetPicUrl} className='f4 pa2 w-70 center' type="text"></input>
                    <button onClick={SubmitUrl} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' >{"Detect"}</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;
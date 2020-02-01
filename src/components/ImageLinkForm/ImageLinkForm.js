import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({GetPicUrl,SubmitUrl}) => {
    return (
        <div className='ImageLinkForm w-100 w-70-m w-60-l center'>
            <p className='f3'>{"This will detect faces in your picture, Give it a try !"}</p>
            <div className='flexCenter'>
                <div className='InputField flexCenter pa4 br3 shadow-5 w-100'>
                     {/* <div className="upload-btn-wrapper w-30 grow link dib ">
                        <button className="btn bg-light-purple white">Upload a picture</button>
                        <input type="file" name="myfile" onChange={GetPicUrl} />
                    </div> */}
                    <input onChange={GetPicUrl} id="InputUrl" className=' f4 pa2 w-70 center' type="text"></input>
                    <button onClick={SubmitUrl} id="UrlButton" className=' w-30 grow f4 link ph3 pv2 dib white bg-light-purple' >{"Detect"}</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;
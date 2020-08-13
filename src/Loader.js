import React from 'react';
import loadingGif from './static/loading/150x150.gif';

export default function Loader(){
    return(
        <div className="loader">
            <img src={loadingGif} alt="loader-gif"/>
        </div>
    )
}
import React from "react";  
import Gif from './Gif';

export default function GifList({gifs}){
    return (
        <>
            {gifs.length === 0 ? <div className="empty">Search Some GIF</div> : gifs.map(gif=>{
            return <Gif url={gif.media[0].gif.url} key={gif.id} name={gif.url.substring(18,gif.url.length)} s={gif.url}/>
        }) }
        </>
        
    )
}
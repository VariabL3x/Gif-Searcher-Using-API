import React from "react";  
import axios from 'axios';


export default function Gif({url,name,s}){
    
    function downloadImage(e){
        const {name, src} = e.target.dataset;
        console.log(name,src)
        const file = new Blob([src],{type:"image/*"})
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = name;
        element.click();
        element.remove();
        // fetch(src,{mode:'cors'})
        //     .then((response)=>response.blob())
        //     .then((blob)=>{
        //         console.log(blob);
        //     })

    }

    function startDownload(e){
        const {name, src} = e.target.dataset;
        console.log(name,src)
        var image = new Image();
        image.crossOrigin = "anonymous";
        image.src = src;
        
        image.onload = function () {
            var canvas = document.createElement('canvas');
            canvas.width = this.naturalWidth; 
            canvas.height = this.naturalHeight;
            canvas.getContext('2d').drawImage(this, 0, 0);
            var blob;
            if (image.src.indexOf(".jpg") > -1) {
                blob = canvas.toDataURL("image/jpeg");
            } else if (image.src.indexOf(".png") > -1) {
                blob = canvas.toDataURL("image/png");
            } else if (image.src.indexOf(".gif") > -1) {
                blob = canvas.toDataURL("image/gif");
            } else {
                blob = canvas.toDataURL("image/png");
            }
            console.log(blob);
            
            var a = document.createElement('a');
            a.href = blob;
            a.download = name;
            document.body.appendChild(a); 
            a.click();    
            a.remove();  
        };
    }
    return(
        <div className="img-container">
            <img src={url} alt={url} width="150px" height="150px"/>
            <button className="download-btn" onClick={downloadImage} data-name={name} data-src={url}>Download</button>
        </div>
    )
}
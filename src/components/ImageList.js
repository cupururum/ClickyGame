import React from "react";
import Image from "./Image"


const ImageList = (props) => (
        <div className="container"> 
            <div className="row image-container">
                <div className="col-md-2"> </div>
                <div className="col-md-8">
                    <div className="image-list">
                        {props.images.map(image => (
                            <img className="image" src={image.src} key={image.id} />
                        ))}
                    </div>
                </div>
                <div className="col-md-2"> </div>
            </div>
        </div>  
  
);

export default ImageList;
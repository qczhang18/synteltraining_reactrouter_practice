import React, {Component} from 'react';

function Images(props){
	// Map through images
  let imagesMap = props.imagesMap.map((image)=>{
    return (
        <img className="img-responsive" src={image} />
    );
  });

  return imagesMap;
}

export default Images;
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

     const [images, setImages] = useState ([]);

     const getImages = async() => {
      const newImages = await getGifs( category );
      setImages(newImages);
    }
  


    useEffect( () =>{
    getImages();
    }, [ ])
  
  return (
    <>
      <h3>{category}</h3>
      <o>
        {
          images.map(( {id, title }) => (
            <li key={ id }>{title}</li>
            )) 
        }
        
        

      </o>
    </>
  )
}

export default GifGrid;

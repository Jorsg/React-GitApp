/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import GitItem from './GitItem';
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs( category );

  console.log({images, isLoading});

    //  const [images, setImages] = useState ([]);

    //  const getImages = async() => {
    //   const newImages = await getGifs( category );
    //   setImages(newImages);
    // }

    // useEffect( () =>{
    // getImages();
    // }, [ ])

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
          images.map(( image ) => (
           <GitItem key={ image.id }
          { ...image }
           />
            ))
        }
      </div>
    </>
  )
}

export default GifGrid;

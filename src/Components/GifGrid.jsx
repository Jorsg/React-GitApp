/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import GitItem from './GitItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs( category );

  return (
    <>
      <h3>{category}</h3>
      {
         isLoading &&  (<h2>Cargando...</h2>)
      }

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

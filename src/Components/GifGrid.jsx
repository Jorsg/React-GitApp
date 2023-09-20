/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {


    useEffect( () =>{
    getGifs(category);
    }, [ ])
  
  return (
    <>
      <h3>{category}</h3>
    </>
  )
}

export default GifGrid;

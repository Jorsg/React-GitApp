/* eslint-disable no-unused-vars */
import { useState } from "react";
import AddCategory from "./Components/AddCategory";


const GifExpertApp = () => {

const [categories, setCatagories] = useState([ 'Dragon Ball Z','One Punch']);

 const onAddCategory = () => setCatagories([...categories,'Bastards']);

  return (
    <>
    {/* titulo */}
      <h1>GifExperApp</h1>

      {/* input */}
      <AddCategory setCatagories={setCatagories}/>

      {/* listado de gif */}
      <button onClick={onAddCategory}>Agregar Categoria</button>
      <ol>
        { 
        categories.map( category => { 
              return <li key={ category }>{category}</li>
            }) 
        }
      </ol>

      {/* Gif item */}
    </>
  )
}

export default GifExpertApp

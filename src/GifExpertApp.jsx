/* eslint-disable no-unused-vars */
import { useState } from "react";
import AddCategory from "./Components/AddCategory";


const GifExpertApp = () => {

const [categories, setCategories] = useState([ 'Dragon Ball Z','One Punch']);

  const onAddCategory = (newCategory) =>{ 
    
          if(categories.includes(newCategory)) return;

          setCategories([newCategory,...categories]);

    }


  return (
    <>
    {/* titulo */}
      <h1>GifExperApp</h1>

      {/* input */}
      <AddCategory 
      onNewCategory ={event =>{onAddCategory(event)}}
      // setCategories={setCategories}
      />

      {/* listado de gif */}
      {/* <button onClick={onAddCategory}>Agregar Categoria</button> */}
      <ol>
        { 
        categories.map( (category) => { 
              return <li key={ category }>{category}</li>
            }) 
        }
      </ol>

      {/* Gif item */}
    </>
  )
}

export default GifExpertApp

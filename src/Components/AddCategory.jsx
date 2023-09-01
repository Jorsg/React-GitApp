/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('Dragon Ball')

    const onInputChange = ({target}) => setInputValue(target.value);

    const onSubmit = (event) => {
      event.preventDefault();
      setCategories(categories => [inputValue, ...categories]);
      // setCategories(categories => [inputValue, ...categories]);
    
    };
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input type='text'
      placeholder='Bucar gifs'
      value={inputValue}
      onChange={onInputChange}/>
    </form>
  )
}

export default AddCategory

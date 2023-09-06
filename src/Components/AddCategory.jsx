/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => setInputValue(target.value);

    const onSubmit = (event) => {
      event.preventDefault();
      if(inputValue.trim().length <= 1) return;
      setCategories(categories => [inputValue, ...categories]);
      setInputValue('');

    };
  return (
    <form onSubmit={ onSubmit}>
      <input type='text'
      placeholder='Bucar gifs'
      value={inputValue}
      onChange={onInputChange}/>
    </form>
  )
}

export default AddCategory

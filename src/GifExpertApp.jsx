/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball Z"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExperApp</h1>
      <AddCategory
        onNewCategory={(event) => {
          onAddCategory(event);
        }}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;

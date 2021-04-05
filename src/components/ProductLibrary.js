import React, { useState } from "react";
import { categoriesData } from "./../data/categoriesData";

const ProductLibrary = () => {
  const [categories, setCategories] = useState(categoriesData);
  return (
    <>
      {categories.map((category) => {
        const { id, name } = category;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default ProductLibrary;

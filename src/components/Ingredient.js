import React, { useState } from "react";

function Ingredient(props) {
  const [box, setBox] = useState(["fig"]);

  const handleClick = (e) => {
    e.preventDefault();
    setBox((box) => {
      return [...box, props.title];
    });
  };

  return (
    <>
      <div className="ingredients">
        <img
          src={props.icon}
          key={props.key}
          alt={props.title}
          onClick={handleClick}
        ></img>
      </div>
    </>
  );
}

export default Ingredient;

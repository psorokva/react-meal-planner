import React from "react";

function Ingredient(props) {
  return (
    <div className="ingredients">
      <img src={props.icon} key={props.key} alt={props.title}></img>
    </div>
  );
}

export default Ingredient;

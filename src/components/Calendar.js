import React, { useState } from "react";
import Ingredient from "./Ingredient";

function Calendar(props) {
  return (
    <div className="calendar">
      <h4>{props.title}</h4>
      <section className="section">{props.menu}</section>
    </div>
  );
}

export default Calendar;

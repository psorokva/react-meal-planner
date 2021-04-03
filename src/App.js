import React from "react";
import Calendar from "./components/Calendar";
import Ingredient from "./components/Ingredient";
import { ingredients } from "./components/Ingredients";
import Fridge from "./components/Fridge";
import Pantry from "./components/Pantry";

function App() {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div>
      <section className="container">
        {weekdays.map((weekday) => {
          return <Calendar title={weekday} />;
        })}
      </section>
      <section>
        {ingredients.map((ingredient) => {
          return <Ingredient key={ingredient.id} {...ingredient} />;
        })}
      </section>
      <section>
        <Fridge />
      </section>
      <section>
        <Pantry />
      </section>
    </div>
  );
}

export default App;

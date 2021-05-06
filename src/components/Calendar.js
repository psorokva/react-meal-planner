import React, { Component } from "react";
import "../styles/Calendar.css";

export default class Calendar extends Component {
  state = {
    ingredients: [
      {
        id: 1,
        title: "apple",
        group: "fruits",
        type: "none",
      },
      {
        id: 2,
        title: "banana",
        group: "fruits",
        type: "none",
      },
      {
        id: 3,
        title: "eggplant",
        group: "vegetables",
        type: "none",
      },
      {
        id: 4,
        title: "salmon",
        group: "protein",
        type: "mon",
      },
    ],
  };

  onDragStart = (event, title) => {
    console.log("dragstart on div: ", title);
    event.dataTransfer.setData("title", title);
  };
  onDragOver = (event) => {
    event.preventDefault();
  };

  onDrop = (event, cat) => {
    let title = event.dataTransfer.getData("title");

    let ingredients = this.state.ingredients.filter((ingredient) => {
      if (ingredient.title === title) {
        ingredient.type = cat;
      }
      return ingredient;
    });

    this.setState({
      ...this.state,
      ingredients,
    });
  };

  render() {
    var days = {
      none: [],
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    };
    this.state.ingredients.forEach((ingredient) => {
      days[ingredient.type].push(
        <div
          key={ingredient.id}
          onDragStart={(event) => this.onDragStart(event, ingredient.title)}
          draggable
          className="draggable"
        >
          {ingredient.title}
        </div>
      );
    });
    return (
      <>
        <div className="drag-container">
          <div
            className="droppable"
            onDragOver={(event) => this.onDragOver(event)}
            onDrop={(event) => this.onDrop(event, "none")}
          >
            <span className="day-header">None</span>
            {days.none}
          </div>
          <div
            className="droppable"
            onDragOver={(event) => this.onDragOver(event)}
            onDrop={(event) => this.onDrop(event, "mon")}
          >
            <span className="day-header">Monday</span>
            {days.mon}
          </div>
          <div
            className="droppable"
            onDragOver={(event) => this.onDragOver(event)}
            onDrop={(event) => this.onDrop(event, "tue")}
          >
            <span className="day-header">Tuesday</span>
            {days.tue}
          </div>
          <div
            className="droppable"
            onDragOver={(event) => this.onDragOver(event)}
            onDrop={(event) => this.onDrop(event, "wed")}
          >
            <span className="day-header">Wednesday</span>
            {days.wed}
          </div>
          <div
            className="droppable"
            onDragOver={(event) => this.onDragOver(event)}
            onDrop={(event) => this.onDrop(event, "thu")}
          >
            <span className="day-header">Thursday</span>
            {days.thu}
          </div>
          <div
            className="droppable"
            onDragOver={(event) => this.onDragOver(event)}
            onDrop={(event) => this.onDrop(event, "fri")}
          >
            <span className="day-header">Friday</span>
            {days.fri}
          </div>
          <div
            className="droppable"
            onDragOver={(event) => this.onDragOver(event)}
            onDrop={(event) => this.onDrop(event, "sat")}
          >
            <span className="day-header">Saturday</span>
            {days.sat}
          </div>
          <div
            className="droppable"
            onDragOver={(event) => this.onDragOver(event)}
            onDrop={(event) => this.onDrop(event, "sun")}
          >
            <span className="day-header">Sunday</span>
            {days.sun}
          </div>
        </div>
      </>
    );
  }
}

// function Calendar(props) {
//   return (
//     <div className="calendar">
//       <h4>{props.title}</h4>
//       <section className="section">{props.menu}</section>
//     </div>
//   );
// }

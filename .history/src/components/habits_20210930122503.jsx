import React, { Component } from "react";
import Habit from "./habit.jsx";

class habits extends Component {
  state = {
    habits: [
      { name: "Reading", count: 0 },
      { name: "Running", count: 0 },
      { name: "Coding", count: 0 },
    ],
  };
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit />
        ))}
      </ul>
    );
  }
}

export default habits;

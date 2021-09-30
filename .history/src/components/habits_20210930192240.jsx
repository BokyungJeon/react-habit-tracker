import React, { Component } from "react";
import Habit from "./habit";

class habits extends Component {
  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncreament={this.props.onIncreament}
            onDecreament={this.props.onDecreament}
            onDelete={this.props.onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default habits;
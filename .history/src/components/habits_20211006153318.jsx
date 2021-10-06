import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class habits extends Component {
  hadleAdd = (name) => {
    this.props.onAdd;
  };
  render() {
    return (
      <>
        <HabitAddForm onAdd={this.hadleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncreament={this.props.onIncreament}
              onDecreament={this.props.onDecreament}
              onDelete={this.props.onDelete}
              onAdd={this.hadleAdd}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default habits;

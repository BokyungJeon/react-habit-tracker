import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class habits extends Component {
  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncreament={this.props.onIncreament}
              onDecreament={this.props.onDecreament}
              onDelete={this.props.onDelete}
              onAdd={this.handleAdd}
            />
          ))}
        </ul>
        <button className="add-button" onReset={this.props.handleReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default habits;

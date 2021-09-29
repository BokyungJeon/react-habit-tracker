import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncreament = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecreament = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleIncreament = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncreament}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecreament}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;

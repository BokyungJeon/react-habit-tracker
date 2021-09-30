import React, { Component } from "react";

class Habit extends Component {
  // handleIncreament = () => {
  //   this.props.onIncreament(this.props.habit);
  // };

  handleDecreament = () => {
    this.props.onDecreament(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.props.handleIncreament(habit)}
          // 함수에 전달되는 인자와 그 안에서 호출하는 인자가 동일한 경우 문법을 간소화 할 수 있다.
          // onClick={(event) => this.handleIncreament(event)}의 문법 간소화
          // onClick={(event) => this.makeMeal(this.rice)}처럼 전달되는 인자가 다른 경우에는 생략할 수 없다.
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecreament}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;

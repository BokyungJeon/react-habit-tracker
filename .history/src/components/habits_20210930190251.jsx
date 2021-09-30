import React, { Component } from "react";
import Habit from "./habit";

class habits extends Component {
  handleIncreament = (habit) => {
    this.props.onIncreament(habit);
  };

  handleDecreament = (habit) => {
    this.props.onDecreament(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          // key에 고유한 값을 지정해 주어 리액트의 불필요한 재렌더링을 방지해 성능을 개선한다.
          // 배열의 인덱스는 사용금지. 같은 아이템도 순서가 바뀌면 배열의 인덱스가 바뀌는데 키 값이 되면 동일한 오브젝트여도 인식하지 못함.
          <Habit
            key={habit.id}
            habit={habit}
            onIncreament={this.handleIncreament}
            onDecreament={this.handleDecreament}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default habits;

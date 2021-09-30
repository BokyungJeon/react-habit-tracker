import React, { Component } from "react";
import Habit from "./habit";

class habits extends Component {
  state = {
    habits: [
      // id는 key를 위해 지정
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncreament = (habit) => {
    console.log(`handleIncrement ${habit.name}`);
    const habits = [...this.state.habits]; // 새로운 배열껍데기에 배열 내용을 하나하나 복사해옴(주소값 복사한 것이기 때문에 같은 개체임)
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits }); // { habits: habits } 키와 밸류가 같으면 생략가능
    // 아래처럼 리액트에서 state 오브젝트를 직접 수정하는 것은 좋지 않다.
    // habit.count++;
    // this.setState(this.state);
  };

  handleDecreament = (habit) => {
    console.log(`handleDecrement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habit[index].count - 1;
    habits[index].count = count < 0 ? 0 : count; // 좋지않은 코드
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`);
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
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

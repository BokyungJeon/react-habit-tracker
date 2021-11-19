import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

// PureComponent는 ShouldComponentUpdated를 구현해 shallow(state & props) comparison을 한다.
// shallow comparison은 reference를 비교해 값이 같으면 업데이트(render()를 다시 호출) 하지 않는다.
// 오브젝트 안(자식 오브젝트)의 데이터 값이 바뀌어도 오브젝트의 ref값이 같으면 같은 것으로 보고 업데이트 되지 않는다.
// 이를 해결하기 위한 방법 1. 변하는 값을 따로 빼서 오브젝트로 전달한다(로직상 불편).
// 2. 오브젝트는 불변으로 두고 내부의 작은 데이터 변경이 발생할 때 새로운 오브젝트를 만든다. -(상태 관리 라이브러리 존재)
class App extends Component {
  state = {
    habits: [
      // id는 key를 위해 지정
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // console.log(`handleIncrement ${habit.name}`);
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;

    // shallow comparison을 피하기 위한 방법 2.
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 }; // deconstructing object. 새로운 오브젝트에 안의 내용을 하나씩 복사해서 넣어줌
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    // console.log(`handleDecrement ${habit.name}`);
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    // console.log(`handleDelete ${habit.name}`);
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;

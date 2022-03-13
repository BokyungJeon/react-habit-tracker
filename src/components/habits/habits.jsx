import React, { Component } from 'react';
import Habit from '../habit/habit';
import HabitAddForm from '../form/habitAddForm';

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  //   handleDelete = (habit) => {
  //     this.props.onDelete(habit);
  //   };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    console.log('habits');
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.props.onDelete}
              // 이렇게 바로 호출하면 위에 일일이 멤버변수를 작성하지 않아도 된다.
              // 대신 멤버함수가 호출 될 때마다 에로우함수가 매번 만들어지므로 메모리에 영향을 미친다.
              // 이정도는 상대적으로 큰 영향을 미치지 않아서 괜찮다.
              // 단, 절대 이렇게 사용하면 안되는 경우도 있다. 후에 리액트 훅에서 설명.
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;

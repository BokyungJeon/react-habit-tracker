import React, { PureComponent } from 'react';

// PureComponent도 Component를 상속하기 때문에 lifecycle함수를 사용할 수 있다.
export default class Habit extends PureComponent {
  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mounted`);
    // 타이머 시작
    // 실시간 채팅에서 소켓 초기화
  }

  componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} will unmount`);
    // 타이머 중지
    // 정리하고 리소스 지우기
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    // console.log(this.props.habit);
    // const habitName = this.props.habit.name;
    const { name, count } = this.props.habit;
    // console.log(`habit: ${name}`);
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
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

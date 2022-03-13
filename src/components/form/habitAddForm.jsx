// component 단축키 rcc-tab
// function 단축키 rsi-tab
// const habitAddForm = (props) => {};
// function HabitAddForm(props) {} 처럼 할당안하고 순수함수로도 작성가능

// PureComponent를 function으로 바꿀 때는 memo를 사용
import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;

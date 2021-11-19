import React, { PureComponent } from "react";

// PureComponent는 ShouldComponentUpdated를 구현해 shallow(state & props) comparison을 한다.
// shallow comparison은 reference를 비교해 값이 같으면 업데이트(render()를 다시 호출) 하지 않는다.
// 오브젝트 안(자식 오브젝트)의 데이터 값이 바뀌어도 오브젝트의 ref값이 같으면 같은 것으로 보고 업데이트 되지 않는다.
// 이를 해결하기 위한 방법 1. 변하는 값을 따로 빼서 오브젝트로 전달한다(로직상 불편).
// 2. 오브젝트는 불변으로 두고 내부의 작은 데이터 변경이 발생할 때 새로운 오브젝트를 만든다. -(상태 관리 라이브러리 존재)
class HabitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = "";
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Input your habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;

import React, { useState, useRef, useCallback, useEffect } from "react";
import "../app.css";

// React Hooks
// https://reactjs.org/docs/hooks-intro.html
// function에서도 state, ref, callback.. 등등을 사용할 수 있게 해주는 API
// this., .binding을 사용하지 않아도 되고 코드 중복을 줄일 수 있다.

// class SimpleHabit extends Component처럼 class로 컴포넌트를 만들면 클래스 안의 멤버변수들(hadleIncrement 등)은 클래스가 만들어질 때 딱 한번만 만들어진다.
// class의 state나 props가 업데이트 되면 클래스 안의 render()함수만 반복해서 호출이 되는 구조이다.
// 반면 function component를 만들면 컴포넌트가 변경(state, props)되면 코드블록 전체({})가 반복해서 호출된다.
// 함수 내부의 지역변수(const hadleIncrement 등)도 업데이트 될 때마다 계속계속 반복 호출된다.
// useState는 React Hook에서 제공하는 APIs 중 하나로 함수가 반복 호출되어도 state가 리셋되지 않고 컴포넌트에 연결된 state가 따로 메모리에 저장 되어있어 동일한 값을 받아온다.
const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef(); // React.createRef()처럼 매번 호출될 때마다 새로운 ref를 만드는 것이 아니라 한 번만 만들어 메모리에 저장해 놓고 다시 사용한다.

  // 콜백함수도 그냥 쓰면 만약 자식 컴포넌트의 onClick에 props로 콜백을 전달했을 때 memo를 써도 props로 전달되는 함수 자체가 변경되기 때문에 실질적 내용은 변한게 없어도 memo에서 계속 업데이트됨.
  // 이를 방지하고자 useCallback()을 사용해 리액트에 캐시하고 반복 호출되어도 동일한 콜백함수를 전달한다. 단, 주의할 점이 있는데 나중에 공부.
  const hadleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  // useEffect: omponentDidMount와 componentDidUpdate를 결합
  // 컴포넌트가 처음 mount되었을 때 한번, 그 후 업데이트 될 때마다 호출됨
  // 두번째 인자로 배열을 추가하면 그 값이 변경되었을 때만 함수가 호출되도록 할 수 있다.
  // 두번째 인자를 전달하지 않으면 기존 state나 props이 변경될 때마다 호출된다.
  // 두번째 인자에 비어있는 배열 ,[]을 전달하면 처음 마운트 되었을 때만 호출된다.
  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  }, [count]);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={hadleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

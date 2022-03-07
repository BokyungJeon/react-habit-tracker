import React, { useCallback, useEffect, useRef, useState } from 'react';

// React Hooks
// https://reactjs.org/docs/hooks-intro.html
// function컴포넌트에서도 state, ref, callback 등과 lifecycle methods를 사용할 수 있게 해주는 API
// this., .binding을 사용하지 않아도 되고 코드 중복을 줄일 수 있다.

// class SimpleHabit extends Component처럼 class로 컴포넌트를 만들면 클래스 안의 멤버변수들(hadleIncrement 등)은 클래스가 만들어질 때 딱 한번만 만들어진다.
// class의 state나 props가 업데이트 되면 클래스 안의 render()함수만 반복해서 호출이 되는 구조이다.
// 반면 function component를 만들면 컴포넌트가 변경(state, props)되면 코드블록 전체({})가 반복해서 호출된다.
// 함수 내부의 지역변수(const hadleIncrement 등)도 업데이트 될 때마다 계속계속 반복 호출된다.
// useState는 React Hook에서 제공하는 APIs 중 하나로 함수가 반복 호출되어도 state가 리셋되지 않고 컴포넌트에 연결된 state가 따로 메모리에 저장 되어있어 동일한 값을 받아온다.
const SimpleHabit = () => {
  // state = {
  //     count: 0,
  //   };
  const [count, setCount] = useState(0);
  const spanRef = useRef();
  // 함수에서 React.createRef(); 사용하면 state가 변경될때마다 코드블럭이 반복 실행되고 createRef는 계속 호출되면서 새로운 레퍼런스를 만들어 새로 할당
  // 리액트 훅에 useRef를 사용해 한번만 만들어 메모리에 저장해놓고 그 것을 재사용함

  // handleIncrement같은 콜백함수도 메모리에 저장하여 재사용 가능
  // 함수가 호출될 때마다 handleIncrement함수가 새로 만들어지니까 onClick에 계속 새로운 함수가 할당됨
  // 만약 자식 컴포넌트의 onClick에 props으로 콜백을 전달했을 때 memo라는 캐시컴포넌트를 써도 props로 전달되는 함수(참조값) 자체가 변경되기 때문에 실질적인 내용은 변한게 없어도 memo가 계속 업데이트됨
  // 이를 방지하기 위해 useCallback을 사용. 자동으로 리액트가 캐시해서 반복해서 호출해도 동일한 함수를 전달함.
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  // useEffect(): omponentDidMount와 componentDidUpdate를 결합
  // 컴포넌트가 처음 mount되었을 때 한번, 그 후 state나 props가 업데이트(변경) 될 때마다 호출됨
  // 두번째 인자를 전달하지 않으면 기존 state나 props이 변경될 때마다 호출됨
  // 두번째 인자로 배열을 추가(, [변경값1, 변경값2])하면 처음 마운트 되었을 때만 실행되고 그 후로는 해당 값이 변경되었을 때만 함수가 호출됨
  // 두번째 인자에 비어있는 배열 ,[]을 전달하면 처음 마운트 되었을 때만 호출됨
  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  }, [count]);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

// class가 한 번 만들어지면 클래스안의 멤버변수들은 클래스가 만들어질 때 딱 한 번만 만들어진다(할당된다).
// 대신에 stete가 변경되거나 props이 업데이트 되면 render함수만 반복해서 호출이 된다.
// 함수형 컴포넌트는 함수이기 때문에 컴포넌트가 변경되면 코드블락{}안의 내용 전체가 반복해서 호출이된다.
// 때문에 함수 내부에 지역변수도 무한 반복해 업데이트 된다.
// useState는 리액트 훅에서 제공하는 API 중 하나로 컴포넌트에 연결된 state는 따로 저장이 되어있어 동일한 값을 받아옴.

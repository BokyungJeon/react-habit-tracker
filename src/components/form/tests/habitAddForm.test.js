import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HabitAddForm from '../habitAddForm';
import renderer from 'react-test-renderer';

describe('HabitAddForm', () => {
  it('renders', () => {
    // 스냅샷 테스트를 실행
    // npm install react-test-renderer --save-dev
    // 기존의 형태를 다른 개발자가 바꾸다 달라지지 않도록 스탭샷으로 보관. 비교 테스트 가능
    // 스냅샷을 업데이트할 때는 npm run test -- -u
    const component = renderer.create(<HabitAddForm onAdd={jest.fn()} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('Form Submit', () => {
    let onAdd;
    let input;
    let button;
    beforeEach(() => {
      onAdd = jest.fn();
      render(<HabitAddForm onAdd={onAdd} />);
      input = screen.getByPlaceholderText('Habit');
      button = screen.getByText('Add');
    });

    it('calls onAdd when button is clicked and valid habit is entered', () => {
      userEvent.type(input, 'New Habit');
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledWith('New Habit');
    });

    it('deos not call onAdd when the habit is empty', () => {
      userEvent.type(input, '');
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledTimes(0);
    });
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Workouts from './Workouts';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Workouts />, div);
});

it('renders welcome message', () => {
  render(<Workouts />);
  expect(screen.getByText('Workouts')).toBeInTheDocument();
});

test('workout table loads and buttons open popups', () => {
  render(
    <Workouts email={'test@gmail.com'} />
  )
  const element = screen.getByTestId('workouttable')
  expect(element.rows.length).toBe(1)

  const buttonelement = screen.getByTestId('addexercisebutton')
  userEvent.click(buttonelement)

  const popupelement = screen.getByTestId('addexercisepopup')

  const buttonelement2 = screen.getByTestId('addworkoutbutton')
  userEvent.click(buttonelement2)

  const popupelement2 = screen.getByTestId('addworkoutpopup')
})

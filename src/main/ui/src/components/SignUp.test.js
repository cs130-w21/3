import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignIn from './SignIn';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignIn />, div);
});

it('renders welcome message', () => {
  render(<SignIn />);
  expect(screen.getByText('Sign In')).toBeInTheDocument();
});

test('sign in button works', () => {
  const handleSubmit = jest.fn()
  render(
    <SignIn onSubmit={handleSubmit} resetError={() => {}} />
  )
  userEvent.click(screen.getByTestId('signinbutton'))
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})

test('test email and password', () => {
  const handleSubmit = jest.fn()
  render(
    <SignIn onSubmit={handleSubmit} resetError={() => {}} />
  )
  fireEvent.change(screen.getByTestId('emailfield'), 'test@gmail.com')
  fireEvent.change(screen.getByTestId('passwordfield'), 'test123')
})

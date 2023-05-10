/* eslint-disable testing-library/prefer-screen-queries */
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders app component with welcome text', () => {
    render(<App />);
    const linkElement = screen.getByText("Welcome to Todo App!!!!!");
    
    expect(linkElement).toBeInTheDocument();
  });

  test('renders with add button', () => {
    const {getByText} = render(<App/>)

    expect(getByText('Add')).toBeTruthy();
  })

  test('renders with Todo component', () => {
    const {getByTestId} = render(<App/>)

    expect(getByTestId('Todo-component')).toBeTruthy();
  })
});

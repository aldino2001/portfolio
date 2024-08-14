import { render, screen } from '@testing-library/react';
import { act } from 'react';
import App from './App';

test('renders learn dockers link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn dockers/i);
  expect(linkElement).toBeInTheDocument();
});

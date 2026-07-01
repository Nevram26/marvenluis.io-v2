import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app with home heading', () => {
  render(<App />);
  expect(screen.getAllByText(/Marven Joffre Luis/i).length).toBeGreaterThan(0);
});

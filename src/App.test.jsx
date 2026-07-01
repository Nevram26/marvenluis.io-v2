import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app with home heading', () => {
  render(<App />);
  expect(screen.getByText(/Marven Joffre Luis/i)).toBeInTheDocument();
});
